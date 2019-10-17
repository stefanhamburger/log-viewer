import React from "react";
import { Dropdown, IDropdownOption, Text, TextField, Toggle } from "office-ui-fabric-react";
import State from "../interfaces/State";
import Table from "./Table";
import { setFilter } from '../state';

const controlStyles = {
  root: {
    margin: "0 30px 20px 0",
    maxWidth: "300px",
  }
};
const dropdownStyles = {
  root: {
    margin: "0 30px 20px 0",
    maxWidth: "300px",
  },
  dropdown: {
    minWidth: "200px",
  },
};

const levels: IDropdownOption[] = [
  { key: "Notice", text: "Notice" },
  { key: "Debug", text: "Debug" },
];
const facilities: IDropdownOption[] = [
  { key: "GF::afml", text: "GF::afml" },
  { key: "GF::eai:eproduct", text: "GF::eai:eproduct" },
];

export default function App({ state }: { state: State }): JSX.Element {
  const numLogEntries = state.logEntries.length;

  return (<>
    <h1><Text variant="xxLarge">Log viewer</Text></h1>
    {numLogEntries === 0
      ? <Text block={true}>No log entries found.</Text>
      : (<>
        <Text block={true}>Found {numLogEntries} log entries.</Text>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <TextField
            label="Filter by name:"
            onChange={() => { }}
            styles={controlStyles}
          />
          <Dropdown
            label="Level:"
            multiSelect
            options={levels}
            onChange={() => { }}
            styles={dropdownStyles}
          />
          <Dropdown
            label="Facility:"
            multiSelect
            options={facilities}
            onChange={() => { }}
            styles={dropdownStyles}
          />
          <Toggle
            label="Time display"
            onText="Relative"
            offText="Absolute"
            checked={state.filter.relativeTime}
            onChange={(event, checked) => setFilter(function(filter) { filter.relativeTime = Boolean(checked); })}
            styles={controlStyles}
          />
        </div>
        <Table logEntries={state.logEntries} relativeTime={state.filter.relativeTime} />
      </>)}
  </>);
}
