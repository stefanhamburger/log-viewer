import LogEntry from "./LogEntry";

let logEntries: LogEntry[] = [];

export function getState(): LogEntry[] {
  return logEntries;
}

export function setState(newEntries: LogEntry[]): void {
  logEntries = newEntries;
}
