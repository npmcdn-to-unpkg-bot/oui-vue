<template>
  <div class="page-spinner">
    <div class="page-title">Spinner</div>

    <o-cell title="snake">
      <o-spinner color="#f35438" type="snake"></o-spinner>
    </o-cell>

    <o-cell title="double-bounce">
      <o-spinner color="#f35438" type="double-bounce"></o-spinner>
    </o-cell>

    <o-cell title="triple-bounce">
      <o-spinner color="#f35438" type="triple-bounce"></o-spinner>
    </o-cell>

    <o-cell title="fading-circle">
      <o-spinner color="#f35438" type="fading-circle"></o-spinner>
    </o-cell>
  </div>
</template>

<script>
export default {
  name: 'page-spinner',

  data() {
    return {

    };
  }
};
</script>

<style lang="css">
  @component-namespace page {
    @component spinner {
      .mint-cell {
        min-height: 50px;
      }
    }
  }
</style>