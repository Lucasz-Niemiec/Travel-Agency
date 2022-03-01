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
        <button>
          <div>
            <FacebookIcon />
            <span>Follow us</span>
          </div>
        </button>
        <button>
          <div>
            <InstaIcon />
            <span>Follow us</span>
          </div>
        </button>

        <button>
          <div>
            <EmailIcon />
            <span>Email us</span>
          </div>
        </button>
      </SvgContainer>
    </Wrapper>
  );
};

export default Footer;
