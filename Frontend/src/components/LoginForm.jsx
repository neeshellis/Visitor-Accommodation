import { useState, useContext } from 'react';
import { useUserContext } from "../context/UserContext";
import { MyThemeContext } from "../context/MyThemeProvider";
import TextField from '@mui/material/TextField';


function LoginForm() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [submitResult, setSubmitResult] = useState('');
  const { currentUser, handleUpdateUser } = useUserContext();
  const { theme } = useContext(MyThemeContext);           

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) setSubmitResult('Password must be a minimum of 5 characters');
    else if (userPassword === userName) setSubmitResult('Password must not match username');
    else {
      setSubmitResult('Successful login');
      handleUpdateUser({ username: userName });
    }
  };

if (currentUser?.username) {
    return (
      <div className="LoginForm componentBox"  
           style={{ background: theme.background, 
           color: theme.foreground, 
           justifyContent: 'center', 
           margin: '20px auto', 
           maxWidth: '70%', 
           minHeight: '5vh',  
           padding: 16, 
           borderRadius: 12 }}>
        <p>Welcome {currentUser.username}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </div>
    );
  }
return (
    <div className="LoginupForm componentBox"
         style={{ background: theme.background, 
         color: theme.foreground, 
         justifyContent: 'center', 
         margin: '20px auto', 
         maxWidth: '70%', 
         minHeight: '5vh', 
         padding: 16, 
         borderRadius: 12 }}>
      <form onSubmit={handleSubmit} noValidate>
        <div className="formRow">
          <TextField type="text"  variant="filled" label="Username:" value={userName} name="username"
                   onChange={(e) => setUserName(e.target.value)} required fullWidth/>
        </div>
        <br/>
        <div className="formRow">
          < TextField type="password" variant="filled" label="Password" value={userPassword} name="password"
                  onChange={(e) => setUserPassword(e.target.value)} required fullWidth/>
        </div>
        <br/>
        <button type="submit">Log In</button>
        <p aria-live="polite">{submitResult}</p>
      </form>
    </div>
  );
}
export default LoginForm;