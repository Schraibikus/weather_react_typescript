import { useEffect, useState } from "react";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid tomato;
`;

export default function Header(): JSX.Element {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(
      () => setNow(new Date()),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HeaderContainer>
      <h1 className="weather__title" style={{ color: "tomato" }}>
        Weather React
      </h1>

      <span style={{ color: "tomato" }}>{now.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
