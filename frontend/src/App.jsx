import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/customer/Home";
import Cart from "./pages/customer/Cart";
import AdminLayout from "./pages/admin/AdminLayout";
import DashBoard from "./pages/admin/DashBoard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Customer Routes */}
        <Route path="/">
          <Route
            index
            element={<Home />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminLayout />}>
          <Route
            path="/dashboard"
            element={<DashBoard />}
          />
        </Route>

        {/* Cook Routes */}
      </Routes>
    </Router>
  );
}

export default App;
