<template>
  <div class="page-navbar">
    <div class="page-title">Navbar</div>
    <o-navbar class="page-part" :selected.sync="selected">
      <o-tab-item id="1">选项一</o-tab-item>
      <o-tab-item id="2">选项二</o-tab-item>
      <o-tab-item id="3">选项三</o-tab-item>
    </o-navbar>

    <div>
      <o-cell class="page-part" title="当前选中">{{ selected }}</o-cell>
    </div>

    <o-tab-container :active.sync="selected">
      <o-tab-container-item id="1">
        <o-cell v-for="n in 10" :title="'内容 ' + n"></o-cell>
      </o-tab-container-item>
      <o-tab-container-item id="2">
        <o-cell v-for="n in 4" :title="'测试 ' + n"></o-cell>
      </o-tab-container-item>
      <o-tab-container-item id="3">
        <o-cell v-for="n in 6" :title="'选项 ' + n"></o-cell>
      </o-tab-container-item>
    </o-tab-container>
  </div>
</template>

<script>
export default {
  name: 'page-navbar',

  data() {
    return {
      selected: ''
    };
  }
};
</script>
