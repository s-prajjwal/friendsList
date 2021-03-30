import { React } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    border: 1px solid grey;
    background: none;
    height: 40px;
    width: 100px;
    margin: 0 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    background-color: ${props => props.deleteType ? "red" : "white"};
    color: ${props => props.deleteType ? "white" : "black"};
`;

export const Button = ({ children, clickHandler, deleteType }) => {
    return <StyledButton deleteType={deleteType} onClick={clickHandler}>{children}</StyledButton>
}