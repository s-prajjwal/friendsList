import React from "react";
import { Overlay, StyledModalWrapper, StyledHeader, StyledBody, StyledFooter } from "./styles";
const Modal = (props) => {
  return (
    <>
      <Overlay className="overlay" />
      <StyledModalWrapper className="modal-wrapper">
        {props.children}
      </StyledModalWrapper>
    </>
  );
};

export const Header = props => <StyledHeader className="modal-header">{props.children}</StyledHeader>
export const Body = props => <StyledBody className="modal-body">{props.children}</StyledBody>
export const Footer = props => <StyledFooter className="modal-footer">{props.children}</StyledFooter>

export default Modal;
