// import React, { Component } from 'react';
// import './Card.css'

const Card = ({ name, email, id}) => {
    // const { name, email, id } = props;
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow pointer:hover: pointer bw2 shadow-5 tc'>
            <img src={`https://robohash.org/${id}?set=set3`} alt={`robot ${id}`} />
            <div>
                <h2 className='helvetica black fw4'>{name}</h2>
                <p className='helvetica black'>{email}</p>
            </div>
        </div>
    );
}

export default Card;