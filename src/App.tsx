import "./App.css";

import { Routes, Route } from "react-router";

import Navigation from "./components/navigation-bar/Navigation-bar";

import Home from "./routes/home/Home.component";
import Shop from "./routes/shop/Shop-component";
import SignIn from "./routes/sign-in/Sign-in.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
