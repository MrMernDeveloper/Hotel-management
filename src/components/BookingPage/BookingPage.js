import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';
import map from '../../Images/map.jpeg'

const BookingPage = () => {
    const hotels = useLoaderData()
    console.log(hotels)
    return (
        <div className='container mt-4'>
            <Row className='g-4'>
                <Col sm={12} md={6}>
                    {
                        hotels.map(hotel => <Hotel
                            key={hotel.category_id}
                        hotel={hotel}></Hotel>)
                   }
                </Col>
                <Col sm={12} md={6}>
                    <div>
                        <img src={map} alt="" className='img-fluid rounded-4' />
                    </div>

                </Col>
                </Row>
        </div>
    );
};

export default BookingPage;