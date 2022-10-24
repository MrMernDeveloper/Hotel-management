import React from 'react';
import { Col, NavLink } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './place.css'



const Place = ({ place, handelPlace }) => {
    const {name, img} = place
    return (
        <Col className='my-5 '>
            
            <NavLink className={({ isActive }) => isActive ? 'border border-1' : 'border-0'}>
                <Card className='border-0 shadow-lg bg-light text-center ' onClick={() => handelPlace(place)}>
                    <Card.Img className='card-img' variant="top" src={img} style={{ height: '250px' }} />
                    <Card.Title>{name}</Card.Title>

                </Card>
              </NavLink>
       
         
        </Col>
    );
};

export default Place;