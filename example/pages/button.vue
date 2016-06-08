g<template>
  <div class="page-button">
    <h1 class="page-title">Button</h1>
    <div class="page-button-group">
      <o-button size="large">default</o-button>
      <o-button size="large" type="primary">primary</o-button>
      <o-button size="large" type="danger">danger</o-button>
    </div>

    <div class="page-button-group">
      <o-button>default</o-button>
      <o-button type="primary">primary</o-button>
      <o-button type="danger">danger</o-button>
    </div>

    <div class="page-button-group">
      <o-button size="small">default</o-button>
      <o-button size="small" type="primary">primary</o-button>
      <o-button size="small" type="danger">danger</o-button>
    </div>

    <div class="page-button-group">
      <o-button disabled size="large">default</o-button>
      <o-button disabled size="large" type="primary">primary</o-button>
      <o-button disabled size="large" type="danger">danger</o-button>
    </div>

    <div class="page-button-group">
      <o-button plain size="large">default</o-button>
      <o-button plain size="large" type="primary">primary</o-button>
      <o-button plain size="large" type="danger">danger</o-button>
    </div>

    <div class="page-button-group">
      <o-button>
        <img src="../assets/100x100.png" height="20" width="20" slot="icon">
        带自定义图标
      </o-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'button',

  data() {
    return {
    };
  }
};
</script>

<style lang="css">
  @component-namespace page {
    @component button {
      padding: 0 15px 15px;

      @descendent group {
        margin-bottom: 15px;

        & > * {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>
