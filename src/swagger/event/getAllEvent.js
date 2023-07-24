module.exports = {
	get: {
		tags: ["Event Operations"],
		description:
			"This API endpoint retrieves a list of all available Events in the Application.",
		oprationId: "getAllEvents",

		responses: {
			200: {
				description: "All Events",
				content: {
					"application/json": {
						schema: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: {
										type: "string",
									},
									contextShape: {
										type: "object",
										properties: {
											mutable: {
												type: "boolean",
												default: false,
											},
											archived: {
												type: "boolean",
												default: false,
											},
											fieldChanges: {
												type: "array",
												items: {
													type: "string",
												},
											},
											level: {
												type: "integer",
											},
											catalog: { type: "string", default: null },
											sandbox: { type: "string", default: null },
											application: {
												type: "object",
												properties: {
													contextId: { type: "string" },
													name: { type: "string" },
													defaultLocale: { type: "string" },
												},
											},
											tenant: { type: "string" },
											customerContextId: { type: "string" },
											baseCatalogId: { type: "string", default: null },
											overrideCatalogId: { type: "string", default: null },
											sandboxChangeType: { type: "string" },
										},
									},
									title: { type: "string" },
									eventStartDateTime: { type: "Date" },
									eventEndDateTime: { type: "Date" },
									doorDateTime: { type: "string" },
									ageRestrictions: { type: "string" },
									internalNotes: { type: "string" },
									legendsVenue: {
										type: "object",
										properties: {
											id: { type: "string" },
										},
									},
									homeTeamName: { type: "string" },
									awayTeamName: { type: "string" },
									aboutMatchLongDesc: { type: "string" },
									aboutMatchShortDesc: { type: "string" },
								},
							},
						},
					},
				},
			},

			403: {
				description:
					"Forbidden : The server understood the request, but the user or client does not have access to the requested resource.",
				content: {
					"application/json": {
						schema: {
							$ref: "#/components/schemas/error",
						},
					},
				},
			},
			401: {
				description:
					"Unauthorized : client request has not been completed because it lacks valid authentication credentials for the requested resource.. ",
				content: {
					"application/json": {
						schema: {
							$ref: "#/components/schemas/error",
						},
					},
				},
			},

			500: {
				description:
					"Internal Server Error : The server encountered an error while processing the request.",
				content: {
					"application/json": {
						schema: {
							$ref: "#/components/schemas/error",
						},
					},
				},
			},
		},
	},
};
