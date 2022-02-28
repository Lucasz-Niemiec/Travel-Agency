//uses

//styles
import {
  Content,
  Wrapper,
  PLaneStyled,
  LugageStyled,
  BedStyled,
  SvgContainer,
} from "./About.styled";

//
const About = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Who We are</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          animi ex itaque illo laudantium. Voluptas aliquam error facere.
          Eligendi magni, dolore voluptatum earum quaerat dicta fuga quas nulla
          id voluptates neque accusantium recusandae. Maiores veritatis cumque
          cupiditate nam debitis, quia, ratione quidem recusandae numquam quam
          cum nihil natus eos ab? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptates animi ex itaque illo laudantium. Voluptas
          aliquam error facere. Eligendi magni, dolore voluptatum earum quaerat
          dicta fuga quas nulla id voluptates neque accusantium recusandae.
          Maiores veritatis cumque cupiditate nam debitis, quia, ratione quidem
          recusandae numquam quam cum nihil natus eos ab? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Voluptates animi ex itaque illo
          laudantium. Voluptas aliquam error facere. Eligendi magni, dolore
        </p>
      </Content>
      <SvgContainer>
        <div>
          <h3>Something Title</h3>
          <PLaneStyled />
          <p>
            Eligendi magni, dolore voluptatum earum quaerat dicta fuga quas
            nulla id voluptates neque accusantium recusandae. Maiores veritatis
          </p>
        </div>
        <div>
          <h3>Something Title</h3>
          <LugageStyled />
          <p>
            Eligendi magni, dolore voluptatum earum quaerat dicta fuga quas
            nulla id voluptates neque accusantium recusandae. Maiores veritatis
          </p>
        </div>
        <div>
          <h3>Something Title</h3>
          <BedStyled />
          <p>
            Eligendi magni, dolore voluptatum earum quaerat dicta fuga quas
            nulla id voluptates neque accusantium recusandae. Maiores veritatis
          </p>
        </div>
      </SvgContainer>
    </Wrapper>
  );
};

export default About;
