import React from 'react';

const Hotel = ({ hotel }) => {
    
    const { title, img } = hotel
    return (
        <div class="card mb-3 w-100">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={img} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;