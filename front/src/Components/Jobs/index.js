import React, { Component } from 'react'
import './Styles.css'
import ViewJobCard from '../ViewJobCard';
import { Container, Row, Col } from 'react-grid-system';
import Loader from '../Loader';
import Actions from '../../Redux/Actions';
import { connect } from 'react-redux'
import { TextField, Button } from '@material-ui/core';
import CreateJobCard from '../CreateJobCard';

class Jobs extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            allJobs: [],

        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.props.GetAllJobs(success => {
            this.setState({ loading: false, allJobs: success.alljobs })
        }, error => {
            this.setState({ loading: false })
        })
    }

    _renderAlljobs = () => {
        return this.state.allJobs.map((job, index) => {
            let _jobDetails = {
                duration: job.duration,
                budget: job.budget,
                description: job.description,
                category: job.category, 
                status: job.status,
                job_id: job.job_id,
                email: job.email
            }

            return <ViewJobCard jobDetails={_jobDetails}
                toggleLoading={this._toggleLoading} />
        })
    }


    _toggleLoading = () => {
        this.setState({ loading: !this.state.loading })
    }


    _renderCreateJobs = () => {
        return <Row >
            <Col lg={3} sm={3} md={3}></Col>

            <Col lg={6} sm={6} md={6} >
                <CreateJobCard toggleLoading={this._toggleLoading} toggleShow={this.props.toggleShow} />
            </Col>

            <Col lg={3} sm={3} md={3}></Col>
        </Row>

    }



    render() {
        return (<Container >
            <Loader loading={this.state.loading} />
            {

                this.props.show
                    ? this._renderCreateJobs()
                    : <Row >
                        <Col lg={3} sm={3} md={3}></Col>

                        <Col lg={6} sm={6} md={6}>
                            {
                                this.state.allJobs.length > 0
                                    ? this._renderAlljobs()
                                    : <p style={{ textAlign: 'center' }}>No new jobs</p>
                            }
                        </Col>

                        <Col lg={3} sm={3} md={3}></Col>
                    </Row>


            }
        </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetAllJobs: (success, error) => dispatch(Actions.GetAllJobs(success, error)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
