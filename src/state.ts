import LogEntry from "./interfaces/LogEntry";
import State from "./interfaces/State";
import render from './render';

let logEntries: State["logEntries"] = [];

const filter: State["filter"] = {
  name: "",
  levels: [],
  facilities: [],
  relativeTime: true,
};

/** Returns the currently stored log entries and filter preferences. */
export function getState(): State {
  return {
    logEntries, // TODO: need to return filtered `logEntries`
    totalEntries: logEntries.length,
    filter,
  };
}

function removeDuplicates(entry: string | undefined, index: number, array: (string | undefined)[]): boolean {
  return entry !== undefined && array.indexOf(entry) === index;
}

/** Stores the given log entries in the state, and updates the UI. */
export function setEntries(newEntries: LogEntry[]): void {
  logEntries = newEntries;
  filter.levels = logEntries.map(({ level }) => level).filter(removeDuplicates) as string[];
  filter.facilities = logEntries.map(({ facility }) => facility).filter(removeDuplicates) as string[];
  render();
}

/** Calls the given callback function with the current filter, and redraws the UI based on the updated filter. */
export function setFilter(callback: (filter: State["filter"]) => void): void {
  callback(filter);
  render();
}
