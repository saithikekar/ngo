import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login"
import {Container,Row ,Col } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Signup from './components/Signup';
import Landing from "./components/Landing"
import AboutUs from './components/AboutUs';
import Form from "./components/Form";
import Card from "./components/Card";
import Voice from "./components/Voice";
import Dashboard from './components/Dashboard';
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";


function App() {
  return (
    
    <Container>
      <Box>
      <Row>
        <Col>
        <UserAuthContextProvider>
        <Routes>
        <Route path="/" element={<Landing/>}/>
        
        <Route path="/logine" element={<Form/>} />
        
        <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/findjob" element={<Card/>} />
          <Route path="/voice" element={<Voice/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          
        </Routes>
        </UserAuthContextProvider>
        </Col>
      </Row>
      </Box>
    </Container>
    
  );
}

export default App;
