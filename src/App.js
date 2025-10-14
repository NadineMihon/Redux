import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
