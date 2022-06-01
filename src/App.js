import logo from "./logo.svg";
import { Dashbaord, AddNewProduct } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import dash from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <AddNewProduct />;
    </BrowserRouter>
  );
}

export default App;
