import { Api } from "../../API"

const Actions = {

    Signup: (data, completed, failed) => {
        // console.log(data)
        return dispatch => {
            dispatch({ type: 'START_LOADING' })

            let userData = {
                path: 'abc',
                content: data
            }

            Api.post(userData, '/signup', success => {
                dispatch({ type: 'STOP_LOADING' })
                return completed(success)
            }, error => {
                dispatch({ type: 'STOP_LOADING' })
                return failed(error)
            })
        }
    },

    Login: (data, completed, failed) => {
// console.log(data)
        return dispatch => {
            dispatch({ type: 'START_LOADING' })


            Api.post( data, '/signin', success => {
                dispatch({ type: 'USER_INFO', payload: success.userdata })
                return completed(success)
            }, error => {
                dispatch({ type: 'STOP_LOADING' })
                return failed(error)
            })
        }
    },

    Clear: () => {
        return dispatch => {
            dispatch({ type: 'CLEAR' })


        }
    },

    Update_Metamask: ( accountNo ) => {
        return dispatch => {
            dispatch({ type: 'UPDATE_META_MASK', payload: accountNo })


        }
    },

    EditProfile: (data, completed, failed) => {

        return dispatch => {
            dispatch({ type: 'START_LOADING' })

            let userData = {
                path: 'abc',
                content: data
            }

            Api.post(userData, '/editProfile', success => {
                dispatch({ type: 'STOP_LOADING' })
                Api.post(data, '/Profile', success => {
                    dispatch({ type: 'UPDATE_USER_INFO', payload: success.userdata })
                    
                }, error => {
                    
                })
                return completed(success)
            }, error => {
                dispatch({ type: 'STOP_LOADING' })
                return failed(error)
            })
        }
    },
 
    GetAllJobs: ( completed, failed) => {

        return dispatch => { 
            
            Api.get( '/allJobs', success => { 
               
                return completed(success)
            }, error => {
                
                return failed(error)
            })
        }
    },

    CreateJob: (data, completed, failed) => {

        return dispatch => {  
            Api.post(data, '/createJob', success => { 
                
                return completed(success)
            }, error => { 
                return failed(error)
            })
        }
    },

    applyJob: (data, completed, failed) => {

        return dispatch => {  
            Api.post(data, '/apply', success => { 
                
                return completed(success)
            }, error => { 
                return failed(error)
            })
        }
    },

    GetAppliedJobs: (data, completed, failed) => {

        return dispatch => { 
            
            Api.post( data, '/appliedJobs', success => { 
               
                return completed(success)
            }, error => {
                
                return failed(error)
            })
        }
    },

    startJob: (data, completed, failed) => {

        return dispatch => { 
            
            Api.post( data, '/startJob', success => { 
               
                return completed(success)
            }, error => {
                
                return failed(error)
            })
        }
    },

    completeJob: (data, completed, failed) => {

        return dispatch => { 
            
            Api.post( data, '/completeJob', success => { 
               
                return completed(success)
            }, error => {
                
                return failed(error)
            })
        }
    },

    getAllNotifs: (data, completed, failed) => {

        return dispatch => { 
            
            Api.post( data, '/notifications', success => { 
               
                return completed(success)
            }, error => {
                
                return failed(error)
            })
        }
    },

    declineJob: (data, completed, failed) => {

        return dispatch => { 
            
            Api.post( data, '/declineJob', success => { 
               
                return completed(success)
            }, error => {
                
                return failed(error)
            })
        }
    },

    acceptJob: (data, completed, failed) => {

        return dispatch => { 
            
            Api.post( data, '/acceptJob', success => { 
               
                return completed(success)
            }, error => {
                
                return failed(error)
            })
        }
    },

    markCompleteJob: (data, completed, failed) => {

        return dispatch => { 
            
            Api.post( data, '/markCompleteJob', success => { 
               
                return completed(success)
            }, error => {
                
                return failed(error)
            })
        }
    },

}

export default Actions