<template>
  <div class="nav">
    <o-button size="small" @click.prevent="active = 'tab-container1'">tab 1</o-button>
    <o-button size="small" @click.prevent="active = 'tab-container2'">tab 2</o-button>
    <o-button size="small" @click.prevent="active = 'tab-container3'">tab 3</o-button>
  </div>
  <div class="page-tab-container">
    <o-tab-container style="page-tabbar-tab-container" :active="active">
      <o-tab-container-item id="tab-container1">
        <o-cell v-for="n in 10" title="tab-container 1"></o-cell>
      </o-tab-container-item>
      <o-tab-container-item id="tab-container2">
        <o-cell v-for="n in 5" title="tab-container 2"></o-cell>
      </o-tab-container-item>
      <o-tab-container-item id="tab-container3">
        <o-cell v-for="n in 7" title="tab-container 3"></o-cell>
      </o-tab-container-item>
    </o-tab-container>
  </div>
</template>

<script>
export default {
  name: 'page-tab-container',
  data() {
    return {
      active: 'tab-container1'
    };
  }
};
</script>

<style lang="css" scoped>
  .item {
    display: inline-block;
  }

  .nav {
    padding: 10px;
  }

  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
</style>
