<template>
  <div class="card">
    <div v-bind:class="[statusBarClass, statusClass]"></div>
    <span class="cardTitle">{{project.title}}</span>
    <div class="rateContainer">
      <img src="../assets/ic_like.png" class="rateImage" />
      <span class="ratesCounter">{{project.rate}}</span>
    </div>
    <div v-bind:class="[cardButtonClass,statusClass]">
      <span v-if="project.status === 3" class="cardButtonText">Open</span>
      <span v-else-if="project.status === 2" class="cardButtonText">Show details</span>
      <span v-else-if="project.status === 1" class="cardButtonText">Contribute</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    status: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    rate: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      project: {},
      statusClass: {},
      statusBarClass: "statusBar",
      cardButtonClass: "cardButton"
    };
  },
  mounted() {
    this.project = {
      status: this.status,
      title: this.title,
      rate: this.rate
    };
    if (this.status === 3) {
      this.statusClass = "statusDone";
    } else if (this.status === 2) {
      this.statusClass = "statusInProgress";
    } else if (this.status === 1) {
      this.statusClass = "statusTodo";
    }
  }
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
  padding-top: 8px;
  padding-right: 65px;
  padding-bottom: 40px;
}

.ratesCounter {
  margin-left: 4px;
  font-size: 16px;
  color: #999999;
}

.rateContainer {
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 10px;
  margin-right: 12px;
}

.rateImage {
  height: 20px;
  width: 20px;
}

.statusBar {
  max-width: 4px;
  min-width: 4px;
  max-height: 100%;
  border-radius: 45px;
}

.cardButton {
  flex-direction: column;
  border-radius: 16px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 2px;
  margin-right: 8px;
  margin-bottom: 12px;
  position: absolute;
  right: 0;
  bottom: 0;
}

.cardButtonText {
  color: #ffffff;
  font-size: 12px;
}

.statusDone {
  background: #6ec95f;
}

.statusTodo {
  background: #f1cb6a;
}

.statusInProgress {
  background: #7eb2ff;
}
</style>