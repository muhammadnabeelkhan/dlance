export const smart_contract_address = '0x49a84C506e1f222eDcC174D7dBfB146Fe9E80e06'

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