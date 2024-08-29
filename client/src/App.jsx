import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import HomeLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
