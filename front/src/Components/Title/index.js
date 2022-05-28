import React from 'react';
import { connect } from 'react-redux';
// import Actions from '../../Redux/Actions';

import { withRouter } from "react-router";

class Title extends React.Component
{
	constructor(props){
		super()
	}


	_onButtonClick = () => {
		console.log(this.props);
		
		this.props.history.push('/dwork/signin')
	}

	render(){


		return(

			<section class="hero">
						<div class="container">
							<div class="hero-inner">
								<div class="hero-copy">
							<h1 class="hero-title mt-0">{this.props.title}</h1>
							<p class="hero-paragraph">{this.props.description}</p>
							<div class="hero-cta">
								<button class="button button-primary" onClick = {this._onButtonClick}>{this.props.buttonText}</button>
		
								</div>
								</div>
								{/* <div class="hero-figure anime-element">
									<svg class="placeholder" width="528" height="396" viewBox="0 0 528 396">
										<rect width="528" height="396" style={{fill:"transparent"}} />
									</svg>
									<div class="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
									<div class="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
									<div class="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
									<div class="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
									<div class="hero-figure-box hero-figure-box-05"></div>
									<div class="hero-figure-box hero-figure-box-06"></div>
									<div class="hero-figure-box hero-figure-box-07"></div>
									<div class="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
									<div class="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
									<div class="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
								</div> */}

<div className="pricing-tables-wrap animated rotateIn delay-1s" >
                <div className="pricing-table" style={{marginTop:'300px'}} >
                   
						</div>
						</div>

							</div>
						</div>
					</section>
		
		);
	}

}

// const mapStateToProps = ( state ) => {
// 	return state;
// }

// const mapDispatchToProps = ( dispatch ) => {
// 	return {
// 		// set_name: ( name ) => Actions.set_name(name)
// show_dashboard : () => dispatch(Actions.show_dashboard())

// 	}
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Title);

export default withRouter(Title)