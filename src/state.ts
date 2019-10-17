import LogEntry from "./LogEntry";

let logEntries: LogEntry[] = [];

/** Returns the currently stored log entries. */
export function getState(): LogEntry[] {
  return logEntries;
}

/** Stores the given log entries in the state. */
export function setState(newEntries: LogEntry[]): void {
  logEntries = newEntries;
}
