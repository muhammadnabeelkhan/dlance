import React, { Component } from 'react'
import './Styles.css'
import { TextField, Button } from '@material-ui/core';
import { Container, Row, Col } from 'react-grid-system';
import Actions from '../../Redux/Actions';
import { connect } from 'react-redux'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
 

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userInfo: this.props.Reducer.userInfo,
            disabled: true
        }
    }

   


    _onChange = ( text, field ) => {
        this.setState( prevState => ({
            ...prevState,
            userInfo: {
                ...prevState.userInfo,
                [field] : text
            }
        }))
    }

    _toggleEditable = () => {
        this.setState({ disabled: !this.state.disabled })
    }

    _updateProfile = () => {

        let data = {
            first_name: this.state.userInfo.first_name,
            last_name: this.state.userInfo.last_name,
            email: this.state.userInfo.email,
            username: this.state.userInfo.username,
            account_type: this.state.userInfo.account_type,
            accountNo: this.state.userInfo.accountNo == '' 
            ? this.props.Reducer.metamask_acc != '' ? this.props.Reducer.metamask_acc
             : this.state.userInfo.accountNo : this.state.userInfo.accountNo 
        }

        this.props.EditProfile( data, success => {

            if (success.status == 'success') {
                ToastsStore.success(success.message) 
              }
              else {
                ToastsStore.error(success.message)
               
              }
        }, error => {
            ToastsStore.error(error.message)
        })
    }

    render() {
        return (<Container fluid >
      
            <Row fluid>
                <Col lg={2.5} sm={2.5} md={2.5}></Col>

                <Col lg={3} sm={3} md={3}>
                    <TextField id="outlined-basic" className="inputStyle" value={this.state.userInfo.first_name}
                        label="First Name" variant="outlined" disabled={this.state.disabled}
                         onChange={(e)=>this._onChange(e.target.value,'first_name')} />
                </Col>

                <Col lg={1} sm={1} md={1}></Col>



                <Col lg={3} sm={3} md={3}>
                    <TextField id="outlined-basic" className="inputStyle" value={this.state.userInfo.last_name}
                        label="Last Name" variant="outlined" disabled={this.state.disabled}
                        onChange={(e)=>this._onChange(e.target.value,'last_name')} />
                </Col>

                <Col lg={2.5} sm={2.5} md={2.5}></Col>
            </Row>

            <Row fluid style={{ marginTop: '20px' }}>
                <Col lg={2.5} sm={2.5} md={2.5}></Col>

                <Col lg={3} sm={3} md={3}>
                    <TextField id="outlined-basic" className="inputStyle" value={this.state.userInfo.email}
                        label="Email" variant="outlined" disabled />
                </Col>

                <Col lg={1} sm={1} md={1}></Col>



                <Col lg={3} sm={3} md={3}>
                    <TextField id="outlined-basic" className="inputStyle" value={this.state.userInfo.username}
                        label="UserName" variant="outlined" disabled={this.state.disabled} 
                        onChange={(e)=>this._onChange(e.target.value,'username')} />
                </Col>

                <Col lg={2.5} sm={2.5} md={2.5}></Col>
            </Row>

            <Row fluid style={{ marginTop: '20px' }}>
                <Col lg={2.5} sm={2.5} md={2.5}></Col>

                <Col lg={3} sm={3} md={3}>
                    <TextField id="outlined-basic" className="inputStyle" value={this.state.userInfo.account_type}
                        label="Account Type" variant="outlined" disabled />
                </Col>

                <Col lg={1} sm={1} md={1}></Col>



                <Col lg={3} sm={3} md={3}>
                    <TextField id="outlined-basic" className="inputStyle" 
                    value={this.state.userInfo.accountNo == '' 
                    ? this.props.Reducer.metamask_acc != '' ? this.props.Reducer.metamask_acc
                     : this.state.userInfo.accountNo : this.state.userInfo.accountNo }
                        disabled label="Meta mask ID" variant="outlined" />
                </Col>

                <Col lg={2.5} sm={2.5} md={2.5}></Col>
            </Row>

            <Row fluid style={{ marginTop: '20px' }}>

                <Col lg={5} sm={5} md={5}></Col>

                <Col lg={3} sm={3} md={3}>
                    <Button variant="contained" color="primary" 
                    onClick={ this.state.disabled ? this._toggleEditable : this._updateProfile} >
                        
                        {
                             this.state.disabled ? "Edit Profile" : "Update Profile"
                        }
                    </Button>
                </Col>

                <Col lg={4} sm={4} md={4}></Col>


            </Row>

            {
                this.state.disabled == false
                    ? <Row fluid style={{ marginTop: '20px' }}>
                        <Col lg={5.4} sm={5} md={5}></Col>

                        <Col lg={2} sm={3} md={3}>
                            <Button variant="contained" color="primary" onClick={this._toggleEditable} >
                                Cancel
                            </Button>
                        </Col>

                        <Col lg={4.6} sm={4} md={4}></Col>


                    </Row>
                    : null
            }

<ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER} />
        </Container>
        )
    }
}


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        EditProfile: (data, success, error) => dispatch(Actions.EditProfile(data, success, error)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
