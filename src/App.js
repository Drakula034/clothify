import React from "react";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shoppage/shoppage.component.jsx";
import {
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Header from "./components/header/header.component.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/", // Matches all paths (including root)
//     element: (
//       <div>
//         <Header /> {/* Render the header here */}
//         <main>
//           <HomePage /> {/* Render the home page content */}
//         </main>
//       </div>
//     ),
//   },
//   { path: "/shop", element: <ShopPage /> },
// ]);

function App() {
  // return <RouterProvider router={router} />;
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
