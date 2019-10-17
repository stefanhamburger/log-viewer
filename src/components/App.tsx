import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import LogEntry from '../LogEntry';

export default function App({ logEntries }: { logEntries: LogEntry[] }): JSX.Element {
  return (
    <table>
      <tbody>
        {logEntries.map((entry, index) => (
          <tr key={index}>
            <td>{entry.level}</td>
            <td>{entry.message}</td>
            <td>{entry.facility}</td>
            <td>{String(entry.timeStamp)}</td>
          </tr>)
        )}
      </tbody>
    </table>
  );
}
