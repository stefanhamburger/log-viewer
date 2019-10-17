import React from "react";
import moment from "moment";
import { DetailsList, IColumn, SelectionMode } from "office-ui-fabric-react";
import LogEntry from "../interfaces/LogEntry";

const columns: IColumn[] = [
  {
    key: "level",
    name: "Level",
    minWidth: 50,
    maxWidth: 50,
    onRender: (item: LogEntry) => item.level,
  },
  {
    key: "message",
    name: "Message",
    minWidth: 100,
    isMultiline: true,
    onRender: (item: LogEntry) => <span style={{ whiteSpace: "pre-wrap" }}>{item.message}</span>,
  },
  {
    key: "facility",
    name: "Facility",
    minWidth: 100,
    onRender: (item: LogEntry) => item.facility,
  },
  {
    key: "timeStamp",
    name: "Timestamp",
    minWidth: 200,
    onRender: (item: LogEntry) => (
      <span title={item.timeStamp && item.timeStamp.toISOString()}>
        {moment(item.timeStamp).fromNow()}
      </span>),
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
