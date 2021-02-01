/*
 * @Author: your name
 * @Date: 2021-01-04 14:44:26
 * @LastEditTime: 2021-01-29 15:26:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\vue.config.js
 */
const path = require('path')
// const { config } = require('process')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
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
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', 'src/assets')
            .set('common', resolve('src/common'))
            .set('network', resolve('src/network'))
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'))

        // config.module
        //     .rule('less')
        //     .test(/\.less$/)
        //     .use('less-loader/loader')
        //     .loader('less-loader/loader')
        //     .end()
            // // 你还可以再添加一个 loader
            // .use('other-loader')
            // .loader('other-loader')
            // .end()
    },


}