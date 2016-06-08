<template>
  <div class="mint-tab-container"><slot></slot></div>
</template>

<script>
/**
 * o-tab-container
 * @desc 面板，搭配 tab-container-item 使用
 * @module components/tab-container
 *
 * @param {number|string} [active] - 当前激活的 tabId
 *
 * @example
 * <o-tab-container :active.sync="selected">
 *   <o-tab-container-item id="1"> 内容A </o-tab-container-item>
 *   <o-tab-container-item id="2"> 内容B </o-tab-container-item>
 *   <o-tab-container-item id="3"> 内容C </o-tab-container-item>
 * </o-tab-container>
 */
export default {
  name: 'o-tab-container',

  props: {
    active: ''
  }
};
</script>
