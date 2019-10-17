import LogEntry from "./LogEntry";

interface RawLogEntry {
  message?: string;
  facility?: string;
  level?: "Notice" | "Debug" | string;
  timeStamp?: string;
}

/** Reads the log entries from "errors.json", parses it into `LogEntry` and returns it. */
export default async function getJson(): Promise<LogEntry[]> {
  const fileContents = await fetch("./errors.json");
  const json = await fileContents.json() as { data: RawLogEntry[] };

  return json.data.map(({ message, facility, level, timeStamp }) => ({
    message,
    facility,
    level,
    timeStamp: timeStamp === undefined ? undefined : new Date(timeStamp),
  }));
}
