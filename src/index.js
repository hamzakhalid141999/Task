import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useReactToPrint } from 'react-to-print';
import React, { useRef } from 'react';
import { render } from '@testing-library/react';
import Header from "./Components/header";
import Footer from "./Components/footer";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



class ComponentToPrint extends React.Component {
  render() {
    return (
      <>
      <App/>
      </>
    );
  }
}

const Example=()=>{
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content:()=>componentRef.current,
  });

  return(
    <div>
      <ComponentToPrint ref={componentRef} />
      <button className="print__btn" onClick={handlePrint}>Print</button>
    </div>
  );
};

render(<Example/>, document.querySelector("#root"));


