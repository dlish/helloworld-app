<template>
  <div>
    <router-view 
      :auth="auth" 
      :authenticated="authenticated">
    </router-view>
  </div>
</template>

<script>
import AuthService from './auth/AuthService'

const auth = new AuthService()

const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'app',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout
  }
};
</script>
