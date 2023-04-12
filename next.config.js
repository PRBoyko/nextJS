
const {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = (phase)=>{

    if(phase===PHASE_DEVELOPMENT_SERVER){
        return{
            env:{
                mongodb_username: 'PRBoyko',
                mongodb_password: 'aV4ft3F5IDbJjZFp',
                mongodb_cluster: 'cluster0',
                mongodb_database: 'blog-dev'
            }
        }
    }

    return{
        env:{
            mongodb_username: 'PRBoyko',
            mongodb_password: 'aV4ft3F5IDbJjZFp',
            mongodb_cluster: 'cluster0',
            mongodb_database: 'blog'
        }
    }


}