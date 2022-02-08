//

//styles
import { Wrapper, Content, Bg, H1, Text } from "./Reserves.Styled";
//components
import Calendar from "../Calendar";

//

const Reserves = () => {
  return (
    <Wrapper>
      <Content>
        <H1>Want to travel?</H1>
        <Bg></Bg>
        <Text>Just decide When</Text>
        <Calendar></Calendar>
      </Content>
    </Wrapper>
  );
};

export default Reserves;
