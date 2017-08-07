<template>
  <div class="user">
    <h3>{{ selectedUser[0].name }}</h3>
    <h4>@{{ selectedUser[0].username }}</h4>
    <p>Email : {{ selectedUser[0].email }}</p>
    <p><nuxt-link to="/">List of users</nuxt-link></p>
  </div>
</template>

<script>

export default {
  name: 'somename',
  computed: {
    selectedUser() {
      var self = this
      return this.$store.state.stateusers.filter(function(user) {
        return user.id == self.$route.params.id
      })
    }
  }
}
</script>

<style scoped>
.user {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>