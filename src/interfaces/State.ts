import LogEntry from "./LogEntry";

export default interface State {
  logEntries: LogEntry[];
  totalEntries: number;
  filter: {
    message: string;
    levels: { [key: string]: boolean; },
    facilities: { [key: string]: boolean; },
    relativeTime: boolean,
  };
}
