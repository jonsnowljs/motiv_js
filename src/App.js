import logo from './logo.svg';
import './App.css';
import TestComp from './components/TestComp';
import LandingPage from './pages/LandingPage';
import { createTheme, ThemeProvider } from '@mui/system';
import Modal from './components/Modal/Modal';

function App() {
  const theme = createTheme({
    
  })
  return (
    <div className="App">

        <LandingPage />
        <Modal/>

    </div>
  );
}

export default App;
