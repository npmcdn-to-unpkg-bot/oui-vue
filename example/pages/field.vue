<template>
  <div class="page-field">
    <div class="page-title">Field</div>
    <div class="page-part">
      <o-field label="用户名" placeholder="请输入用户名"></o-field>
      <o-field label="邮箱" placeholder="请输入邮箱" type="email"></o-field>
      <o-field label="密码" placeholder="请输入密码" type="password"></o-field>
      <o-field label="手机号" placeholder="请输入手机号" type="tel"></o-field>
      <o-field label="网站" placeholder="请输入网址" type="url"></o-field>
      <o-field label="数字" placeholder="请输入数字" type="number"></o-field>
      <o-field label="生日" placeholder="请输入生日" type="date"></o-field>
      <o-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></o-field>
    </div>

    <div class="page-part">
      <o-field placeholder="登录邮箱" type="email"></o-field>
      <o-field placeholder="密码" type="password"></o-field>
    </div>

    <div class="page-part">
      <o-field label="邮箱" placeholder="成功状态" state="success"></o-field>
      <o-field label="邮箱" placeholder="失败状态" state="error"></o-field>
      <o-field label="邮箱" placeholder="警告状态" state="warning"></o-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-field'
};
</script>
