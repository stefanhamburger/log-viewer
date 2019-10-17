import React from "react";
import moment from "moment";
import { DetailsList, IColumn, SelectionMode } from "office-ui-fabric-react";
import LogEntry from "../interfaces/LogEntry";
import State from "../interfaces/State";

export default function Table({ logEntries, filter }: { logEntries: LogEntry[]; filter: State["filter"] }): JSX.Element {
  const columns: IColumn[] = [
    {
      key: "level",
      name: "Level",
      minWidth: 60,
      maxWidth: 60,
      onRender: (item: LogEntry) => item.level,
      isFiltered: Object.values(filter.levels).reduce((out, cur) => out || !cur, false),
    },
    {
      key: "message",
      name: "Message",
      minWidth: 100,
      isMultiline: true,
      onRender: (item: LogEntry) => <span style={{ whiteSpace: "pre-wrap" }}>{item.message}</span>,
      isFiltered: filter.message !== "",
    },
    {
      key: "facility",
      name: "Facility",
      minWidth: 100,
      onRender: (item: LogEntry) => item.facility,
      isFiltered: Object.values(filter.facilities).reduce((out, cur) => out || !cur, false),
    },
    {
      key: "timeStamp",
      name: "Timestamp",
      minWidth: filter.relativeTime ? 120 : 200,
      onRender: (item: LogEntry) => (
        filter.relativeTime
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
