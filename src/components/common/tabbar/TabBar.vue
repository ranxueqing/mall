<template>
   <div id="tabbar">
      <slot></slot>
    </div>
</template>

<script>
export default {
    name:"TabBar",
}
</script>

<style>
#tabbar{
  display: flex;
  background: #f6f6f6;
  font-size: 14px;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0px -3px 10px rgba(100, 100, 100, .1);
}

</style>