import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { GlobalStyles, GridStyles } from './assets/globalStyles';
import LoadingScreen from './components/loadingScreen';
import { auth } from './firebase';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const init = async () => {
    await auth.authStateReady();
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Wrapper>
      <GlobalStyles />
      <GridStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  );
}

export default App;
