import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Place from '../Place/Place';
import { FaArrowRight} from 'react-icons/fa';
import './home.css'

const Home = () => {
    const data = useLoaderData()
    // console.log(data)
    const [place, setPlace] = useState(data[0])

    const handelPlace = (place) => {
        setPlace(place)
    }

    // console.log(place)

    
    return (
    
        <div className='container mt-4 ' >
            <Row className="g-4">
                <Col sm={12} md={4}>
                    <div className='text-white mt-5'>
                        <h1>{place?.name}</h1>
                        <p>{place?.details}</p>
                        <Link to={`/place/${place.id}`}><button className='btn btn-danger px-3'>Booking <FaArrowRight/> </button></Link>
                    </div>

                </Col>
                <Col sm={12} md={8} className="g-4">
                    <Row xs={1} md={2} lg={3} >
                        {data.map(place => <Place

                            key={place.id}
                            place={place}
                            handelPlace={handelPlace}></Place>)}
                    </Row>
                </Col>
            </Row>
            
            
            
        </div>
    );
};

export default Home;