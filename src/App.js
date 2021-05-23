import './App.css';
import Header from "./Components/header";
import Footer from "./Components/footer";
import Content from "./Components/Content";
import React, { useRef } from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
