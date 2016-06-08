<template>
  <div class="page-badge">
    <div class="page-title">Badge</div>

    <div class="page-badge-container">
      <div class="page-part">
        <o-badge type="primary" size="large">30</o-badge>
        <o-badge type="error" size="large">10</o-badge>
        <o-badge type="success" size="large">10</o-badge>
        <o-badge type="warning" size="large">10</o-badge>
      </div>

      <div class="page-part">
        <o-badge type="primary">30</o-badge>
        <o-badge type="error">10</o-badge>
        <o-badge type="success">10</o-badge>
        <o-badge type="warning">10</o-badge>
      </div>

      <div class="page-part">
        <o-badge type="primary" size="small">30</o-badge>
        <o-badge type="error" size="small">10</o-badge>
        <o-badge type="success" size="small">10</o-badge>
        <o-badge type="warning" size="small">10</o-badge>
      </div>

      <div class="page-part">
        <o-badge size="small" color="#888">自定义颜色</o-badge>
      </div>
    </div>

    <div class="page-part">
      <o-cell title="徽章">
        <span style="margin-right: 5px;">未读消息</span>
        <o-badge type="error" size="small">10</o-badge>
      </o-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-badge'
};
</script>

<style lang="css">
  .page-badge-container {
    padding: 0 10px;
  }
</style>
