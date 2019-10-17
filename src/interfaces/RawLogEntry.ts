export default interface RawLogEntry {
  message?: string;
  facility?: string;
  level?: "Notice" | "Debug" | string;
  timeStamp?: string;
}
