const errorMessage=require('./errorMessage')

module.exports.error = (err) => {
    if (err instanceof Array)
      return {
        errors: err.filter((errInstance) => {
          return {
            timestamp:errInstance.timestamp||null,
            status:errInstance.status,
            statusCode: errInstance.statusCode,
            type: errInstance.name ,
    
          };
        }),
      };
    else
      return {
        errors: [
          {
            timestamp:err.timestamp ||null,
            status:err.status,
            statusCode: err.statusCode ,
            type: err.name,
          },
        ],
      };
  };
  