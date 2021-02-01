/*
 * @Author: your name
 * @Date: 2021-01-30 13:33:57
 * @LastEditTime: 2021-02-01 12:52:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\common\mixin.js
 */

export const itemListenerMixin = {
    data(){
        return {
            itemImgListener:null
        }
    },
    mounted(){
        let newRefresh = debouce(this.$refs.scroll.refresh,100)
        this.itemImgListener  = ()=>{
            newRefresh()
        }
        this.$bus.$on('itemImgLoad',this.itemImgListener)
    }
}
import BackTop from '@/components/content/backTop/BackTop'
export const backTopMixin = {
    components:{
        BackTop
    },
    data(){
        return {
            isShowBackTop:false
        }
    },
    methods:{
        backTop(){
            this.$refs.scroll.scrollTo(0,0,300)
        }
    }
}