import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    pointer-events: none;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: rgba(255,255,255,0.5);
`;

export const StyledModalWrapper = styled.div`
    border: 1px solid black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 1;
    padding: 10px;
`;

export const StyledHeader = styled.h2`
    margin: 10px 0;
    padding: 10px;
`;

export const StyledBody = styled.div`
    margin: 10px 0;
    padding: 10px;
`;

export const StyledFooter = styled.div`
    margin: 10px 0;
    padding: 10px;
`;