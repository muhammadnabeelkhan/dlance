import React from 'react';

const Contact = (props) => {
    return (
        <section class="cta section">
            <div class="container">
                <div class="cta-inner section-inner">
    <h3 class="section-title mt-0">{props.text}</h3>
                    <div class="cta-cta">
    <a class="button button-primary button-wide-mobile" href="#">{props.buttonText}</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;