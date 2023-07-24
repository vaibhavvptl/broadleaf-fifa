module.exports = {
    get: {
      tags: ['Venue Operations'],
      description:
        'This API endpoint retrieves a list of all available venue in the Application.',
      oprationId: 'getAllVenues',
      
      responses: {
        200: {
            "description": "List of All venues.",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      name: {
                        type: "string"
                      },
                      address: {
                        type: "object",
                        properties: {
                          addressLine1: {
                            type: "string"
                          },
                          city: {
                            type: "string"
                          },
                          state: {
                            type: "string"
                          },
                          zipCode: {
                            type: "string"
                          },
                          country: {
                            type: "string"
                          }
                        }
                      },
                      venueUrl: {
                        type: "string"
                      },
                      venuePhone: {
                        type: "string"
                      },
                      capacity: {
                        type: "integer"
                      },
                      internalNotes: {
                        type: "string"
                      },
                      description: {
                        type: "string"
                      }
                    }
                  }
                }
              }
            }
          },

        403: {
          description:
            'Forbidden : The server understood the request, but the user or client does not have access to the requested resource.',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/error',
              },
            },
          },
        },

        404: {
            description:
              'found: The requested resourse is not found.',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/error',
                },
              },
            },
          },



        401: {
          description:
            'Unauthorized : client request has not been completed because it lacks valid authentication credentials for the requested resource.. ',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/error',
              },
            },
          },
        },
  
        500: {
          description:
            'Internal Server Error : The server encountered an error while processing the request.',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/error',
              },
            },
          },
        },
    },
},
    };
    
    