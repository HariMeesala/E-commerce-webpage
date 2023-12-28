
import { useState } from 'react';
import './App.css';
import ContentBody from './components/ContentBody';
import Navbar from './components/Navbar';

function App() {
  const [isDelete, setIsDelete] = useState(false)
  const [bg, setBg] = useState(true)
  
  // const colorBg = {
  //   backgroundColor: 'black',
  //   opacity: '0.4'
  // }
  return (
    <div className="App">
      <Navbar isDelete={isDelete} setIsDelete={setIsDelete} />
      <ContentBody bg={bg} setBg={setBg} isDelete={isDelete} setIsDelete={setIsDelete}   />
    </div>
  );
}

export default App;
