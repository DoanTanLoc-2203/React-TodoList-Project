/** @format */

import styled from "styled-components";

export const Tr = styled.tr`
  text-align: left;
  padding: 10px 5px 10px 5px;
`;

export const Id = styled.td`
  width: 10%;
  text-align: left;
  padding: 10px 5px 10px 5px;
  word-break: normal;
  text-align: justify;
  border-bottom: 1px solid #dadada;
  border-collapse: collapse;
`;

export const Name = styled.td`
  max-width: 60%;
  text-align: left;
  padding: 10px 5px 10px 5px;
  word-break: normal;
  text-align: justify;
  border-bottom: 1px solid #dadada;
  border-collapse: collapse;
`;

export const Level = styled.td`
  width: 15%;
  text-align: left;
  padding: 10px 5px 10px 5px;
  word-break: normal;
  text-align: justify;
  border-bottom: 1px solid #dadada;
  border-collapse: collapse;
`;

export const SpanHigh = styled.span`
  padding: 5px 8px 5px 8px;
  color: white;
  border-radius: 5px;
  background-color: #d4524e;
`;

export const SpanMedium = styled.span`
  padding: 5px 8px 5px 8px;
  color: white;
  border-radius: 5px;
  background-color: #66c0de;
`;

export const SpanSmall = styled.span`
  padding: 5px 8px 5px 8px;
  color: white;
  border-radius: 5px;
  background-color: #777777;
`;

export const Action = styled.td`
  width: 15%;
  text-align: left;
  padding: 10px 5px 10px 5px;
  word-break: normal;
  text-align: justify;
  border-bottom: 1px solid #dadada;
  border-collapse: collapse;
`;

export const BtnGroup = styled.div`
  display: flex;
  @media (max-width: 792px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonEdit = styled.button`
  padding: 5px 8px 5px 8px;
  border-radius: 5px;
  border: none;
  color: white;
  margin-right: 5px;
  background-color: #ecad52;
  &:hover {
    background-color: #be8534;
  }
`;

export const ButtonDelete = styled.button`
  padding: 5px 8px 5px 8px;
  border-radius: 5px;
  border: none;
  color: white;
  margin-right: 5px;
  background-color: #d4524e;
  &:hover {
    background-color: #a30404;
  }
  @media (max-width: 792px) {
    margin-top: 5px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 10px 5px 10px;
  border: 1px solid #dadada;
  border-radius: 5px;
  font-size: 16px;
`;

export const Select = styled.select`
  padding: 5px 10px 5px 10px;
  border: 1px solid #dadada;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonSave = styled.button`
  padding: 5px 8px 5px 8px;
  border-radius: 5px;
  border: none;
  color: white;
  margin-right: 5px;
  background-color: #2db82d;
  &:hover {
    background-color: green;
  }
`;

export const ButtonCancel = styled.button`
  padding: 5px 8px 5px 8px;
  border-radius: 5px;
  margin-right: 5px;
  background-color: white;
  color: black;
  border: 1px solid #dadada;
  &:hover {
    background-color: #afadad;
  }
`;
