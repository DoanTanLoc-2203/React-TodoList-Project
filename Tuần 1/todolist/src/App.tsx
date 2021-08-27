/** @format */
import "./App.css";
import React from "react";
import AddItem from "./components/AddItem";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Table from "./components/Table";
import Title from "./components/Title";
import data from "./data/Data.json";
import { v4 as uuidv4 } from "uuid";

export interface ToDoItem {
  id: string;
  name: string;
  level: string;
}

export interface AppState {
  dataTable: ToDoItem[];
  textSearch: string;
  sort: number;
  nameAdd: string;
  levelAdd: string;
}

export default class App extends React.Component {
  state = {
    dataTable: data,
    textSearch: "",
    sort: 1,
    nameAdd: "",
    levelAdd: "",
  };
  getTextSearch(text: string) {
    this.setState({
      textSearch: text,
    });
  }

  getTypeSort(type: number) {
    this.setState({
      sort: type,
    });
  }

  getDataAdd(name: string, level: string) {
    let data: ToDoItem = {
      id: uuidv4(),
      name: name,
      level: level,
    };
    let tempData: ToDoItem[];
    tempData = this.state.dataTable;
    tempData.push(data);
    this.setState({
      dataTable: tempData,
    });
  }
  deleteData(id: string) {
    let tempData: ToDoItem[];
    tempData = this.state.dataTable;
    tempData = tempData.filter((obj) => obj.id !== id);
    this.setState({
      dataTable: tempData,
    });
  }
  loadDataSearch() {
    let searchData: ToDoItem[];
    searchData = [];
    this.state.dataTable.forEach((element: ToDoItem) => {
      if (element.name.indexOf(this.state.textSearch) >= 0) {
        searchData.push(element);
      }
    });
    return searchData;
  }
  updateData(id: string, name: string, level: string) {
    let tempData: ToDoItem[];
    tempData = this.state.dataTable;
    let index: number = tempData.findIndex((obj) => obj.id === id);
    tempData[index].name = name;
    tempData[index].level = level;
    this.setState({
      dataTable: tempData,
    });
  }
  sortDataTable(dataTable: ToDoItem[]) {
    if (this.state.sort === 1) {
      dataTable.sort((a, b) => (a.name < b.name ? 1 : -1));
    }
    if (this.state.sort === 2) {
      dataTable.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    if (this.state.sort === 3) {
      dataTable.sort((a, b) => (a.level > b.level ? 1 : -1));
    }
    if (this.state.sort === 4) {
      dataTable.sort((a, b) => (a.level < b.level ? 1 : -1));
    }
  }

  public render() {
    let dataForTable = this.loadDataSearch();
    this.sortDataTable(dataForTable);
    return (
      <div>
        <div className="container">
          <Title />
        </div>
        <div className="tool container">
          <Search receiveTextSearch={(value) => this.getTextSearch(value)} />
          <Sort getTypeSort={(type) => this.getTypeSort(type)} />
          <AddItem
            getData={(name, level) => this.getDataAdd(name, level)}></AddItem>
        </div>
        <div className="container">
          <Table
            dataTable={dataForTable}
            deleteData={(id) => this.deleteData(id)}
            updateData={(id, name, level) => this.updateData(id, name, level)}
          />
        </div>
      </div>
    );
  }
}
