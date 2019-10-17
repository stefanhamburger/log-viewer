import React from 'react';
import { Text } from 'office-ui-fabric-react';
import LogEntry from '../LogEntry';
import Table from './Table';

export default function App({ logEntries }: { logEntries: LogEntry[] }): JSX.Element {
  const numLogEntries = logEntries.length;

  return (<>
    <h1><Text variant="xxLarge">Log viewer</Text></h1>
    {numLogEntries === 0
      ? <Text>No log entries found.</Text>
      : (<>
        <Text>Found {numLogEntries} log entries.</Text>
        <Table logEntries={logEntries} />
      </>)}
  </>);
}
