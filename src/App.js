import "./App.css";

import Header from "./components/organisms/header/Header";
import Corousel from "./components/organisms/corousel/Corousel";

import Category from "./components/organisms/category/Category";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Corousel></Corousel>

      <Category></Category>
    </div>
  );
}

export default App;