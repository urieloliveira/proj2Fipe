import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 16px);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-top: 30px;

  @media (max-width: 910px) {
    width: calc(100% - 40px);
    padding: 0px 20px 20px;
  }
`;
