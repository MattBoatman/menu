import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = props => {
    return (
        <div className="card" onClick={props.clickCard}>
            <div className="imageWrapper">
            <img src={props.imageUrl} alt="Food" className="img" />
            </div>
            <div className="container" style={{borderBottom: `7px solid ${props.color}`}}>
                <div className="cardTitle">{props.title}</div>
            </div>
        </div>
    );
};

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    clickCard: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
};

export default Card;