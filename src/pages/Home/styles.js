import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Boing Regular", sans-serif;
  font-size: 35px;
  line-height: 35px;
  color: #000000;
  background-color: #ffffff;
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 35px;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 1.4fr 1fr;
  margin: 0px 35px;
  @media (max-width: 910px) {
    grid-gap: 25px;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 0.7fr 2.6fr;
    margin: 0px 25px;
  }
`;

export const Header = styled.header`
  padding: 25px 0px;
  width: 100%;
  z-index: 2;
  @media (max-width: 910px) {
    padding: 20px 0px;
  }
`;

export const Menu = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100%-60px);
  margin: 0 30px;
  padding: 0;

  @media (max-width: 910px) {
    margin: 0 20px;
  }
`;

export const Menu_links = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 14px;
  margin: 0;
  padding: 0;
  li {
    margin-right: 35px;
    cursor: pointer;
    font-weight: 700;
    color: #000;
  }
  li:hover {
    color: #3cf;
  }
  &:last-child {
    flex: 1;
    justify-content: flex-end;
  }

  @media (max-width: 910px) {
    display: none;
  }
`;

export const Button_outline = styled.a`
  text-decoration: none;
  border-radius: 17px;
  padding: 7px 18px;
  border: 2px solid currentColor;
`;

export const Logo = styled.a`
  background-image: url("https://www.waze.com/webcms/static/compiled/eab8d17c745136dfb5b5c40fb8b2564a.svg");
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 40px;
  width: 36px;
  height: 32px;
`;

export const Menu_Icon_Open = styled.div`
  display: none;

  @media (max-width: 910px) {
    position: relative;
    display: block;
    width: 24px;
    height: 12px;
  }

  ::after {
    @media (max-width: 910px) {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #333665;
    }
  }

  ::before {
    @media (max-width: 910px) {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #333665;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  padding: 60px 55px 95px;
  border-radius: 10px;
  &:nth-child(1) {
    @media (max-width: 910px) {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    background: #35cbfc;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  &:nth-child(2) {
    @media (max-width: 910px) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    padding: 0;
    border-radius: 0;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  &:nth-child(3) {
    @media (max-width: 910px) {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }

    background: #69e693;
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }

  @media (max-width: 910px) {
    position: relative;
    padding: 40px 30px 75px;
    border-radius: 10px;
  }
`;

export const Card_title = styled.div`
  font-size: 54px;
  line-height: 1.05;
  margin: 15px 0px;

  @media (max-width: 910px) {
    font-size: 33px;
  }
`;

export const Card_description = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.45;
  margin: 0px 0px 25px 0px;

  @media (max-width: 910px) {
    font-size: 18px;
    line-height: 1.35;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  border: none;
  border-radius: 26px;
  margin-right: 15px;
  padding: 15px 40px;
  cursor: pointer;
  background: #ffffff;

  @media (max-width: 910px) {
    font-size: 16px;
    padding: 12px 25px;
  }
`;

export const Card_link = styled.a`
  margin: 0;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #000;

  @media (max-width: 910px) {
    font-size: 16px;
  }
`;

export const Icon = styled.a`
  position: absolute;
  bottom: -17px;
  left: 60px;
  z-index: 1;
`;

export const Hamburguer_menu = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: ${({ toggle }) => (toggle ? 0 : "100vw")};
  height: calc(100vh - 40px);
  width: calc(100vw - 40px);
  padding: 20px;
  z-index: 2;
  background: #3cf;
`;

export const Hamburger_menu_header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Hamburger_menu_link = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 40px;

  & li a {
    font-size: 28px;
    font-weight: 700;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;

export const Menu_icon_close = styled.div`
  position: relative;
  display: block;
  width: 24px;
  height: 12px;
  cursor: pointer;
  ::after {
    content: "";
    position: absolute;
    top: 5px;
    left: 0;
    width: 100%;
    height: 2px;
    transform: rotate(-45deg);
    background-color: #fff;
  }

  ::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 0;
    width: 100%;
    height: 2px;
    transform: rotate(45deg);
    background-color: #fff;
  }
`;
