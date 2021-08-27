/** @format */

import styled from "styled-components";

export const ToggleBtn = styled.button`
  width: 100%;
  padding: 7px 10px 7px 10px;
  border: none;
  border-radius: 5px;
  background-color: #66c0de;
  color: white;
  &:hover {
    background-color: #3d7ab6;
  }
`;

export const AddItemContent = styled.div`
  margin-top: 10px;
`;

export const Input = styled.input`
  padding: 5px 10px 5px 10px;
  border: 1px solid #dadada;
  border-radius: 5px;
`;

export const Select = styled.select`
  padding: 5px 10px 5px 10px;
  border: 1px solid #dadada;
  border-radius: 5px;
  &::hover {
    cursor: pointer;
  }
`;

export const ButtonSubmit = styled.button`
  padding: 5px 10px 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #2db82d;
  color: white;
  &:hover {
    background-color: green;
  }
`;

export const ButtonCancel = styled.button`
  padding: 5px 10px 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: black;
  border: 1px solid #dadada;
  &:hover {
    background-color: #afadad;
  }
`;
