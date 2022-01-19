import React from 'react';
import Location from '../../images/location.svg';

export default function Card(props) {
    return (
        <div className='card'>
            <img className="card-photo" src={props.imageUrl} alt={props.title}/>
            <div className='card-info'>
                <div className='card-places'>
                    <img src={Location} alt="Location"/>
                    <p className='card-location'>{props.location}</p>
                    <a href={props.googleMapsUrl} target="_blank" rel='noreferrer'>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className='card-times'>{props.startDate} - {props.endDate}</p>
                <p className='card-desc'>{props.description}</p>
            </div>
        </div>
    )
}