import React from "react";
import moment from "moment";
import { DetailsList, IColumn, SelectionMode } from "office-ui-fabric-react";
import LogEntry from "../interfaces/LogEntry";

export default function Table({ logEntries, relativeTime }: { logEntries: LogEntry[]; relativeTime: boolean }): JSX.Element {
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
      minWidth: relativeTime ? 120 : 200,
      onRender: (item: LogEntry) => (
        relativeTime
          ? (<span title={item.timeStamp && item.timeStamp.toUTCString()}>
              {moment(item.timeStamp).fromNow()}
            </span>)
          : item.timeStamp && (<span title={moment(item.timeStamp).fromNow()}>
            {item.timeStamp.toUTCString()}
          </span>)
      ),
    },
  ];

  return (<DetailsList
    items={logEntries}
    columns={columns}
    compact={true}
    selectionMode={SelectionMode.none}
    getKey={(item, index) => String(index)}
    setKey={String(logEntries.length)}
    isHeaderVisible={true}
  />);
}
