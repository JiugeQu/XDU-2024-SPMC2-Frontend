<template>
<div class="group_1 page">
  <div class="group_2">
      <div class="group_3">
        <img
            class="image_1"
            src="/public/image/s1.png"
          />
          <img
            class="image_2"
            src="/public/image/s2.png"
          />
      </div>
      <img 
        class="image_3" 
        src="/public/image/s14.png"
      />
  </div>

</div>
</template>
    
<script> 
</script>
    
<style scoped lang="css">
html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
}
body * {
  box-sizing: border-box;
  flex-shrink: 0;
}
.group_1{
  display: flex;
  flex-direction: column;
}
.group_2{
  display: flex;
  flex-direction: row;
}
.group_3{
  display: flex;
  flex-direction: row;
}
.image_1{
  width: 60.15px;
  height: 46px;
}
.image_2{
  width: 121px;
  height: 35px;
  margin-top: 11px;
  margin-left:54.85px ;
}
.image_3{
  width: 273px;
  height: 37px;
  margin-left:300px;
  margin-top:11px;
}
.page{
  background-color:rgb(235, 235, 235);
}
</style>
    
    