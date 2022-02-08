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
    console.log("OPEN");
  };

  return (
    <>
      <Wrapper className={`${isOpen && "open"} `}>
        <MenuToggle onClick={open} />
        <Logo>
          <span>T</span>rvael<span>W</span>orld
        </Logo>
        <Nav className={`${isOpen && "open"} `}>
          <Ul>
            <StyledLink to="/" onClick={open}>
              <Li>Home</Li>
            </StyledLink>
            <StyledLink to="/about" onClick={open}>
              <Li>About</Li>
            </StyledLink>
            <StyledLink to="/popular" onClick={open}>
              <Li>Popular</Li>
            </StyledLink>
            <StyledLink to="/reserves" onClick={open}>
              <Li>reservation</Li>
            </StyledLink>
          </Ul>
        </Nav>
      </Wrapper>
    </>
  );
};
export default Navbar;
