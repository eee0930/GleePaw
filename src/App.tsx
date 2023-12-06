import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { GlobalStyles } from './assets/globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
