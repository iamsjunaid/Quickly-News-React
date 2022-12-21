import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Component, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';


const App =() => {

  const [progress, setProgress] = useState(0)
  
    return (
      <div className="App">
        <Router>
        <Navbar/>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
            <Route path='/' element={<News setProgress={setProgress}  pageSize = {5} country = "in" category="general"/>} />
            <Route path='/business' element={<News setProgress={setProgress}  pageSize = {5} country = "in" category="business"/>}/>
            <Route path='/entertainment'element={<News setProgress={setProgress}  pageSize = {5} country = "in" category="entertainment"/>}/>
            <Route path='/general'element={<News setProgress={setProgress}  pageSize = {5} country = "in" category="general"/>}/>
            <Route path='/health' element={<News setProgress={setProgress}  pageSize = {5} country = "in" category="health"/>}/>
            <Route path='/science'element={<News setProgress={setProgress}  pageSize = {5} country = "in" category="science"/>}/>
            <Route path='/sports' element={<News setProgress={setProgress}  pageSize = {5} country = "in" category="sports"/>}/>
            <Route path='/technology' element={<News setProgress={setProgress}  pageSize = {5} country = "in" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    );  
}

export default App
