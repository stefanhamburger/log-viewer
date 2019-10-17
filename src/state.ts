import LogEntry from "./interfaces/LogEntry";
import State from "./interfaces/State";
import render from './render';

let logEntries: State["logEntries"] = [];

const filter: State["filter"] = {
  name: "",
  levels: {},
  facilities: {},
  relativeTime: true,
};

/** Returns the currently stored log entries and filter preferences. */
export function getState(): State {
  const filteredEntries = logEntries
    .filter(entry => entry.level !== undefined && filter.levels[entry.level])
    .filter(entry => entry.facility !== undefined && filter.facilities[entry.facility]);

  return {
    logEntries: filteredEntries,
    totalEntries: logEntries.length,
    filter,
  };
}

function removeDuplicates(entry: string | undefined, index: number, array: (string | undefined)[]): boolean {
  return entry !== undefined && array.indexOf(entry) === index;
}
function createFilterObject(callback: (entry: LogEntry) => string | undefined): { [key: string]: boolean } {
  return logEntries
    .map(callback)
    .filter(removeDuplicates)
    .reduce((obj, key) => { obj[key as string] = true; return obj; }, {} as { [key: string]: boolean });
}

/** Stores the given log entries in the state, and updates the UI. */
export function setEntries(newEntries: LogEntry[]): void {
  logEntries = newEntries;
  filter.levels = createFilterObject(({ level }) => level);
  filter.facilities = createFilterObject(({ facility }) => facility);
  render();
}

/** Calls the given callback function with the current filter, and redraws the UI based on the updated filter. */
export function setFilter(callback: (filter: State["filter"]) => void): void {
  callback(filter);
  render();
}
