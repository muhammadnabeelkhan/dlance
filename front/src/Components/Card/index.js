import React from 'react';

const Card = (props) => {
    return (
        <div class="feature text-center is-revealing">
            <div class="feature-inner">
                <div class="feature-icon">
                    <img src={props.image} alt="Feature 06" />
                </div>
    <h4 class="feature-title mt-24">{props.title}</h4>
    <p class="text-sm mb-0">{props.description}</p>
                </div>
            </div>
            );
        }
        
export default Card;