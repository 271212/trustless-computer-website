import styled, { ITheme } from "styled-components";

import IcDiscord from "./icons/ic-discord.svg";
import IcGithub from "./icons/ic-github.svg";
import IcTwitter from "./icons/ic-twitter.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 80px;
  padding-right: 80px;

  ${({ theme }: { theme: ITheme }) => theme.deprecated_mediaWidth
    .deprecated_upToExtraSmall`
      padding-left: 8px;
      padding-right: 8px;
  `};

  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
  }

  .buttonContainer {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 8px;

    .icon {
      width: 34px;
      height: 34px;
      cursor: pointer;

      :hover {
        opacity: 0.8;
      }
    }
  }
`;

const Footer = ({ height }: { height: number }) => {
  const onClickLink = (link: string) => {
    window.open(link);
  };
  return (
    <Wrapper style={{ height }}>
      <p className="text">Open-source software. Made with ❤️ on Bitcoin.</p>
      <div className="buttonContainer">
        <img
          alt="icon"
          className="icon"
          src={IcGithub}
          onClick={() => onClickLink("https://github.com/trustlesscomputer")}
        />
        <img
          alt="icon"
          className="icon"
          src={IcDiscord}
          onClick={() => onClickLink("https://discord.gg/tscNGxEw2s")}
        />
        <img
          alt="icon"
          className="icon"
          src={IcTwitter}
          onClick={() => onClickLink("https://twitter.com/trustless_bvm")}
        />
      </div>
    </Wrapper>
  );
};

export default Footer;
