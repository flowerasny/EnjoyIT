<template>
  <div class="card">
    <div class="statusBar"></div>
    <span class="cardTitle">Add new project</span>
    <img class="addNewIcon" src="../assets/ic_plus.png"/>
  </div>
</template>

<script>
export default {
  name: "ProjectCard"
};
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding-left: 16px;
  padding-right: 12x;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-top: 20px;
  width: 350px;
  border-radius: 8px;
}

.cardTitle {
  font-size: 16px;
  color: #333333;
  padding-left: 20px;
  padding-right: 65px;
  align-self: center;
}

.statusBar {
  max-width: 4px;
  min-width: 4px;
  max-height: 100%;
  border-radius: 45px;
  background: #999;
}

.addNewIcon {
  display: flex;
  position: absolute;
  right: 0;
  margin-right: 12px;
  height: 32px;
  width: 32px;
  align-self: center;
}

</style>