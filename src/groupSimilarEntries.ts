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

export default function groupSimilarEntries(entries: RawLogEntry[]): LogEntry[] {
  if (entries.length === 0) {
    return [];
  }

  const entriesCopy = entries.slice(0);

  const list: RawLogEntry[] = [];
  let previousEntry = entriesCopy.shift() as RawLogEntry;
  let curEntry: RawLogEntry | undefined;

  // eslint-disable-next-line no-cond-assign
  while (curEntry = entriesCopy.shift()) {
    if (isSimilar(previousEntry, curEntry)) {
      previousEntry.message += `\n${curEntry.message}`;
    } else {
      list.push(previousEntry);
      previousEntry = curEntry;
    }
  }

  list.push(previousEntry);

  return list.map(entry => rawEntryToEntry(entry));
}
