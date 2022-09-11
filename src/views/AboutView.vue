<template>
  <div class="about">
    <img :src="img" alt=""/>
  </div>
</template>
<script>
  export default {
    data : ()=> ({
      img : require('../assets/img/pickachu.png')
    })
  }
</script>