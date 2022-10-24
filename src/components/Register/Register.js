
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Images/UserContext/AuthProvider';

const Register = () => {
    const [accept, setAccept] = useState(false)
    const [error, setError] = useState('')

    const { CreateAccount, updateUserProfile, verifyEmail, setLoading } = useContext(AuthContext)

    const submitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photoURL = form.photoURL.value
        // console.log(name, email, password, photoURL)
        if (password !== confirm) {
            toast.error('password are not same')
            return
        }
      CreateAccount(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError('')
                handelUpdateProfile(name, photoURL)
                handelVerification()
                toast.success('please verify your email')

                

            })
            .catch(error => {
                console.error(error.message)
                setError(error.message)
            })
          .finally(() => {
            setLoading(false)
        })
        
    };
    const handelVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => {
            console.error(error)
        })
        
    };
    const handelUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    const handelChecked = (event) => {
        setAccept(event.target.checked)
    }
    return (
        <div className='container w-50 mx-auto'>
            <Form className='mt-4' onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirm' placeholder="confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handelChecked}
                        type="checkbox"
                        label={<>Accept <Link to='/terms'>Terms and conditions</Link> </>} />
                </Form.Group>
                <Form.Text className="text-danger">
                    <p>{error }</p>

                </Form.Text>
                <Button variant="primary" type="submit" className='d-block'
                    disabled={!accept}
                >
                    Register
                </Button>

            </Form>

        </div>
    );
};

export default Register;