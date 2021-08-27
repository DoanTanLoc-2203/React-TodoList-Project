/** @format */

import * as React from "react";
import {
  ToggleBtn,
  AddItemContent,
  Input,
  ButtonSubmit,
  Select,
  ButtonCancel,
} from "./AddItem.style";

export interface AddItemProps {
  getData: (name: string, level: string) => void;
}

export interface AddItemState {
  toggle: boolean;
  text: string;
  level: string;
}

export default class AddItem extends React.Component<
  AddItemProps,
  AddItemState
> {
  state = {
    toggle: false,
    text: "",
    level: "Small",
  };
  handleOnClickToggle() {
    this.setState({
      toggle: !this.state.toggle,
      text: "",
      level: "Small",
    });
  }
  loadForm() {
    if (this.state.toggle) {
      return (
        <AddItemContent>
          <Input
            type="text"
            placeholder="Item name"
            value={this.state.text}
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <Select
            name="Sort by"
            id="sort"
            onChange={(event) => this.handleOnChangeLevel(event)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Select>
          <ButtonSubmit onClick={() => this.handleOnClickSubmit()}>
            Submit
          </ButtonSubmit>
          <ButtonCancel onClick={() => this.handleOnClickToggle()}>
            Cancel
          </ButtonCancel>
        </AddItemContent>
      );
    }
  }
  handleOnClickSubmit() {
    this.props.getData(this.state.text, this.state.level);
    this.setState({
      text: "",
      level: "Small",
    });
  }
  handleOnChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      text: event.target.value,
    });
  }
  handleOnChangeLevel(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      level: event.target.value,
    });
  }
  public render() {
    return (
      <div className="additem">
        <ToggleBtn onClick={() => this.handleOnClickToggle()}>
          Add item
        </ToggleBtn>
        {this.loadForm()}
      </div>
    );
  }
}
