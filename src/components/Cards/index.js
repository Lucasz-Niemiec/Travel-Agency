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
} from "./Cards.styled";
///
///

const Cards = ({ key, name, country, description, price, pack, imgurl }) => {
  return (
    <Wrapper key={key}>
      <KnowMore> Read More</KnowMore>
      <Content src={imgurl}>
        <H2>{name}</H2>
      </Content>
      <H3>{country}</H3>
      <TextContainer>
        <Text>{description}</Text>
      </TextContainer>
      <Number>
        <span>$</span>
        {price}
      </Number>
      <Pack>{pack}</Pack>
    </Wrapper>
  );
};
export default Cards;
