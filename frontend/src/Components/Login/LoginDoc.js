import React, {useState, useEffect} from 'react';
import 'react-dom';
import {NavLink, useHistory} from 'react-router-dom';
import 'react-router';
import { GoogleLogin } from 'react-google-login';
import Icon from './icon';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@material-ui/core';
import useStyles from './styles';

// import {createStore, combineReducers} from 'redux';
import {Provider, useDispatch} from 'react-redux';
import { AUTH } from '../../constants/actionTypes';
import store from '../../reducers/index';

const LoginWrapper = () => {
  
    return (
      <Provider store={store}> 
        <Login /> 
      </Provider>
    )
} 


const Login = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    
    const [user, setUser] = useState({
        email:"",password:""
    });

    // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    
    let name,value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        console.log(value);
        console.log(name);

        setUser({ ...user, [name]:value})   //// will take the name from line 15
    }
    console.log(user);
    const PostData = async (e) => {
        e.preventDefault();

        const {email, password, role} = user;
        console.log(email)
        console.log(password)
        console.log(role)
        const res = await fetch("/logindoctor",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email: email, 
                password: password
            })
        })
        console.log("res", res);
        const data = await res.json();
        console.log("data",data)
        if(res.status === 422 || !data){  
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }else{
            window.alert("Login Successful");
            console.log("Login Successful");

            history.push("/dashboard");
        }

    }


    const googleSuccess = async (res) => {
        window.alert("Login Successful")
        console.log("res",res)
        console.log(res.profileObj)
        const result  = res?.profileObj;
        console.log("result",result)
        const token = res?.tokenId;
        // console.log("token",token)

        try{
            dispatch({ type: AUTH, data: { result, token } })
            history.push("/");
        }catch(error){
            console.log(error);
        }
        
    }

    const googleFailure = (err) => {
        console.log(err)
        console.log("Google Sign in was unsuccessful")
    }
    console.log(user);

    // useEffect ( () => {
    //     const token = user?.token;

    //     setUser(JSON.parse(localStorage.getItem('profile')))
    // })

    return (
        <div>
            <div className = "container" >
            <div className="row row-cols-lg-8 row-cols-sm-2 row-cols-md-8  justify-content-center">
            <div className="dropdown">
                <form method="POST" className="signin-form" id="signin-form" >
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" name = "email" id="email" autoComplete ="off"
                            value = {user.email}
                            onChange = {handleInputs}
                            placeholder="email@example.com" 
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name = "password" id="password" autoComplete ="off"
                            value = {user.password}
                            onChange = {handleInputs}
                            placeholder="Password" 
                            />
                    </div>
                    <button type="submit" className="btn btn-primary" name = "Login" onClick={PostData}>
                        Log in</button>
                </form><br></br>
                <GoogleLogin
                        clientId="162754271125-fd79e2688vimj32jdj1ah2v03vk279jc.apps.googleusercontent.com"
                        render = {(renderProps) => (
                            <Button className = {classes.googleButton}
                            color ='primary' 
                            fullWidth 
                            onClick = {renderProps.onClick}
                            disabled={renderProps.disabled}
                            startIcon={<Icon/>}
                            variant="contained"
                            >
                                Google SignIn
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/signup">New around here? Sign up</a>
                {/* <a className="dropdown-item" >Forgot password?</a> */}
            </div>
            </div>
            </div>
        </div>
    )
}

// export default Login
export default LoginWrapper
