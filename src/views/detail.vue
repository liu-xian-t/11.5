<template>
    <div class="detail">
        <h1>{{item.title}}</h1>
        <p>{{item.content}}</p>
        <div class="xin">
           <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiangqu"></use>
          </svg>
        </div>
    </div>
</template>
<script>
import {mapMutations} from "vuex"
export default {
    name:"detail",
    props:{

    },
    components:{

    },
    data(){
        return {
         item:{},
         changeRed:-1
        }
    },
    computed:{

    },
    methods:{
      ...mapMutations(["collect"]),
      change(index){
            this.changeRed = index;
        }

    },
    created(){

    },
    mounted(){
        this.item=this.$route.query
    }
}
</script>
<style scoped>
    .detail{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .xin{
        width: 100%;
        height: 100px;
        position: fixed;
        top:93%
    }
    .icon {
        width:40px;
        height:40px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        margin-left:20px;
    }
</style>  