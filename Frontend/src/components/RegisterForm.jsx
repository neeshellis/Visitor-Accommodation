import { useState, useContext } from 'react';
import { useUserContext } from "../context/UserContext";
import { MyThemeContext } from "../context/MyThemeProvider";
import TextField from '@mui/material/TextField';

function RegisterForm() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userFirstname, setUserFirstname] = useState('');
  const [userLastname, setUserLastname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMobile, setUserMobile] = useState('');
  const [submitResult, setSubmitResult] = useState('');

  const { currentUser, handleUpdateUser } = useUserContext();
  const { theme } = useContext(MyThemeContext);           

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) setSubmitResult('Password must be at least 5 characters long');
    else if (userPassword === userName) setSubmitResult('Password must not match username');
    else {
      setSubmitResult('Thank you for registering with Wānaka Magic!');
      handleUpdateUser({ username: userName });
    }
  };
if (currentUser?.email) {
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
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </div>
    );
  }
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
      <form onSubmit={handleSubmit} noValidate>
        <div className="formRow">
             <TextField type="text" variant="filled" label="Username:" value={userName} name="username"
                             onChange={(e) => setUserName(e.target.value)} required fullWidth/>
        </div>
        <br/>
        <div className="formRow">
          < TextField type="password" variant="filled" label="Password" value={userPassword} name="password"
                            onChange={(e) => setUserPassword(e.target.value)} required fullWidth/>
        </div>
        <br/>
        <div className="formRow">
             <TextField type="text" variant="filled" label="First Name:" value={userFirstname} name="firstname"
                             onChange={(e) => setUserFirstname(e.target.value)} required fullWidth/>
        </div>
        <br/>
        <div className="formRow">
         < TextField type="text" variant="filled" label="Last Name:" value={userLastname} name="lastname"
                            onChange={(e) => setUserLastname(e.target.value)} required fullWidth/>
        </div>
        <br/>
           <div className="formRow">
            < TextField type="tel" variant="filled" label="Mobile:" value={userMobile} name="mobile"
                            onChange={(e) => setUserMobile(e.target.value)} required fullWidth/>
        </div>
        <br/>
           <div className="formRow">
           < TextField type="text" variant="filled" label="Email:" value={userPassword} name="email"
                            onChange={(e) => setUserEmail(e.target.value)} required fullWidth/>
        </div>
        <br/>
        <button type="submit">Register</button>
        <p aria-live="polite">{submitResult}</p>
      </form>
      {/* <div style={{ marginTop: 12 }}><ThemeToggleButton /></div> */}
       </div>
  );
}
export default RegisterForm;