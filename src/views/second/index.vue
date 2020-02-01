<!--  -->
<template>
  <div>
      <div>
          <button @click="router('first')">first</button>
          <button @click="router('second')">second</button>
      </div>
      <h2>Second</h2>
      <div class="div">
        <div v-for="(item,i) in product" :key="i">
            <span>{{item.name}}</span>
            <span>{{item.price}}</span>
        </div>
      </div>
      
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

//   components: {},

  computed: {
       product() {
          return this.$store.state.products
      }
  },

//   mounted: {},

  methods: {
      router(name){
          if(name == 'first'){
              this.$router.push({
                  path: '/'
              })
          }else if(name == 'second'){
              this.$router.push({
                  path: '/second'
              })
          }
      },
  }
}

</script>
<style lang="css" scope>
.div{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
}
.div div{
    flex: 1;
    background: yellow;
    text-align: center;
    border: 1px solid #fff;
}
div span{
    display: block;
    height: 50%;
}
</style>