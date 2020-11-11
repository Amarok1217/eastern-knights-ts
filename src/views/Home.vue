<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    />
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import { getFigureList } from '@/requset/figure';
@Component({
  components: {},
})
export default class Home extends Vue {
  @Provide() public baseString: string = 'test';
  private mounted() {
    const params: object = {
      wave: 'all',
      race: 'all',
      role: 'all',
      faction: 'all',
      pageSize: 10,
      pageNo: 1,
    };
    getFigureList(params).then((res: object) => {});
  }
}
</script>
