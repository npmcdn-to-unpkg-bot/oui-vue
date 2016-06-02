<template>
  <div class="weui_tabbar">
    <slot></slot>
  </div>
</template>

<script>
import { parentMixin } from '../../libs/multi-items'

export default {
  mixins: [parentMixin]
}
</script>
