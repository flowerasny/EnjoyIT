<template>
  <div class="card" @click.stop="showPopup">
    <popup-contribute v-model="popupContributeModel"></popup-contribute>
    <popup-show-details v-model="popupShowDetailsModel"></popup-show-details>
    <div v-bind:class="[statusBarClass, statusClass]"></div>
    <span class="cardTitle">{{project.title}}</span>
    <div class="rateContainer" v-on:click="increment">
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
import Service from "@/helpers/service";
import PopupContribute from "./PopupContribute";
import PopupShowDetails from "./PopupShowDetails";

export default {
  components: { PopupContribute, PopupShowDetails },
  props: {
    data: null
  },
  data() {
    return {
      project: this.data,
      statusClass: {},
      statusBarClass: "statusBar",
      cardButtonClass: "cardButton",
      popupContributeModel: {
        shouldShow: false,
        data: this.data
      },
      popupShowDetailsModel: {
        shouldShow: false,
        data: this.data
      }
    };
  },
  methods: {
    increment: async function(event) {
      event.stopPropagation()
      var obj = {
        id: this.project.id,
        title: this.project.title,
        orginator: this.project.orginator,
        description: this.project.description,
        githubPage: this.project.githubPage,
        solutionPage: this.project.solutionPage,
        status: this.project.status,
        rate: (this.project.rate += 1)
      };
      await Service.edit(this.project.id, obj).then();
      this.$parent.projectStateChanged();
    },
    showPopup: function(event) {
      if (this.project.status === 1) {
        this.popupContributeModel.shouldShow = true;
      } else if (this.project.status === 2) {
        this.popupShowDetailsModel.shouldShow = true;
      } else if (this.project.status === 3) {
        window.open(this.project.solutionPage)
      }
    },
    projectStateChanged: function(){
      this.$parent.projectStateChanged()
    }
  },
  mounted() {
    if (this.project.status === 3) this.statusClass = "statusDone";
    else if (this.project.status === 2) this.statusClass = "statusInProgress";
    else if (this.project.status === 1) this.statusClass = "statusTodo";
  }
};
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  background: #ffffff;
  box-shadow: 5px 10px 20px 0 rgba(0, 0, 0, 0.5);
  padding-left: 16px;
  padding-right: 12x;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-top: 20px;
  width: 350px;
  border-radius: 8px;
}

.card:hover {
  background: rgba(0,191,255, 0.1);
  transition-delay:0.1s;
  cursor: pointer;
}

.cardTitle {
  font-size: 18px;
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
  font-size: 14px;
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