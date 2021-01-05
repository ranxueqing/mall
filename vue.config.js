const path = require('path')
// const { config } = require('process')
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports ={
    // configureWebpack:{
    //     resolve:{
    //         alias:{
    //             '@':'src',
    //             'assets':'@/assets',
    //             'common':'@/common',
    //             'components':'@components',
    //             'network':'@/network',
    //             'views':'@views'
    //         }

    //     }
    // }
    chainWebpack:config=>{
        config.resolve.alias
        .set('@',resolve('src'))
        .set('assets','src/assets')
        .set('common',resolve('src/common'))
        .set('network',resolve('src/network'))
        .set('components',resolve('src/components'))
        .set('views',resolve('src/views'))
    },
    
}