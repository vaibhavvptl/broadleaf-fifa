const getAllevents=require('./getAllEvent')

module.exports={
    '/events':{
        ...getAllevents
    }
}