import {
  Wrapper,
  FacebookIcon,
  InstaIcon,
  EmailIcon,
  SvgContainer,
} from "./footer.styled";

const Footer = () => {
  return (
    <Wrapper>
      <SvgContainer>
        <a href="#">
          <div>
            <FacebookIcon />
            <span>Follow us</span>
          </div>
        </a>
        <a href="#">
          <div>
            <InstaIcon />
            <span>Follow us</span>
          </div>
        </a>

        <a href="#">
          <div>
            <EmailIcon />
            <span>Email us</span>
          </div>
        </a>
      </SvgContainer>
    </Wrapper>
  );
};

export default Footer;
