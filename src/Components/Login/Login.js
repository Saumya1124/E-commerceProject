import { useState, useRef , useContext} from 'react';
import {useHistory} from 'react-router-dom';

import classes from './Login.module.css';
import AuthContext from '../../Context/auth-context';

const Login = () => {

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useHistory()

  const ctx  = useContext(AuthContext)

  const [isLogin, setIsLogin] = useState(true);

  const [isLoading , setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {

    event.preventDefault()

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true)

    if(isLogin){

      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDQrmC1vNM9oGEiMumJCX2hCvhUxLJg9qs',
        {
          method : 'POST',
          body : JSON.stringify({
            email : enteredEmail,
            password : enteredPassword,
            returnSecureToken : true
          }),
          headers : {
            'Content-Type' : 'applicaton/json'
          }
        }
      ).then(res => {

        setIsLoading(false)

        if(res.ok){

          return res.json().then(data => {
            console.log(data)
             ctx.logIn(data.email,data.idToken)
             history.replace('/store')
          })
            
        } 
        else{
          return res.json().then(data => {
            let errorMessage = 'Authentication failed !';
            alert(errorMessage)
          })
        }
      })

    }
    else{
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDQrmC1vNM9oGEiMumJCX2hCvhUxLJg9qs',

        {
          method : 'POST',
          body : JSON.stringify({
            email : enteredEmail,
            password : enteredPassword,
            returnSecureToken  : true
          }),
          headers : {
            'Content-Type' : 'application/json'
          }
        }
 
      ).then(res => {

        setIsLoading(false)

        if(res.ok){

          return res.json().then(data => {

            
            ctx.logIn(data.idToken) 
            history.replace('/')
          })
          
        }
        else{
          
          return res.json().then(data => {
                  let errorMessage = 'Authentication failed';
                  if (data && data.error && data.error.message){
                    errorMessage = data.error.message;
                  }

                  alert(errorMessage)
          })
        }
      })
    }

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required  ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        
        <div className={classes.actions}>

          {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Sending request...</p>}

          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
