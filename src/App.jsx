import { useEffect } from 'react';
import './App.css'
import Routes from './pages/Router'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // animation runs only once when element enters
  });
}, []);
  return (
    <>
      <Routes />
    </>
  )
}

export default App
