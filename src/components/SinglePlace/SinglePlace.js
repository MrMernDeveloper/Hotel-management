import React from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const SinglePlace = () => {
    const singlePlace = useLoaderData()
    const { origin, destination, category_id } = singlePlace

    console.log(singlePlace)
    return (
        <div className='container mt-5'>
            <Row>
                <Col sm={12} md={6}>
                    <div className='text-white mt-5'>
                        <h1>{singlePlace?.name}</h1>
                        <p>{singlePlace?.details}</p>
                        
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <Form className='w-75 mx-auto bg-light rounded p-4'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Origin</Form.Label>
                            <Form.Control type="text"defaultValue={origin}  readOnly/>
                           
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="text" defaultValue={destination} readOnly />
                        </Form.Group>
                        <div className='d-flex justify-content-between  my-3'>
                            <div >
                                <label for="start">From</label>

                                <input type="date" id="start" name="trip-start"
                                    value="2022-01-01"
                                    min="</input>2018-01-01" max="2024-12-31"/>
                            </div>
                            <div>
                                <label for="start">To</label>

                                <input type="date" id="start" name="trip-start"
                                    value="2022-01-01"
                                    min="2018-01-01" max="2024-12-31"/>
                            </div>

                        </div>
                        
                        <Link to={`/hotels/${category_id}`}>

                            <Button variant="warning" className='px-5 ms-5'>
                                Start booking
                            </Button>
                        </Link>
                    </Form>
                    
                </Col>
            </Row>

           
            
        </div>
    );
};

export default SinglePlace;