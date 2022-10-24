
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='body'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
