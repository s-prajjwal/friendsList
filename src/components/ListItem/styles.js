import styled from "styled-components";

export const StyledListItem = styled.div`
    border: 1px solid black;
    width: 300px;
    display: flex;
    padding: 10px;
`;

export const StyledIcon = styled.img`
    height: 20px;
    margin: 0 10px;
    cursor: pointer;
`;

export const StyledName = styled.div`
    width: 200px;
    text-overflow: ellipsis;
    overflow-x: hidden;
`;