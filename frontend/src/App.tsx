import "./App.css";
import { Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Root}></Route>
        <Route path="/home" Component={Home} />
      </Routes>
    </>
  );
}

export default App;
