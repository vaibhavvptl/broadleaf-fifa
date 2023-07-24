module.exports = {
	components: {
		schemas: {
			error: {
				type: "object",
				properties: {
					error: {
						type: "object",
						properties: {
							type: { type: "string" },
							statuscode: { type: "number" },
						},
					},
				},
			},
		},
	},
};
