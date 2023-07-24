const basicInfo = require('./basicinfo');
const server=require('./server')
const component=require('./components')
const event=require('./event')
const venue=require('./venue')
const product=require('./product')
module.exports={
    ...basicInfo,
    ...server,
    ...component,

    paths:{
        ...event,
       ...venue,
       ...product,
    },
    security: [{ bearerAuth: [] }],
}