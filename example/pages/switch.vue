<template>
  <div class="page-switch">
    <div class="page-title">Switch</div>
    <div class="page-part page-switch-padding">
      <o-switch :value.sync="value1">
        <label v-text="value1"></label>
      </o-switch>
    </div>

    <div class="page-part page-switch-padding">
      <o-switch :value.sync="value4">
        <label v-text="value4"></label>
      </o-switch>
    </div>

    <o-cell :title="'选项 ' + value2">
      <o-switch :value.sync="value2"></o-switch>
    </o-cell>
    <o-cell :title="'选项 ' + value3">
      <o-switch :value.sync="value3"></o-switch>
    </o-cell>
  </div>
</template>

<script>
export default {
  name: 'page-switch',

  data() {
    return {
      value1: false,
      value2: false,
      value3: true,
      value4: true
    };
  }
};
</script>

<style lang="css">
  @component-namespace page {
    @component switch {
      @descendent padding {
        padding: 0 10px;
      }
    }
  }
</style>
