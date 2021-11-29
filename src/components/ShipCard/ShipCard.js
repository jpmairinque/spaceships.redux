import React from 'react'

const ShipCard = ({name, home_port, image}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{home_port}</p>
            <img width="100px" src={image} alt="" />
        </div>
    )
}

export default ShipCard
