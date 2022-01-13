///react
import { Link } from "react-router-dom";
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

const Cards = ({ name, country, description, price, pack, imgurl, id }) => {
  return (
    <Link to={id}>
      <Wrapper>
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
    </Link>
  );
};
export default Cards;
