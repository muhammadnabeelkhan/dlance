// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract DLance{

    //structure for storing information related to dlance employee and freelance
    struct Information{
        string employer;
        string freelancer;
        string amount;
        string job_id;
        string status;
    }

    //Collection for Information
    Information[] public collection;


    //Trigger for storing information in collection
    function applyJob(string memory _employer, string memory _freelancer, string memory _amount, string memory _job_id, string memory _status) public{
        collection.push(Information(_employer,_freelancer,_amount,_job_id,_status));
    }

    //Status changed when job is completed
    function completeJob(string memory _job_id) public{
       for(uint i = 0;i<collection.length;i++){
           if(keccak256(abi.encodePacked(_job_id)) == keccak256(abi.encodePacked(collection[i].job_id))){
            collection[i].status = "Completed";
           }
       }
    }

    //getter for collection
    function getAll(uint _key) public view returns (string memory,string memory,string memory,string memory,string memory){
        for(uint j = 0;j<collection.length;j++){
           if(_key ==  j){
                return (collection[j].employer,collection[j].freelancer,collection[j].amount,collection[j].job_id,collection[j].status);
           }
       }
    }

}