export const smart_contract_address = '0xDfa07c623a1eD9f3E75987C31A728d345a4E0324'

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
	}
]