import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './routes/About';
import Detail from './routes/Detail';
import Home from './routes/Home';
import './styles/App.css';

function App() {
  return (
    //브라우저를 불러올수 있게 해줌 
    //사용자가 입력한 url를 이용해서 컴포넌트를 불러옴
    //주소창에 url이 바뀌면 그 주소창(path)에 해당되는 컴포넌트를 불러옴
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/detail' element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
