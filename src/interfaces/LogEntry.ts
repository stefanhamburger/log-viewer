export default interface LogEntry {
  message?: string;
  facility?: string;
  level?: "Notice" | "Debug" | string;
  timeStamp?: Date;
}
