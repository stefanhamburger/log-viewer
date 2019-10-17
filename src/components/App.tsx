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

function getDropdownOptions(obj: { [key: string]: boolean }): IDropdownOption[] {
  return Object.keys(obj).map(name => ({ key: name, text: name }));
}
function getSelectedOptions(obj: { [key: string]: boolean }): string[] {
  return Object.entries(obj).filter(([, selected]) => selected).map(([key]) => key);
}

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
            options={getDropdownOptions(state.filter.levels)}
            selectedKeys={getSelectedOptions(state.filter.levels)}
            onChange={(event, item) => item && setFilter(function(filter) { filter.levels[item.key] = Boolean(item.selected); })}
            styles={dropdownStyles}
            />
          <Dropdown
            label="Facility:"
            multiSelect
            options={getDropdownOptions(state.filter.facilities)}
            selectedKeys={getSelectedOptions(state.filter.facilities)}
            onChange={(event, item) => item && setFilter(function(filter) { filter.facilities[item.key] = Boolean(item.selected); })}
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
