<template>
  <div class="page-indicator">
    <h1 class="page-title">Indicator</h1>
    <div class="page-indicator-wrapper">
      <o-button @click="openIndicator" size="large">点击弹出 Indicator</o-button>
      <o-button @click="openIndicatorWithSpinner" size="large">可配置 spinner</o-button>
      <o-button @click="openIndicatorWithText" size="large">点击弹出带有文字的 Indicator</o-button>
    </div>
  </div>
</template>

<style>
  @component-namespace page {
    @component indicator {
      @descendent wrapper {
        padding: 0 20px;
        position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);
        button:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>

<script type="text/babel">
  import { Indicator } from 'src/index';

  export default {
    methods: {
      openIndicator() {
        Indicator.open();
        setTimeout(() => Indicator.close(), 2000);
      },

      openIndicatorWithSpinner() {
        Indicator.open({ spinnerType: 'fading-circle' });
        setTimeout(() => Indicator.close(), 2000);
      },

      openIndicatorWithText() {
        Indicator.open({ spinnerType: 'triple-bounce', text: '加载中...' });
        setTimeout(() => Indicator.close(), 2000);
      }
    },

    beforeDestroy() {
      Indicator.close();
    }
  };
</script>
