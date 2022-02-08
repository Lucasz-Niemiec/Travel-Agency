import styled from "styled-components";
import {
  contactIcons,
  emmailAnimIn,
  Transition,
  emmailAnimOut,
} from "../../themeAndGlobalStyles/ThemeProvider";

import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Email from "../icons/Email";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.tertiary};
  width: 100%;
  height: 10vh;
  flex-direction: row;
  z-index: 2;
  margin-top: auto;
`;

export const SvgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 100%;
  margin: auto;

  a {
    width: 50px;
    height: 50px;
    text-decoration: none;
    color: white;
    div {
      text-align: center;
      position: relative;
      span {
        color: white;
        width: 100px;
        position: absolute;
        top: 10px;
        right: 10px;
        opacity: 0;
        animation: ${emmailAnimOut} 300ms linear forwards;
        font-family: ${({ theme }) => theme.text};
        font-weight: 900;
        @media screen and (max-width: 800px) {
          animation: none;
        }
      }
      :hover {
        span {
          animation: ${emmailAnimIn} 300ms linear forwards;
          @media screen and (max-width: 800px) {
            animation: none;
          }
        }
      }
    }

    :focus {
      transform: scale(1.5);

      outline: none;
    }
  }
`;
export const FacebookIcon = styled(Facebook)`
  ${contactIcons}
`;
export const InstaIcon = styled(Instagram)`
  ${contactIcons}
`;
export const EmailIcon = styled(Email)`
  ${contactIcons}
`;
