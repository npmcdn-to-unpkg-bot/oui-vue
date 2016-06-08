<template>
  <div>
    <o-header fixed title="固定在顶部"></o-header>
    <div class="page-header-main">
      <div class="page-title">Header</div>
      <o-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <o-button v-link="'/'" icon="back" slot="left">返回</o-button>
        <o-button icon="more" slot="right"></o-button>
      </o-header>

      <o-header title="多个按钮">
        <div slot="left">
          <o-button v-link="'/'" icon="back">返回</o-button>
          <o-button @click="handleClose">关闭</o-button>
        </div>
        <o-button icon="more" slot="right"></o-button>
      </o-header>

      <o-header title="左侧仅文字">
        <o-button v-link="'/'" slot="left">返回</o-button>
      </o-header>

      <o-header title="右侧仅文字">
        <o-button v-link="'/'" slot="right">分享</o-button>
      </o-header>

      <o-header title="仅图标">
        <o-button v-link="'/'" slot="left" icon="back"></o-button>
        <o-button slot="right" icon="more"></o-button>
      </o-header>
    </div>

  </div>
</template>

<script>
export default {
  name: 'header',

  data() {
    return {

    };
  },

  methods: {
    handleClose() {
      alert('close this page');
    }
  }
};
</script>

<style lang="css">
  @component-namespace page {
    @component header {
      @descendent main {
        margin-top: 50px;
        min-height: 120vh;

        > * {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>
