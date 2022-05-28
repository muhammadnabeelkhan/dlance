import React, { Component } from 'react'
import './Styles.css'
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux'
import Actions from '../../Redux/Actions';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import Web3 from 'web3'
import { smart_contract_ABI, smart_contract_address } from '../../BlockChain/config'

class ViewJobCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    _enableMetaMask = (data, success, error) => {
        let web3;
        let that = this

        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            try {
                window.ethereum.enable().then(function (d) {
                    // User has allowed account access to DApp...
                    // console.log('meta mask succ ', d[0])
                    const dwork = new web3.eth.Contract(smart_contract_ABI, smart_contract_address)

                    dwork.methods.applyJob(data.employer, data.freelancer, data.amount, data.job_id, data.status)
                        .send({ from: d[0] })
                        .once('receipt', (receipt) => {
                            console.log(receipt)
                            return success(true)
                        })


                })
                    .catch(err => {
                        console.log('meta mask err 1 ', err)
                        ToastsStore.error('Meta mask authorization is required !')
                        return error(false)

                    })

            } catch (e) {
                // User has denied account access to DApp...
                console.log('meta mask err ', e)
                ToastsStore.error('Meta mask authorization is required !')
                return error(false)

            }
        }
        else {
            alert('You have to install MetaMask !');
            return error(false)
        }
    }

    _onClickApply = () => {
        let data = {
            freelancer_email: this.props.Reducer.userInfo.email,
            employer_email: this.props.jobDetails.email,
            category: this.props.jobDetails.category,
            job_id: this.props.jobDetails.job_id
        }


        this.props.applyJob(data, success => {
            if (success.status == 'success') {
                this.props.toggleLoading()
                ToastsStore.success(success.message)
            }
            else {
                this.props.toggleLoading()
                ToastsStore.error(success.message)
            }
        }, error => {
            this.props.toggleLoading()
            ToastsStore.error(error.message)
        })


    }


    _onClickStart = () => {
        let data = {
            freelancer_email: this.props.Reducer.userInfo.email,
            email: this.props.jobDetails.email,
            job_id: this.props.jobDetails.job_id
        }

        let blockChain_data = {
            employer: this.props.jobDetails.email,
            freelancer: this.props.Reducer.userInfo.email,
            amount: this.props.jobDetails.budget,
            job_id: this.props.jobDetails.job_id,
            status: "started"
        }

        this.props.toggleLoading()
        this._enableMetaMask(blockChain_data, completed => {

            this.props.startJob(data, success => {
                if (success.status == 'success') {
                    this.props._reloadJobs()
                }
                else {
                    this.props.toggleLoading()
                }
            }, error => {
                this.props.toggleLoading()
                ToastsStore.error(error.message)
            })
        }, failed => {

        })

    }

    _onClickComplete = () => {
        let data = {
            freelancer_email: this.props.Reducer.userInfo.email,
            email: this.props.jobDetails.email,
            job_id: this.props.jobDetails.job_id
        }


        this.props.toggleLoading()
        this.props.completeJob(data, success => {
            if (success.status == 'success') {
                this.props._reloadJobs()
            }
            else {
                this.props.toggleLoading()
            }
        }, error => {
            this.props.toggleLoading()
            ToastsStore.error(error.message)
        })
    }

    _renderButtonSection = () => {
        if (this.props.view == 'MyJobs')
            return <div className="BtnContainer" >
                <p ><h6 className="textStyle">Posted by: </h6>{this.props.jobDetails.email}</p>
                {
                    this.props.jobDetails.status == 'declined' || this.props.jobDetails.status == 'pending' || this.props.jobDetails.status == 'done'
                        ? null
                        : <Button variant="contained" color="primary"
                            onClick={this.props.jobDetails.status == 'accepted'
                                ? this._onClickStart : this.props.jobDetails.status == 'started' ? this._onClickComplete
                                    : null
                            }
                        >

                            {this.props.jobDetails.status == 'accepted' ? 'Start'
                                : this.props.jobDetails.status == 'started' ? 'Complete' : null}
                        </Button>
                }

            </div>
        else
            return <div className="BtnContainer" >
                <p ><h6 className="textStyle">Posted by: </h6>{this.props.jobDetails.email}</p>
                <Button variant="contained" color="primary"
                    onClick={this._onClickApply} >
                    Apply
            </Button>
            </div>
    }

    render() {

        return (<Paper elevation={3} className="Container" >
            <div className="RowContainer">
                <p><h6 className="textStyle">Category: </h6>{this.props.jobDetails.category}</p>
                <p><h6 className="textStyle">Budget: </h6>{this.props.jobDetails.budget}</p>
            </div>

            <div className="RowContainer">
                <p><h6 className="textStyle">Duration: </h6>{this.props.jobDetails.duration}</p>
                <p><h6 className="textStyle">{this.props.view == 'MyJobs' ? 'Request status: ' : 'Status: '}</h6>{this.props.jobDetails.status}</p>
            </div>

            <div className="descriptionContainer" >
                <h6 className="textStyle">Description: </h6>
                <p className="description">{this.props.jobDetails.description}</p>
            </div>

            {


                this.props.Reducer.userInfo.account_type == 'Freelancer'
                    ? this._renderButtonSection()
                    : <div className="RowContainer" >
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <h6 className="textStyle" style={{marginRight: '4px'}} >Posted by: </h6> {this.props.jobDetails.email}</div>
                    </div>
            }


            <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER} />
        </Paper>
        )
    }
}


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        applyJob: (data, success, error) => dispatch(Actions.applyJob(data, success, error)),
        startJob: (data, success, error) => dispatch(Actions.startJob(data, success, error)),
        completeJob: (data, success, error) => dispatch(Actions.completeJob(data, success, error)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ViewJobCard)
