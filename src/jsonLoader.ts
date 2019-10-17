import LogEntry from "./interfaces/LogEntry";
import RawLogEntry from "./interfaces/RawLogEntry";
import groupSimilarEntries from "./groupSimilarEntries";

/** Reads the log entries from "errors.json", groups sequential entries into a `LogEntry` and returns it. */
export default async function getJson(): Promise<LogEntry[]> {
  const fileContents = await fetch("./errors.json");
  const json = await fileContents.json() as { data: RawLogEntry[] };

  return groupSimilarEntries(json.data);
}
