import LogEntry from "./LogEntry";

export default interface State {
  logEntries: LogEntry[];
  totalEntries: number;
  filter: {
    name: string;
    levels: { [key: string]: boolean; },
    facilities: { [key: string]: boolean; },
    relativeTime: boolean,
  };
}
