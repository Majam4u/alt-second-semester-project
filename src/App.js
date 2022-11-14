import React from "react"
import Counter from './components/Counter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NotFound from "./components/NotFound";
// import {Link} from 'react-router-dom'
import './App.css'
import {Routes, Route, NavLink} from 'react-router-dom'
import MainPage from "./components/MainPage";
import TestError from "./components/ErrorTest";
import CounterHook from "./components/CounterHook";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <header>

    <nav className="nav">
    {/* <p className="logo"> maXiHood </p> */}
    <NavLink to="/">Home</NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/counterHook">CounterHook</NavLink>
      <NavLink to="/testErrorBoundary">Test Error boundary</NavLink> 
    </nav>
    </header>
    <main className="container mt-3" style={{backgroundColor:"black"}}>
    
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counterHook" element={<CounterHook />} />
        <Route path="/testErrorBoundary" element={<TestError />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Counter /> */}
      {/* <Link path='*' element={<NotFound />}></Link> */}
    </main>
    <Footer />
    </>
  );
}

export default App;
