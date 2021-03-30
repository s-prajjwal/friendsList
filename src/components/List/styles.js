import styled from "styled-components";

export const StyledListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;   
`;

export const StyledActionBtns = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 300px;
    margin: 10px 0;
    button{
        color: blue;
        cursor: pointer;
        border: none;
        background: none;
        outline: none;
        :disabled {
            color: grey;
        }
    }
`;

export const StyledSelect = styled.select`
    width: 50px;
    height: 20px;
    background: none;
    margin-left: 10px;
`;

export const StyledToggle = styled.div`
    margin-left: 10px;
    background: linear-gradient(#ccc, #eee);
    border: 1px solid purple;
    height: 2em;
    width: 4em;
    border-radius: 1em;
`;

export const StyledKnob = styled.div`
    position: relative;
    width: 1.9em;
    height: 1.9em;
    background: #666;
    border: 1px solid #ddd;
    border-radius: 50%;
    left: ${props => props.on ? "2em" : "0em"};
    transition: left 0.3s ease-out;
`;
