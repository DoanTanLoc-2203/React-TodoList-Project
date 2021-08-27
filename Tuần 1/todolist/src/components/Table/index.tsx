/** @format */

import * as React from "react";
import TableRow from "./TableRow";
import { TableCover, H4, Cover, Tr, Th } from "./Table.style";

export interface ToDoItem {
  id: string;
  name: string;
  level: string;
}

export interface TableProps {
  dataTable: ToDoItem[]; //JSON
  deleteData: (id: string) => void;
  updateData: (id: string, name: string, level: string) => void;
}

export default class Table extends React.Component<TableProps> {
  public render() {
    return (
      <Cover>
        <H4 className="lable">List item</H4>
        <TableCover>
          <tbody>
            <Tr className="pri-row">
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Level</Th>
              <Th>Action</Th>
            </Tr>
            {this.props.dataTable.map((element: ToDoItem, key: number) => {
              return (
                <TableRow
                  key={element.id}
                  id={element.id}
                  stt={key + 1}
                  name={element.name}
                  level={element.level}
                  deleteItem={(id) => this.props.deleteData(id)}
                  updateItem={(id, name, level) =>
                    this.props.updateData(id, name, level)
                  }
                />
              );
            })}
          </tbody>
        </TableCover>
      </Cover>
    );
  }
}
