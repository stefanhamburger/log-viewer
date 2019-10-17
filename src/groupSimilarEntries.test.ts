import LogEntry from "./interfaces/LogEntry";
import RawLogEntry from "./interfaces/RawLogEntry";
import groupSimilarEntries from "./groupSimilarEntries";

const testDate = new Date();

const input: RawLogEntry[] = [
  {
    level: "Notice",
    message: "First message",
    facility: "HQ",
    timeStamp: testDate.toISOString(),
  },
  {
    level: "Debug",
    message: "Second message",
    facility: "HQ",
    timeStamp: testDate.toISOString(),
  },
  {
    level: "Debug",
    message: "Third message",
    facility: "HQ",
    timeStamp: testDate.toISOString(),
  },
  {
    level: "Debug",
    message: "Fourth message",
    facility: "Branch",
    timeStamp: testDate.toISOString(),
  },
];
const output: LogEntry[] = [
  {
    level: "Notice",
    message: "First message",
    facility: "HQ",
    timeStamp: testDate,
  },
  {
    level: "Debug",
    message: "Second message\nThird message",
    facility: "HQ",
    timeStamp: testDate,
  },
  {
    level: "Debug",
    message: "Fourth message",
    facility: "Branch",
    timeStamp: testDate,
  },
];

test("groups four entries into three", () => {
  expect(groupSimilarEntries(input)).toEqual(output);
})
