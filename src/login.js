
//paste here 
import { AppBar } from '@mui/material';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const { Component } = require("react/cjs/react.production.min");



class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            username:"",
            password:""
        }
    }

    render(){

        return(

            <div>
                <MuiThemeProvider>
<div>

    <AppBar title='Login'></AppBar>
    <TextField
    hintText="Enter your username">


    </TextField>
    <br/>
    <TextField
    type="password"
    />
    <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>

</div>
                </MuiThemeProvider>
            </div>
        )
    }

}

const style = {
    margin:15,
};
export default Login;