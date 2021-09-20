/** @format */

import * as React from "react";
import { Cover, Input, Button } from "./Search.style";

export interface SearchProps {
  receiveTextSearch: (value: string) => void;
}

interface State {
  isClear: boolean;
  inputValue: string;
}

export default class Search extends React.Component<SearchProps, State> {
  state = {
    isClear: false,
    inputValue: "",
  };

  handelOnClickSearch() {
    this.props.receiveTextSearch("");
    this.setState({
      inputValue: "",
    });
  }

  handelOnChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      inputValue: event.target.value,
    });
    this.props.receiveTextSearch(event.target.value);
  }

  public render() {
    return (
      <Cover>
        <Input
          type="text"
          value={this.state.inputValue}
          placeholder="Search item name"
          onChange={(event) => this.handelOnChangeInput(event)}
        />
        <Button onClick={() => this.handelOnClickSearch()}>Clear</Button>
      </Cover>
    );
  }
}
