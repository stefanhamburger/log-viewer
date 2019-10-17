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
  state.filter.levels = state.logEntries.reduce((levels, { level }) => { if (level && !levels.includes(level)) levels.push(level); return levels; }, [] as string[]);
  state.filter.facilities = state.logEntries.reduce((facilities, { facility }) => { if (facility && !facilities.includes(facility)) facilities.push(facility); return facilities; }, [] as string[]);
  render();
}

export function setFilter(callback: (filter: State["filter"]) => void): void {
  callback(state.filter);
  render();
}
