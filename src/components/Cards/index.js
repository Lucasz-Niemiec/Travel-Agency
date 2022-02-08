///react

///styles
import {
  Wrapper,
  Content,
  Text,
  H2,
  H3,
  Number,
  Pack,
  TextContainer,
  KnowMore,
  StyledLink,
} from "./Cards.styled";
///
///

const Cards = ({ name, country, description, price, pack, imgurl, id }) => {
  return (
    <Wrapper tabIndex={2}>
      <StyledLink to={id}>
        <KnowMore> Read More</KnowMore>
        <Content src={imgurl}>
          <H2>{name}</H2>
        </Content>
      </StyledLink>
      <H3>{country}</H3> <Pack>{pack}</Pack>
      <Number>
        From <span>$</span>
        {price}
      </Number>
      <TextContainer>
        <Text>{description}</Text>
      </TextContainer>
    </Wrapper>
  );
};
export default Cards;
