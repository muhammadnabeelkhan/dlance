import React from 'react';
import Spinner from '../Spinner';
import { withRouter } from 'react-router'

const HomePage = (props) => {
  return (
    <main  style={{paddingTop:'20px'}}> 
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end',marginTop:'50px' }}>
      <p onClick={()=>props._enableMetaMask()}
          style={{ color: 'black', textDecoration: 'underline', cursor: 'pointer', marginRight:'20px',fontWeight: 200 }}>
            <strong>Enable Metamask</strong></p>

        <p onClick={()=>props._onSignOut()}
          style={{ color: 'black', textDecoration: 'underline', cursor: 'pointer', fontWeight: 200 }}>
            <strong>Sign Out</strong></p>
      </div>
      <div style={{ textAlign: 'center' }} > 
        
            <Spinner />
            <h5 style={{ color: 'black', fontWeight: 200 }}>
              <strong> Welcome To Dwork, {props.username} 😃</strong>
              </h5>
       
      </div>
    </main>
  );
}

 
export default withRouter(HomePage);