import styled from "styled-components";

export const Container = styled.section<{ $image_path: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("${(props) => props.$image_path}");
  background-size: cover;
  background-position: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 85%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  }
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  padding-bottom: 3rem;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 80%;
  opacity: 1;
  border-radius: 1rem;
  border: solid 0.05rem ${(props) => props.theme.colors.primary};
`;
