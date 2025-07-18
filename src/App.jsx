import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import Camera from './components/Camera';
import Result from './components/Result';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} /> 
          <Route path="/camera" element={<Camera />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
