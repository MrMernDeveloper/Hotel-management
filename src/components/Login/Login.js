import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Images/UserContext/AuthProvider';
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('')
    const { logIn, providerLogIN } = useContext(AuthContext)
    const facebookProvider = new FacebookAuthProvider()
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const logInHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password)
        logIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.error('your email is not verified, please verify email')
                }
            })
            .catch(error => {
                console.error(error.message)
                setError(error.message)
            })
        

    }
    const facebookHandler = () => {
      providerLogIN(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
            })
       
    }
    const googleHandler = () => {
        providerLogIN(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
            console.error(error)
        })
    }


    return (
        <div className='container mt-5 w-50 mx-auto'>
            <Form onSubmit={logInHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" NAME='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password"  />
                </Form.Group>
                <Form.Text className="text-danger">
                    <p>{error}</p>
                </Form.Text>
                <Button variant="primary" type="submit" className='d-block'>
                    Log In
                </Button>

            </Form>
            <div className='d-flex justify-content-center flex-column mx-auto mt-5'>
                <button onClick={googleHandler} className='btn btn-light d-block mt-2'>
                    Sign With Google
                </button>
                <button onClick={facebookHandler} className='btn btn-light d-block mt-2'>
                    Sign in with Facebook

                </button>
            </div>
        </div>
    );
};

export default Login;