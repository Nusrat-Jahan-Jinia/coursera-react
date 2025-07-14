import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import About from "./pages/about";
import Reservations from "./pages/reservations";
import Login from "./pages/login";
import Onlineorders from './pages/onlineorders';
import MainLayout from "./layouts/MainLayout.jsx";
import NotFoundPage from "./pages/notFount.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/about" element={<About />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/onlineorders" element={<Onlineorders />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);


function App() {
  return (
    <>
    <RouterProvider router={router}>
      <div className="container mx-auto">
        <div className="text-5xl">App</div>
      </div>
    </RouterProvider>
  </>
  );
}

export default App;
