const getAllVenues=require('./getAllVenues')

module.exports={
    '/venues':{
        ...getAllVenues
    }
}