let data = "";
export function saveAddr(data){
	this.data = data;
}

export const smart_contract_address = '0xCf6347b0a0315589974522FE843046F4ef71C500'

export const smart_contract_ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_employer",
				"type": "string"
			},
			{
				"name": "_freelancer",
				"type": "string"
			},
			{
				"name": "_amount",
				"type": "string"
			},
			{
				"name": "_job_id",
				"type": "string"
			},
			{
				"name": "_status",
				"type": "string"
			}
		],
		"name": "applyJob",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_job_id",
				"type": "string"
			}
		],
		"name": "completeJob",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_key",
				"type": "string"
			}
		],
		"name": "getAll",
		"outputs": [
			{
				"components": [
					{
						"name": "employer",
						"type": "string"
					},
					{
						"name": "freelancer",
						"type": "string"
					},
					{
						"name": "amount",
						"type": "string"
					},
					{
						"name": "job_id",
						"type": "string"
					},
					{
						"name": "status",
						"type": "string"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]