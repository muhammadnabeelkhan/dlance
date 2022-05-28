import React, { Component } from 'react' 


class Help extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    _renderFreeLancer = () => {

        return <>
            <p style={{ color: '#000', width: '80vw', fontSize: '16px' }}>
                1.) Signup on Dwork using your email address,
                 pick a password of 8 in length and from the account type drop-drown, choose "Freelancer". 
                 Fill out the remaining information and signup.
                
            </p>

            <p style={{ color: '#000', width: '80vw', fontSize: '16px' }}>
            2.) Log in to the Dwork using your credentials and from the account type drown, choose
"Freelancer".
                
            </p>

            <p style={{ color: '#000', width: '80vw', fontSize: '16px' }}>
            3.) After logging in, you will see the Home of dashboard. Look at the top right corner, there is an option stating "Enable Metamask".
You need to enable the Metamask by clicking on it, a pop-up will appear which will ask the access to be given to Dwork. Give the access 
and then go the profile section from the drawer. You will see your Metamask id has appeared at your profile. You need to click on the
update button to save this Metamask id. ( Metamask is a chrome extension, which is used to develop our connection with the ethereum blockchain. )
                
            </p>

            <p style={{ color: '#000', width: '80vw', fontSize: '16px' }}>
            4.) The drawer contains various options, we will go through them. Click on the "View & Create Jobs", you will see all the jobs listed down. Since you 
as a freelancer cannot create jobs, so no option for that. You can browse through the listed jobs, and upon finding the right job for you, click on the 
apply button.
                
            </p>

            <p style={{ color: '#000', width: '80vw', fontSize: '16px' }}>
            5.) Upon clicking, the request will be submitted to the Employer. You can view your applied jobs in the "My Jobs" section.
                
            </p>

            <p style={{ color: '#000', width: '80vw', fontSize: '16px' }}>
            6.) If your request for the applied job is rejected, that job will disappear from your applied jobs section. If your request is accepted, you will see a 
"Start Job" button appear on the card. When you are ready to start this job, you have to click this button. This will update the job status and a "Complete Job" 
button will appear on the card. When you have completed the job, the status of the job will be updated.     
            </p>

            <p style={{ color: '#000', width: '80vw', fontSize: '16px' }}>
            7.) After completing the job, the employer will mark it done and the amount will be transfered to your account.    
            </p>

            <p style={{ color: '#000', width: '80vw', fontSize: '16px' }}>
            8.) To know more about Dwork, click on the "About Us" section.
            </p>

        </>
    }


    _renderEmployer = () => {

        return <>
            <p style={{ color: '#000', width: '80vw', fontSize: '16px' }}>
                1.) Signup on Dwork using your email address,
                 pick a password of 8 in length and from the account type drop-drown, choose "Employer". 
                 Fill out the remaining information and signup.
                
            </p>

            <p style={{ color: '#000', width: '80vw', fontSize: '16px' }}>
            2.) Log in to the Dwork using your credentials and from the account type drown, choose
"Employer".
                
            </p>

            <p style={{ color: '#000', width: '80vw', fontSize: '16px' }}>
            3.) After logging in, you will see the Home of dashboard. Look at the top right corner, there is an option stating "Enable Metamask".
You need to enable the Metamask by clicking on it, a pop-up will appear which will ask the access to be given to Dwork. Give the access 
and then go the profile section from the drawer. You will see your Metamask id has appeared at your profile. You need to click on the
update button to save this Metamask id. ( Metamask is a chrome extension, which is used to develop our connection with the ethereum blockchain. )
                
            </p>

            <p style={{ color: '#000', width: '80vw', fontSize: '16px' }}>
            4.) The drawer contains various options, we will go through them. Click on the "View & Create Jobs", you will see all the jobs listed down. Since you 
as a employer cannot apply for the jobs, so no option is visible for applying the jobs. You can browse through the listed jobs.
                
            </p>

            <p style={{ color: '#000', width: '80vw', fontSize: '16px' }}>
            5.) You can create the job by clicking on the "Create Job" button and by filling in the appropriate informations and selecting the category, publish the job.
This job will appear in the "View & Create Jobs" section and "Notifications" section which contains all your posted jobs.  
            </p>

            <p style={{ color: '#000', width: '80vw', fontSize: '16px' }}>
            6.) If someone applies for your job, you will see the "Accept" or "Decline" button appear on the card under the "Notifications" section. Upon accepting the 
proposal, the "Freelancer" can start the job and upon marking it complete, you will be shown a "Mark Done" button. 
            </p>

            <p style={{ color: '#000', width: '80vw', fontSize: '16px' }}>
            7.) Upon clicking on the "Mark Done" button, the amount will be deducted from your account and will be transferred to the "Freelancer".
              </p>

            <p style={{ color: '#000', width: '80vw', fontSize: '16px' }}>
            8.) To know more about Dwork, click on the "About Us" section.
            </p>

        </>
    }



    render() {


        return (<div style={{paddingLeft: '5px', paddingRight: '5px'}}  >
            <h4 style={{ color: '#000' }}>How to use Dwork?</h4>

            <h6 style={{ color: '#000', fontSize: '18px', fontWeight: '450', marginTop: '-1px' }}>Guidelines for freelancers:</h6>



            {
                this._renderFreeLancer()
            }



<h6 style={{ color: '#000', fontSize: '18px', fontWeight: '450', marginTop: '-1px' }}>Guidelines for employers:</h6>

{
    this._renderEmployer()
}

        </div>
        )
    }
}

export default Help
