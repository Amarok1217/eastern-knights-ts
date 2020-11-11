<template>
  <div class="mobileHome">

    <router-view />
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
    >
    </cube-tab-bar>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
export default class MobileHome extends Vue {
  @Provide() private test: string = 'testss';
  @Provide() private selectedLabelDefault: string = 'wiki';
  @Provide() private tabs: object[] = [
    {
      label: 'Home',
      icon: 'cubeic-home',
    },
    {
      label: 'Like',
      icon: 'cubeic-like',
    },
    {
      label: 'Vip',
      icon: 'cubeic-vip',
    },
    {
      label: 'Me',
      icon: 'cubeic-person',
    },
  ];
  private clickHandler(label: string): void {
    console.log(label);
  }
  private changeHandler(): void {}
}
</script>
<style lang="scss" scoped>
@import './index';
</style>