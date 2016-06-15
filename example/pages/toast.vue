<template>
  <div class="page-toast">
    <h1 class="page-title">Toast</h1>
    <div class="page-toast-wrapper">
      <o-button @click="openToast" size="large">点击弹出 Toast</o-button>
      <o-button @click="openToastWithIcon" size="large">点击弹出带有 icon 的 Toast</o-button>
      <o-button @click="openBottomToast" size="large">自定义 Toast 位置</o-button>
    </div>
  </div>
</template>

<style>
  @component-namespace page {
    @component toast {
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
  import 'src/assets/font/iconfont.css';
  import { Toast } from 'src/index';

  export default {
    methods: {
      openToast() {
        Toast('提示信息');
      },

      openToastWithIcon() {
        Toast({
          message: '操作成功',
          iconClass: 'mintui mintui-success'
        });
      },

      openBottomToast() {
        Toast({
          message: '提示信息',
          position: 'bottom'
        });
      }
    }
  };
</script>
