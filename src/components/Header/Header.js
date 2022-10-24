import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import navlogo from '../../Images/nav-removebg-preview.png'
import { AuthContext } from '../../Images/UserContext/AuthProvider';
import { FaUser} from 'react-icons/fa';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const logOutHandler = () => {
        logOut()
            .then(() => { })
            .catch(error => {
            console.error(error)
        })
    }
    return (
        <section className='container'>
            <Navbar bg="bg-transparent" expand="lg" sticky="top" className='text-white align-items-center '>
                <Container fluid>
                    <Link to='/' className='text-decoration-none text-white fs-3 fw-semibold align-items-center'> <Image src={navlogo} style={{ width: '100px', height: '50px' }} /> <span>Be Travel Be Fresh </span></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='ms-3 text-decoration-none text-white' to='/'>Home</Link>
                            {
                                user?.uid ? 
                                    <div className='ms-3'>
                                        <button className='bg-transparent border-0  ' onClick={logOutHandler}> Log Out</button>

                                  </div>
                                    :
                                    <>
                                        <Link className='ms-3 text-decoration-none text-white ' to='/login'>Login</Link>
                                        <Link className='ms-3 text-decoration-none text-white' to='/register'>Register</Link>
                                    </>
                            }
                           
                            <div className='d-flex ms-3'>
                                
                                <p >{user?.displayName}</p>
                                {
                                    user?.uid ?
                                        <div className='ms-3'>
                                        <Image src={user?.photoURL} alt="" roundedCircle style={{ width: '30px', height: '30px' }} />
                                        </div>
                                        :
                                        <div className='align-items-center'>
                                             <FaUser />
                                       </div>
                                       
                                }
                            </div>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </section>
    );
};

export default Header;