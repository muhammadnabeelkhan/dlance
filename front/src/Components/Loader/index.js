import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { GridLoader } from 'react-spinners';

 
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
const Loader = ( props ) => {

    return (
      <div className='sweet-loading'>
        <GridLoader
          css={override}
          sizeUnit={"px"}
          size={10}
          color={'#54abe5'}
          loading={props.loading}
        />
      </div> 
    )
  }
  export default Loader