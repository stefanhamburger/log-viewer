import React from 'react';
import { Text } from 'office-ui-fabric-react';
import LogEntry from '../interfaces/LogEntry';
import Table from './Table';

export default function App({ logEntries }: { logEntries: LogEntry[] }): JSX.Element {
  const numLogEntries = logEntries.length;

  return (<>
    <h1><Text variant="xxLarge">Log viewer</Text></h1>
    {numLogEntries === 0
      ? <Text block={true}>No log entries found.</Text>
      : (<>
        <Text block={true}>Found {numLogEntries} log entries.</Text>
        <p><label>Filter by name: <input type="search" /></label></p>
        <p><label>Level: <select><option defaultChecked>All</option><option>Notice</option><option>Debug</option></select></label></p>
        <p><label>Facility: <select><option defaultChecked>All</option><option>GF::afml</option><option>GF::eai:eproduct</option></select></label></p>
        <p><label>Time display: <select><option defaultChecked>Relative</option><option>Absolute</option></select></label></p>
        <Table logEntries={logEntries} />
      </>)}
  </>);
}
