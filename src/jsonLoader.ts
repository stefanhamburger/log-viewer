import LogEntry from "./interfaces/LogEntry";
import RawLogEntry from "./interfaces/RawLogEntry";

function isSimilar(entry1: RawLogEntry, entry2: RawLogEntry): boolean {
  return entry1.level === entry2.level && entry1.facility === entry2.facility && entry1.timeStamp === entry2.timeStamp;
}

function rawEntryToEntry(entry: RawLogEntry): LogEntry {
  return {
    level: entry.level,
    message: entry.message,
    facility: entry.facility,
    timeStamp: entry.timeStamp === undefined ? undefined : new Date(entry.timeStamp),
  };
}

function groupSimilarEntries(entries: RawLogEntry[]): LogEntry[] {
  if (entries.length === 0) return [];

  const firstEntry = entries[0];
  const entriesWithoutFirst = entries.filter((entry, index) => index !== 0);

  const groupedEntries = entriesWithoutFirst.reduce(({ list, previousEntry }, curEntry) => {
    if (isSimilar(previousEntry, curEntry)) {
      previousEntry.message += `\n${curEntry.message}`;
      return { list, previousEntry };
    } else {
      list.push(previousEntry);
      return { list, previousEntry: curEntry };
    }
  }, { list: [] as RawLogEntry[], previousEntry: firstEntry });

  groupedEntries.list.push(groupedEntries.previousEntry);

  return groupedEntries.list.map(entry => rawEntryToEntry(entry));
}

/** Reads the log entries from "errors.json", groups sequential entries into a `LogEntry` and returns it. */
export default async function getJson(): Promise<LogEntry[]> {
  const fileContents = await fetch("./errors.json");
  const json = await fileContents.json() as { data: RawLogEntry[] };

  return groupSimilarEntries(json.data);
}
