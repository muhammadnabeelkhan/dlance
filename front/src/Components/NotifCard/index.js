import React, { Component } from 'react'
import './Styles.css'
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux'
import Actions from '../../Redux/Actions';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import Web3 from 'web3'
import { smart_contract_ABI, smart_contract_address } from '../../BlockChain/config'

class NotifCard extends Component {

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

                    dwork.methods.completeJob(data)
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

    _onMarkComplete = () => {
        let data = {
            freelancer_email: this.props.jobDetails.freelancer_email,
            email: this.props.Reducer.userInfo.email,
            job_id: this.props.jobDetails.job_id, 
        }

        this.props.toggleLoading()
        this._enableMetaMask(data.job_id,completed => {
           
            this.props.markCompleteJob(data, success => {
                this.props._reloadJobs()
            }, error => {
                this.props.toggleLoading()
                ToastsStore.error(error.message)
            })
        }, failed => {

        })

      
    }


    _onAccept = () => {
        let data = {
            freelancer_email: this.props.jobDetails.freelancer_email,
            employer_email: this.props.Reducer.userInfo.email,
            job_id: this.props.jobDetails.job_id,
            notif_id: this.props.jobDetails.notif_id
        }
 
        this.props.toggleLoading()
        this.props.acceptJob(data, success => {
            this.props._reloadJobs()
        }, error => {
            this.props.toggleLoading()
            ToastsStore.error(error.message)
        })
    }

    _onDecline = () => {
        let data = {
            freelancer_email: this.props.jobDetails.freelancer_email,
            employer_email: this.props.Reducer.userInfo.email,
            job_id: this.props.jobDetails.job_id,
            notif_id: this.props.jobDetails.notif_id
        }
 
        this.props.toggleLoading()
        this.props.declineJob(data, success => {
            this.props._reloadJobs()
        }, error => {
            this.props.toggleLoading()
            ToastsStore.error(error.message)
        })
    }

    _renderButtonSection = () => {
        return <div className="BtnContainer" >
            <p ><h6 className="textStyle" >Posted by: </h6>{this.props.jobDetails.email}</p>
            {
                this.props.jobDetails.status == 'pending'
                    ? this._renderApprovalBtns()
                    : this.props.jobDetails.status == 'completed'
                        ? this._renderMarkDoneBtn()
                        : null
            }

        </div>

    }

    _renderApprovalBtns = () => {
        return <div><Button variant="contained" color="primary"
            onClick={this._onDecline} style={{marginRight: '7px'}} >
            Decline
                        </Button>
            <Button variant="contained" color="primary"
                onClick={this._onAccept}  >
                Accept
                    </Button>
        </div>
    }

    _renderMarkDoneBtn = () => {
        return <Button variant="contained" color="primary"
            onClick={this._onMarkComplete}  >
            Done
        </Button>

    }

    render() {

        return (<Paper elevation={3} className="Container" >

            <div className="RowContainer">
                <p><h6 className="textStyle">Job Request by: </h6>{this.props.jobDetails.freelancer_email}</p>

            </div>
            <div className="RowContainer">
                <p>{this.props.jobDetails.message}</p>
            </div>


            <div className="RowContainer">
                <p><h6 className="textStyle">Category: </h6>{this.props.jobDetails.category}</p>
                <p><h6 className="textStyle">Budget: </h6>{this.props.jobDetails.budget}</p>
            </div>

            <div className="RowContainer">
                <p><h6 className="textStyle">Duration: </h6>{this.props.jobDetails.duration}</p>
                <p><h6 className="textStyle">{'Status: '}</h6>{this.props.jobDetails.status}</p>
            </div>

            <div className="descriptionContainer" >
                <h6 className="textStyle">Description: </h6>
                <p className="description">{this.props.jobDetails.description}</p>
            </div>

            {
                this._renderButtonSection()

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
        declineJob: (data, success, error) => dispatch(Actions.declineJob(data, success, error)),
        acceptJob: (data, success, error) => dispatch(Actions.acceptJob(data, success, error)),
        markCompleteJob: (data, success, error) => dispatch(Actions.markCompleteJob(data, success, error)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(NotifCard)
