import React, { Component } from 'react'
import './Styles.css'
import Paper from '@material-ui/core/Paper';
import { TextField, Button, InputLabel } from '@material-ui/core';
import { connect } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import Actions from '../../Redux/Actions';

class CreateJobCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            jobFields: {
                category: '',
                budget: '',
                duration: '',
                description: '',
                email: this.props.Reducer.userInfo.email,
                account_type: this.props.Reducer.userInfo.account_type,
                status: 'newly arrived'
            }
        }
    }

    _onChange = (text, field) => {
        this.setState(prevState => ({
            ...prevState,
            jobFields: {
                ...prevState.jobFields,
                [field]: text
            }
        }))
    }

    _handleCreateJob = () => {

        let jobFields = this.state.jobFields

        if (jobFields.description.trim() == '')
            return ToastsStore.error('Please provide job description')

        if (jobFields.duration.trim() == '')
            return ToastsStore.error('Please provide job duration')

        if (jobFields.budget.trim() == '')
            return ToastsStore.error('Please provide job budget')

        if (jobFields.category.trim() == '')
            return ToastsStore.error('Please provide job category')


        
            this.props.toggleLoading()
        this.props.CreateJob(this.state.jobFields, success => {
            if (success.status == 'success') {
                this.props.toggleLoading()
                this.props.toggleShow()
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



    render() {

        return (<Paper elevation={3} className="Container"   >

            <div className="descContainer" >
                <h6 className="textStyle">Create Dwork Job</h6>
            </div>


            <div className="RowContainer">
                <TextField id="outlined-basic" className="inputStyle" value={this.state.jobFields.description}
                    label="Description" variant="outlined" placeholder="Job description" multiline={true} rowsMax={5}
                    onChange={(e) => this._onChange(e.target.value, 'description')} fullWidth />

            </div>

            <div className="RowContainer">
                <TextField id="outlined-basic" className="inputStyle" value={this.state.jobFields.duration}
                    label="Duration" variant="outlined" placeholder="2 months"
                    onChange={(e) => this._onChange(e.target.value, 'duration')}
                    style={{ marginRight: '15px', marginTop: '20px' }}
                />

                <TextField id="outlined-basic" className="inputStyle" value={this.state.jobFields.budget}
                    label="Budget" variant="outlined" disabled={this.state.disabled} placeholder="50$"
                    onChange={(e) => this._onChange(e.target.value, 'budget')}
                    style={{ marginTop: '20px' }}
                    />
            </div>


            <div className="RowContainer" style={{marginTop: '5px'}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select a category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.jobFields.category}
                        onChange={(e) => this._onChange(e.target.value, 'category')}
                    >
                        <MenuItem value={'mobile_app'}>Mobile App</MenuItem>
                        <MenuItem value={'web_app'}>Web App</MenuItem>
                    </Select>
                </FormControl>

            </div>

            <div className="BtnContainer" style={{
                marginTop: '10px'
            }}>
                <Button variant="contained" color="primary" onClick={this._handleCreateJob} >Create Job</Button>
            </div>

            <div className="BtnContainer" >
            <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER} />
            </div>
           
        </Paper>
        )
    }
}


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        CreateJob: ( data,success, error) => dispatch(Actions.CreateJob(data,success, error)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CreateJobCard)
