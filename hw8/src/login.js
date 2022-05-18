import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Login = () => {
    return (
        <div>
            <h2>Sign in CSIE@CGU</h2><br/>
            <TextField label = "Email Address" variant = "outlined" required></TextField><br/><br/>
            <TextField label = "Password" type = "password" variant = "outlined" required></TextField><br/>
            <FormControlLabel control = {<Checkbox defaultChecked />} label = "Remember me" /><br/><br/>
            <Button variant = "contained">SIGN IN</Button>
        </div>
    );
}
 
export default Login;