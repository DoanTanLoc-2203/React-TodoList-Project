/** @format */

import * as React from "react";
import {
  Tr,
  Id,
  Name,
  Level,
  SpanHigh,
  SpanMedium,
  SpanSmall,
  Action,
  BtnGroup,
  ButtonEdit,
  ButtonDelete,
  Input,
  Select,
  ButtonSave,
  ButtonCancel,
} from "./TableRow.style";

export interface TableRowProps {
  id: string;
  stt: number;
  name: string;
  level: string;
  deleteItem: (id: string) => void;
  updateItem: (id: string, name: string, level: string) => void;
}

export interface TableRowState {
  isEdit: boolean;
  name: string;
  level: string;
  id: string;
}

export default class TableRow extends React.Component<
  TableRowProps,
  TableRowState
> {
  state = {
    isEdit: false,
    name: this.props.name,
    level: this.props.level,
    id: this.props.id,
  };

  renderLevel() {
    if (this.props.level === "High")
      return <SpanHigh>{this.props.level}</SpanHigh>;
    if (this.props.level === "Medium")
      return <SpanMedium>{this.props.level}</SpanMedium>;
    if (this.props.level === "Small")
      return <SpanSmall>{this.props.level}</SpanSmall>;
  }
  handleOnChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      name: event.target.value,
    });
  }
  handleOnChangeSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      level: event.target.value,
    });
  }
  handleOnClickDelete() {
    this.props.deleteItem(this.props.id);
  }

  handleOnClickEdit() {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  }
  handleOnClickSave() {
    this.props.updateItem(this.props.id, this.state.name, this.state.level);
    this.setState({
      isEdit: !this.state.isEdit,
    });
  }
  handleOnClickCancel() {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  }
  renderRow() {
    if (!this.state.isEdit) {
      return (
        <Tr>
          <Id>{this.props.stt}</Id>
          <Name>{this.props.name}</Name>
          <Level>{this.renderLevel()}</Level>
          <Action>
            <BtnGroup>
              <ButtonEdit onClick={() => this.handleOnClickEdit()}>
                Edit
              </ButtonEdit>
              <ButtonDelete onClick={() => this.handleOnClickDelete()}>
                Delete
              </ButtonDelete>
            </BtnGroup>
          </Action>
        </Tr>
      );
    } else {
      return (
        <Tr>
          <Id>{this.props.stt}</Id>
          <Name>
            <Input
              type="text"
              defaultValue={this.props.name}
              onChange={(event) => this.handleOnChangeInput(event)}
            />
          </Name>
          <Level>
            <Select
              name="Sort by"
              id="sort"
              defaultValue={this.props.level}
              onChange={(event) => this.handleOnChangeSelect(event)}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Select>
          </Level>
          <Action>
            <BtnGroup>
              <ButtonSave onClick={() => this.handleOnClickSave()}>
                Save
              </ButtonSave>
              <ButtonCancel onClick={() => this.handleOnClickCancel()}>
                Cancel
              </ButtonCancel>
            </BtnGroup>
          </Action>
        </Tr>
      );
    }
  }
  public render() {
    return this.renderRow();
  }
}
