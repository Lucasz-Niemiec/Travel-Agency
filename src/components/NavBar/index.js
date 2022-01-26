//
//styles
import { Wrapper, Nav, Ul, Li, StyledLink } from "./Navbar.styled";
//

//

const Navbar = () => {
  return (
    <Wrapper>
      <Nav>
        <Ul>
          <StyledLink to="/">
            <Li>Home</Li>
          </StyledLink>
          <StyledLink to="/about">
            <Li>About</Li>
          </StyledLink>
          <StyledLink to="/popular">
            <Li>Popular dest</Li>
          </StyledLink>
          <StyledLink to="/reserves">
            <Li>reservation</Li>
          </StyledLink>
        </Ul>
      </Nav>
    </Wrapper>
  );
};
export default Navbar;
