<template>
  <div class="page-progress">
    <h1 class="page-title">Progress</h1>
    <o-cell title="默认">
      <o-progress></o-progress>
    </o-cell>
    <o-cell title="设置 value">
      <o-progress :value="20"></o-progress>
    </o-cell>
    <o-cell title="左右文字">
      <o-progress :value="40">
        <div slot="start">0%</div>
        <div slot="end">100%</div>
      </o-progress>
    </o-cell>
    <o-cell title="定义线宽">
      <o-progress :value="60" :bar-height="5"></o-progress>
    </o-cell>
    <div class="page-progress-wrapper">
      <o-button size="large" type="primary" @click="uploadFile">上传文件</o-button>
      <o-progress :value.sync="value" v-if="progressVisible" transition="progress-fade">
        <div slot="end">{{ value }}%</div>
      </o-progress>
    </div>
  </div>
</template>

<style>
  @component-namespace page {
    @component progress {
      .mint-cell-value {
        flex: 2.5;
        position: relative;
        top: -20px;
      }

      .mt-progress {
        width: 100%;
        position: absolute;
        top: 5px;
      }

      @descendent wrapper {
        padding: 0 10px;
        margin-top: 50px;

        .mt-progress {
          position: relative;
        }

        .progress-fade-transition {
          transition: opacity .3s;
        }

        .progress-fade-enter,
        .progress-fade-leave {
          opacity: 0;
        }
      }
    }
  }
</style>

<script type="text/babel">
  import { Toast } from 'src/index';

  export default {
    data() {
      return {
        progressVisible: false,
        value: 0,
        uploading: false,
        timer: null
      };
    },

    watch: {
      value(val) {
        if (val >= 100) {
          this.uploading = false;
          this.progressVisible = false;
          setTimeout(() => Toast({ message: '上传成功', position: 'bottom', duration: 1000 }), 200);
          clearTimeout(this.timer);
        }
      }
    },

    methods: {
      uploadFile() {
        if (!this.uploading) {
          this.value = 0;
          this.progressVisible = true;
          this.uploading = true;
          this.timer = setInterval(() => this.value++, 10);
        }
      }
    }
  };
</script>