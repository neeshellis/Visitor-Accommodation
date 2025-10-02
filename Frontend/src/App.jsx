import { useState } from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/NavBar';
import MyThemeProvider from './context/MyThemeProvider';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { UserProvider } from "./context/UserContext";
import ThemeToggleButton from "./components/ThemeToggleButton";


function App() {
  const [count, setCount] = useState(0)


return (
    
 <div className="app-container">
    <MyThemeProvider>
       <UserProvider> 
      <NavBar />  
     <AppRoutes />
     </UserProvider> 
    </MyThemeProvider>
 </div>
)
}
         


export default App

  
