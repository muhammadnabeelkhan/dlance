import React, { Component } from 'react'
import './Styles.css'
import ViewJobCard from '../ViewJobCard';
import { Container, Row, Col } from 'react-grid-system';
import Loader from '../Loader';
import Actions from '../../Redux/Actions';
import { connect } from 'react-redux' 

class Jobs extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            allJobs: [],

        }
    }

    componentDidMount() {
      
       this._reloadJobs()
    }

    _reloadJobs = () => {
        let data = {
            freelancer_email: this.props.Reducer.userInfo.email
        }
        this.setState({ loading: true })
        this.props.GetAppliedJobs( data, success => {
            if(success.status == 'success')
            this.setState({ loading: false, allJobs: success.message })
            else
            this.setState({loading: false})
        }, error => {
            this.setState({ loading: false })
        })
    }

    _renderAlljobs = () => {

        // console.log('jobsss ',this.state.allJobs)
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

            return <ViewJobCard jobDetails={_jobDetails} view='MyJobs' _reloadJobs={this._reloadJobs}
                toggleLoading={this._toggleLoading} />
        })
    }


    _toggleLoading = () => {
        this.setState({ loading: !this.state.loading })
    }
 


    render() {
        return (<Container >
            <Loader loading={this.state.loading} />
            {
                <Row >
                    <Col lg={3} sm={3} md={3}></Col>

                    <Col lg={6} sm={6} md={6}>
                        {
                            this.state.allJobs.length > 0
                                ? this._renderAlljobs()
                                : <p style={{ textAlign: 'center' }}>Apply some jobs to see your jobs here</p>
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
        GetAppliedJobs: (data,success, error) => dispatch(Actions.GetAppliedJobs(data,success, error)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
