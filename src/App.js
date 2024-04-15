import Home from './components/home';
import Projects from './components/projects';
import Contact from './components/contact';
import Root from './components/root';

import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<Home />} />
    <Route path="projects" element={<Projects />} />
    <Route path="contact" element={<Contact />} />
  </Route>

));


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
