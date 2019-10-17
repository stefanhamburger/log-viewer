import React from "react";
import { Dropdown, IDropdownOption, TextField, Toggle } from "office-ui-fabric-react";
import State from '../interfaces/State';
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

export default function Filter({ state }: { state: State }): JSX.Element {
  return (<div style={{ display: "flex", flexWrap: "wrap" }}>
    <TextField
      label="Filter by name:"
      onChange={(event, text) => setFilter(function(filter) { filter.name = text === undefined ? "" : text; })}
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
  </div>);
}
