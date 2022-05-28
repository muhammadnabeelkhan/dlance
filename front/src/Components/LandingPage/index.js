import React, { Component } from 'react';
import './style.css';
import Logo from '../../Assets/images/logo.svg';

import HeaderImage from '../HeaderImage';
import MainBody from '../MainBody';
import Footer from'../Footer';

class Landingpage extends Component {




render(props){
    console.log('checking props ',props)

    return (

        <body class="is-boxed has-animations"  >
            <div class="body-wrap" >
                <HeaderImage source = {Logo}/>
                <MainBody/>
                <Footer image = {Logo} alter = "Logo" copyright = "2020 Dwork, all rights reserved"/>
            </div>
        </body>

    );
}
    
}

export default  Landingpage;