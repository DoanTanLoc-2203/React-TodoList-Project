/** @format */

import styled from "styled-components";

export const Cover = styled.div`
  display: flex;
  align-items: stretch;
  @media (max-width: 792px) {
    margin-top: 10px;
  }
`;

export const Input = styled.input`
  padding: 5px 10px 5px 10px;
  border: 1px solid #dadada;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const Button = styled.button`
  background-color: #66c0de;
  color: white;
  border: none;
  padding: 5px 10px 5px 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  &:hover {
    background-color: #3d7ab6;
  }
`;
