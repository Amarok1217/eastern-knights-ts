<template>
  <div class="mobileHome">

    <router-view class="routerView" />
    <cube-tab-bar
      class="tabBar"
      v-model="selectedLabel"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
    >
    </cube-tab-bar>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
@Component
export default class MobileHome extends Vue {
  @Provide() private selectedLabel: string = 'home';
  @Provide() private test: string = 'testss';
  @Provide() private tabs: object[] = [
    {
      label: '',
      icon: 'cubeic-home',
      value: 'home',
    },
    {
      label: '',
      icon: 'cubeic-vip',
      value: 'like',
    },
    {
      label: '',
      icon: 'cubeic-picture',
      value: 'vip',
    },
    {
      label: '',
      icon: 'cubeic-person',
      value: 'me',
    },
  ];
  private clickHandler(label: string) {}
  private changeHandler(item: any) {
    console.log(item, this.test, 222);
  }
}
</script>
<style lang="scss" scoped>
@import './index';
</style>
<style lang="scss" >
.mobileHome {
  // .cube-tab {
  //   height: 10vh;
  // }
  // .cubeic-home {
  //   font-size: 1.5rem;
  // }
  .cube-tab {
    font-size: 2.2rem;
  }
}
</style>