module.exports = {
    components: {
      schemas: {
        error: {
          type: 'object',
          properties: {
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  timestamp: { type: 'string',format:'date-time' },
                  status: { type: 'string' },
                  statusCode:{type:'number'},
                  type: { type: 'string' },
                  
                },
              },
            },
          },
        },
      },
    },
  };
  