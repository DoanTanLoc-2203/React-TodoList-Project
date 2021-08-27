/** @format */

import * as React from "react";
import { Select, Cover } from "./Sort.style";

export interface SortProps {
  getTypeSort: (type: number) => void;
}

export default class Sort extends React.Component<SortProps> {
  handleOnChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.props.getTypeSort(Number(event.target.value));
  }
  public render() {
    return (
      <Cover>
        <Select
          name="Sort by"
          id="sort"
          onChange={(event) => this.handleOnChange(event)}>
          <option value={1}>Name - DECS</option>
          <option value={2}>Name - ASC</option>
          <option value={3}>Level - DECS</option>
          <option value={4}>Level - ASC</option>
        </Select>
      </Cover>
    );
  }
}
