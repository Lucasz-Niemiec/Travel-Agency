//use
import { useState } from "react";
//styles
import {
  Wrapper,
  Nav,
  Ul,
  Li,
  StyledLink,
  Logo,
  MenuToggle,
} from "./Navbar.styled";
//

//

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(!isOpen);
  };
  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Wrapper className={`${isOpen && "open"} `}>
        <MenuToggle onClick={open} />
        <Logo className={`${isOpen && "open"} `}>
          <span>T</span>rvael<span>W</span>orld
        </Logo>
        <Nav className={`${isOpen && "open"} `}>
          <Ul>
            <StyledLink to="/" onClick={close}>
              <Li>Home</Li>
            </StyledLink>
            <StyledLink to="/about" onClick={close}>
              <Li>About</Li>
            </StyledLink>
            <StyledLink to="/popular" onClick={close}>
              <Li>Popular</Li>
            </StyledLink>
            <StyledLink to="/reserves" onClick={close}>
              <Li>reservation</Li>
            </StyledLink>
          </Ul>
        </Nav>
      </Wrapper>
    </>
  );
};
export default Navbar;
