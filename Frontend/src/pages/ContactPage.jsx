// import { useState, useContext } from 'react';
// import { useUserContext } from "../context/UserContext";
// import { MyThemeContext } from "../context/MyThemeProvider";
// import ThemeToggleButton from "./ThemeToggleButton";
// import FormControl from '@mui/material/FormControl';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import FormControl from '@mui/material/FormControl';




// function LoginForm() {
//   const [userEmail, setUserEmail] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   const [submitResult, setSubmitResult] = useState('');

//   const { currentUser, handleUpdateUser } = useUserContext();
//   const { theme } = useContext(MyThemeContext);           

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (userPassword.length < 5) setSubmitResult('Password must be at least 5 characters long');
//     else if (userPassword === userEmail) setSubmitResult('Password must not match email address');
//     else {
//       setSubmitResult('Successful login.');
//       handleUpdateUser({ email: userEmail });
//     }
//   };
// if (currentUser?.email) {
//     return (
//       <div className="LoginForm componentBox"
//            style={{ background: theme.background, color: theme.foreground, padding: 16, borderRadius: 12 }}>
//         <p>Welcome {currentUser.email}!</p>
//         <button onClick={() => handleUpdateUser({})}>Log Out</button>
//         <div style={{ marginTop: 12 }}><ThemeToggleButton /></div>
//       </div>
//     );
//   }
// return (
//     <div className="LoginForm componentBox"
//          style={{ background: theme.background, color: theme.foreground, padding: 16, borderRadius: 12 }}>
//       <form onSubmit={handleSubmit} noValidate>
//         <div className="formRow">
//           <label>
//             {/* <input /> */}
//                     <TextField id="outlined-basic" label="Email
//                     " variant="outlined" 
//                     type="email" value={userEmail} name="userEmail"
//                    onChange={(e) => setUserEmail(e.target.value)} required sx={{ backgroundColor: 'white', borderRadius: 3,color: 'black' }}/>
//           </label>
//           <br></br>
//            <br></br>
//         </div>
//         <div className="formRow">
//           <label>
//             <TextField id="outlined-basic" label="Password" variant="outlined"  
//                     type="email" value={userEmail} name="userEmail"
//                    onChange={(e) => setUserEmail(e.target.value)} required sx={{ backgroundColor: 'white', borderRadius: 3, color: 'black' }}/>
//           </label>
//           <br></br>
//         </div>
//         <br></br>
//         <button type="submit">Log In</button>
//         <p aria-live="polite">{submitResult}</p>
//       </form>
//       <div style={{ marginTop: 12 }}><ThemeToggleButton /></div>
//     </div>
//   );
// }
// export default LoginForm;



import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import ContactForm from '../components/ContactForm';


export default function ContactPage() { 
  return (
    <div>
      <Container sx={{ padding: 5, marginTop: 10, backgroundColor: 'rgba(242, 243, 232, 0.9)', fontWeight: 600, 
        minHeight: '5vh', maxWidth: '70%', borderRadius: 2
     }}> 
      <Typography variant="p" component="p" sx={{ color:'#333815'}}>
      Please complete the form below for all inquiries:
      </Typography>
      <br></br>
      <ContactForm/>
     </Container>
     </div>
  );
}


    

