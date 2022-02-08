//react
import { useState } from "react";
//styles
import { Wrapper, Content, Img, Div } from "./Header.styled";
//
import Welcome from "../Welcome";
import img1 from "../../images/nature-6567542_1280.jpg";
import img2 from "../../images/boat-6561172_1920.jpg";
import img3 from "../../images/hiker-1149877_1280.jpg";
import img4 from "../../images/petit-minou-lighthouse-6582717_1280.jpg";
import img5 from "../../images/photographer-865295_1280.jpg";
//

const Header = () => {
  const [imageUrl, setImageUrl] = useState("");
  const imageChanger = (imageurl) => {
    setImageUrl(imageurl);
  };
  return (
    <>
      <Wrapper>
        <Welcome />
        <Content>
          <Div onMouseEnter={() => imageChanger(img1)} />
          <Div onMouseEnter={() => imageChanger(img2)} />
          <Div onMouseEnter={() => imageChanger(img3)} />
          <Div onMouseEnter={() => imageChanger(img4)} />
          <Div onMouseEnter={() => imageChanger(img5)} />{" "}
        </Content>
        <Img src={`${imageUrl || img5}`} />
      </Wrapper>
    </>
  );
};

export default Header;
