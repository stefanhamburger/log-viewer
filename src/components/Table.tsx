import React from 'react';
import { DetailsList, IColumn, SelectionMode } from 'office-ui-fabric-react';
import LogEntry from '../LogEntry';

const columns: IColumn[] = [
  {
    key: "level",
    name: "Level",
    minWidth: 50,
    maxWidth: 50,
    onRender: (item: LogEntry) => {
      return item.level;
    },
  },
  {
    key: "message",
    name: "Message",
    minWidth: 100,
    onRender: (item: LogEntry) => {
      return item.message;
    },
  },
  {
    key: "facility",
    name: "Facility",
    minWidth: 100,
    onRender: (item: LogEntry) => {
      return item.facility;
    },
  },
  {
    key: "timeStamp",
    name: "Timestamp",
    minWidth: 200,
    onRender: (item: LogEntry) => {
      return String(item.timeStamp);
    },
  },
];

export default function Table({ logEntries }: { logEntries: LogEntry[] }): JSX.Element {
  const numLogEntries = logEntries.length;

  return (<DetailsList
    items={logEntries}
    columns={columns}
    compact={true}
    selectionMode={SelectionMode.none}
    getKey={(item, index) => String(index)}
    setKey={String(numLogEntries)}
    isHeaderVisible={true}
  />);
}
