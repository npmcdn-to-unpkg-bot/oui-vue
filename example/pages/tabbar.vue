<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <div class="page-title">Tabbar</div>
      <div>
        <o-cell class="page-part" title="当前选中" :value="selected"></o-cell>
      </div>

      <o-tab-container style="page-tabbar-container" :active.sync="selected">
        <o-tab-container-item id="外卖">
          <o-cell v-for="n in 10" :title="'餐厅 ' + $index"></o-cell>
        </o-tab-container-item>
        <o-tab-container-item id="订单">
          <o-cell v-for="n in 5" :title="'订单 ' + $index"></o-cell>
        </o-tab-container-item>
        <o-tab-container-item id="发现">
          <o-cell v-for="n in 7" :title="'发现 ' + $index"></o-cell>
        </o-tab-container-item>
        <o-tab-container-item id="我的">
          <div class="page-part">
            <o-cell v-for="n in 12" :title="'我的 ' + $index"></o-cell>
          </div>
          <o-button v-link="'/'" style="margin: 0 10px;" type="danger" size="large">退出</o-button>
        </o-tab-container-item>
      </o-tab-container>
    </div>

    <o-tabbar :selected.sync="selected">
      <o-tab-item id="外卖">
        <img slot="icon" src="../assets/100x100.png">
        外卖
      </o-tab-item>
      <o-tab-item id="订单">
        <img slot="icon" src="../assets/100x100.png">
        订单
      </o-tab-item>
      <o-tab-item id="发现">
        <img slot="icon" src="../assets/100x100.png">
        发现
      </o-tab-item>
      <o-tab-item id="我的">
        <img slot="icon" src="../assets/100x100.png">
        我的
      </o-tab-item>
    </o-tabbar>
  </div>
</template>

<script>
export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: '外卖'
    };
  }
};
</script>

<style>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }

  .page-tabbar-container {
    overflow: auto;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
</style>
