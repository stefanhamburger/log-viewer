import React from "react";
import { Text } from "office-ui-fabric-react";
import Filter from "./Filter";
import State from "../interfaces/State";
import Table from "./Table";

export default function App({ state }: { state: State }): JSX.Element {
  const numLogEntries = state.logEntries.length;

  return (<>
    <h1><Text variant="xxLarge">Log viewer</Text></h1>
    {state.totalEntries === 0
      ? <Text block={true}>No log entries found.</Text>
      : (<>
        <Text block={true} styles={{ root: { marginBottom: "1em" } }}>
          Found {state.totalEntries} log entries
          {numLogEntries < state.totalEntries && `, and showing ${numLogEntries} filtered entries`}
          .
        </Text>
        <Filter state={state} />
        <Table logEntries={state.logEntries} relativeTime={state.filter.relativeTime} />
      </>)}
  </>);
}
