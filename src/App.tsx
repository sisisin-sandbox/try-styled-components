import React from 'react';
import logo from './logo.svg';
import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
const Logo = styled.img`
  height: 40vmin;
`;
const Base = styled.div`
  text-align: center;
`;
const Header = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const Link = styled.a`
  color: #09d3ac;
`;
const Main = styled.main``;

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`;
const RedButton = styled(Button)`
  background: tomato;
`;

const Section = styled.section<{ bg: string }>`
  color: white;
  padding: 3em;
  background: ${({ bg }) => bg};
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Base>
        <Header>
          <Logo src={logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </Link>
        </Header>
        <Main>
          <Button>normal</Button>
          <RedButton>red</RedButton>
          <Section bg="cornflowerblue">
            <span role="img" aria-label="hoge">
              ✨
            </span>{' '}
            Magic
          </Section>
        </Main>
      </Base>
    </>
  );
};

export default App;
