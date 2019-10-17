import LogEntry from "./LogEntry";

export default interface State {
  logEntries: LogEntry[];
  totalEntries: number;
  filter: {
    name: string;
    levels: string[],
    facilities: string[],
    relativeTime: boolean,
  };
}
