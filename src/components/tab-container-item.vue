<template>
  <div v-show="id === $parent.active" class="mint-tab-container-item"><slot></slot></div>
</template>

<script>
/**
 * o-tab-container-item
 * @desc 搭配 tab-container 使用
 * @module components/tab-container-item
 *
 * @param {number|string} [id] - 该项的 id
 *
 * @example
 * <o-tab-container :active.sync="selected">
 *   <o-tab-container-item id="1"> 内容A </o-tab-container-item>
 *   <o-tab-container-item id="2"> 内容B </o-tab-container-item>
 *   <o-tab-container-item id="3"> 内容C </o-tab-container-item>
 * </o-tab-container>
 */
export default {
  name: 'o-tab-container-item',

  props: {
    id: ''
  }
};
</script>
