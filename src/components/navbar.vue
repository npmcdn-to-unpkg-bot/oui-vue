<template>
  <div class="mint-navbar" :class="{ 'is-fixed': fixed }">
    <slot></slot>
  </div>
</template>

<script>
/**
 * o-navbar
 * @module components/navbar
 * @desc 顶部 tab，依赖 tab-item
 *
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} selected - 返回 item component 传入的 value
 *
 * @example
 * <o-navbar :selected.sync="selected">
 *   <o-tab-item value="订单">
 *     <span slot="label">订单</span>
 *   </o-tab-item>
 * </o-navbar>
 *
 * <o-navbar :selected.sync="selected" fixed>
 *   <o-tab-item :value="['传入数组', '也是可以的']">
 *     <span slot="label">订单</span>
 *   </o-tab-item>
 * </o-navbar>
 *
 */
export default {
  name: 'o-navbar',

  props: {
    fixed: Boolean,
    selected: ''
  }
};
</script>

<style lang="css">
  @import "../style/var.css";

  @component-namespace mint {
    @component navbar {
      background-color: $color-white;
      display: flex;
      text-align: center;

      @when fixed {
        position: fixed 0 0 * 0;
        z-index: $z-index-normal;
      }

      .mint-tab-item {
        padding: 17px 0;
        font-size: 15px;

        &:last-child {
          border-right: 0;
        }

        &.is-selected {
          border-bottom: 3px solid $color-primary;
          color: $color-primary;
          margin-bottom: -3px;
        }
      }
    }
  }
</style>
