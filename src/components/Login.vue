<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Please login to proceed.</p>
          <div class="box">
            <form>
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="email" placeholder="Your Email" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="password" placeholder="Your Password">
                </div>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
              </div>
              <!-- <a class="button is-block is-info is-large is-fullwidth" @click="auth.login()">Login</a> -->
              <!-- <a class="button is-block is-info is-large is-fullwidth" @click="auth.login()">Login</a> -->
              <router-link :to="'/dashboard'"
                class="button is-block is-info is-large is-fullwidth">
                Login
              </router-link>
            </form>
          </div>
          <p class="has-text-grey">
            <a href="">Sign Up</a> &nbsp;·&nbsp;
            <a href="">Forgot Password</a> &nbsp;·&nbsp;
            <a href="">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'login',
  props: ['auth', 'authenticated']
};
</script>