import React from 'react';

const Footer = (props) => {

    let array = ['Contact', 'About us']

    const mappedCard = array.map((value) => {

        return <li>
            <a href="#">{value}</a>
        </li>
    })

    let list2 = [{
        title: 'Facebook',
        xml: 'http://www.w3.org/2000/svg',
        path: 'M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z'
    },

    {
        title: 'Twitter',
        xml: 'http://www.w3.org/2000/svg',
        path: 'M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z'
    },

    {
        title: 'Google',
        xml: 'http://www.w3.org/2000/svg',
        path: 'M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z'
    },
    ]

    const ListCard = list2.map((value) => {

        return <li>
            <a href="#">
                <span class="screen-reader-text">{value.title}</span>
                <svg width="16" height="16" xmlns={value.xml}>
                    <path d={value.path} fill="#0270D7" />
                </svg>
            </a>
        </li>
    })

    return (

        <footer class="site-footer">
            <div class="container">
                <div class="site-footer-inner">
                    <div class="brand footer-brand">
                        <a href="#">
                            <img class="header-logo-image" src={props.image} alt={props.alter} />
                        </a>
                    </div>

                    <ul class="footer-links list-reset">
                        {mappedCard}
                    </ul>

                    <ul class="footer-social-links list-reset">
                       {ListCard}
                    </ul>
                    <div class="footer-copyright">&copy; {props.copyright}</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;