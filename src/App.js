import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Pictures from "./components/Pictures";
import About from "./components/About";
import Contact from "./components/Contact";
import Upload from "./components/Upload";

function App() {
  return (
    <div className='parent'>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway&display=swap" />
      </Helmet>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/pictures' element={<Pictures/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/contact-us' element={<Contact/>}/> 
        <Route path='/upload' element={<Upload/>}/> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
