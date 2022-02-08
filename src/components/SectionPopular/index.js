///react

///styles
import { Wrapper, Text } from "./Populars.styled";
///components
import Slider from "../Slider";
//
const SectionPopular = () => {
  return (
    <Wrapper>
      <Text>
        <h1>Polpular Destinations</h1>
        <p>Browse our most polpular destinations, and choose the one for you</p>
      </Text>
      <Slider></Slider>
    </Wrapper>
  );
};

export default SectionPopular;
