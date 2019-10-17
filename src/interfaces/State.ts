import LogEntry from "./LogEntry";

export default interface State {
  logEntries: LogEntry[];
  filter: {
    name: string;
    levels: string[],
    facilities: string[],
    relativeTime: boolean,
  };
}
