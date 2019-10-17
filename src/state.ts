import LogEntry from "./interfaces/LogEntry";
import State from "./interfaces/State";
import render from './render';

const state: State = {
  logEntries: [],
  filter: {
    name: "",
    levels: [],
    facilities: [],
    relativeTime: true,
  }
}

/** Returns the currently stored log entries and filter preferences. */
export function getState(): State {
  return state;
}

/** Stores the given log entries in the state. */
export function setEntries(newEntries: LogEntry[]): void {
  state.logEntries = newEntries;
  state.filter.levels = state.logEntries.map(({ level }) => level).filter((level, index, array) => level && array.indexOf(level) === index) as string[];
  state.filter.facilities = state.logEntries.map(({ facility }) => facility).filter((facility, index, array) => facility && array.indexOf(facility) === index) as string[];
  render();
}

export function setFilter(callback: (filter: State["filter"]) => void): void {
  callback(state.filter);
  render();
}
