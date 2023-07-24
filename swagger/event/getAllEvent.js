module.exports = {
    get: {
      tags: ['Event Operations'],
      description:
        'This API endpoint retrieves a list of all available Events in the Application.',
      oprationId: 'getAllEvents',
      
      responses: {
        200:{
        description: 'All Events',
        content:{
          'application/json':{
            schema:{
              type: 'array',
              items:{
                type: 'object',
                properties:{
                  title: { type: 'string' },
                  eventStartDateTime: { type: 'string' },
                  eventEndDateTime: { type: 'string' },
                  doorDateTime: { type: 'string' },
                  ageRestrictions: { type: 'string' },
                  internalNotes: { type: 'string' },
                  legendsVenue:{
                    type: 'object',
                    properties:{
                      id: { type: 'string' },
                     homeTeamName: { type: 'string' },
                    awayTeamName: { type: 'string' },
                    aboutMatchLongDesc: { type: 'string' },
                    aboutMatchShortDesc: { type: 'string' }
                    },
                },
            },
        },
    },
},
        },
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
    
    


