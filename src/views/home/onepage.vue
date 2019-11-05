<template>
    <div class="onepage">
      <div class="nav">
          <!-- 三级 -->
        <router-link to="/home/onepage/zhu">
            <div>关注</div>
        </router-link>
        <router-link to="/home/onepage/tui">
            <div>推荐</div>
        </router-link>
        <router-link to="/home/onepage/hot">
            <div>热榜</div>
        </router-link>
      </div>
      <div class="list">
         <router-view></router-view>
      </div>
    </div>
</template>
<script>
export default {
    name:"onepage",
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped>
   .nav{
       width: 100%;
       height: 50px;
       display: flex;
       flex-direction: row;
       justify-content: space-around;
       line-height: 50px;
   }
   a{
       color:#ccc;
       font-size: 20px;
       font-weight: bold;
   }
   .router-link-active{
       color: black;
   }

</style>