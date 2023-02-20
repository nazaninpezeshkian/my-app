import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Head from "./pages/Head"
import Test from './pages/Test';
import Home from './pages/Home';
import PackagePage from './pages/Package/PackagePage';


import reportWebVitals from './reportWebVitals';
import Magazine from './pages/magazine/Magazine';
import Magart from './pages/magazine/Magart';
import TestBuy from './pages/Testbuy/TestBuy';
import English from './pages/English/English';
import Esf from './pages/English/Esf';
import Sign from './pages/Sign';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes  basename={'/lms'}>
  <Route path='/' element={<Head />}>
  <Route index element={<Home />} />
  <Route path='PackagePage' element={<PackagePage />}/>
    <Route path='Test' element={<Test />} />
    <Route path='Mag' element={<Magazine />}/>
   <Route path='Magart' element={<Magart />}/>
   <Route path='english' element={<English />}/>
   <Route path='esf' element={<Esf />} /> 
   <Route path='sign' element={<Sign />}/>

  </Route>
</Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
