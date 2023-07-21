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
                  type: { type: 'string' },
                  title: { type: 'string' },
                  Timestamp: { type: 'string',format:'date-time' },
                  status: { type: 'string' },
                  statuscode:{type:'number'}
                  
                },
              },
            },
          },
        },
      },
    },
  };
  