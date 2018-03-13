<template>
  <div class="header">
    <div class="navbar is-transparent">
      <div class="navbar-brand">
        <router-link :to="'/'"
          class="navbar-item">
            <img
              src="@/assets/images/logo.png"
              alt="Demo app"
            >
        </router-link>
        <div
          class="navbar-burger burger"
          :class="{ 'is-active' : isActive }"
          @click="isActive = !isActive"
          data-target="navbarMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarMenu" class="navbar-menu" :class="{'is-active': isActive}">
        <div class="navbar-start">
          <router-link :to="'dashboard'"
            class="navbar-item">
            Dashboard
          </router-link>
          <router-link :to="'dashboard'"
            class="navbar-item">
            About
          </router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <router-link :to="'/dashboard'"
              class="navbar-item">
              Docs
            </router-link>
            <div class="navbar-dropdown is-boxed">
              <router-link :to="'/dashboard'"
                class="navbar-item">
                Overview
              </router-link>
              <hr class="navbar-divider">
              <router-link :to="'/dashboard'"
                class="navbar-item">
                Elements
              </router-link>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <router-link :to="'/dashboard'"
              class="navbar-item">
              Download
            </router-link>
            <div class="navbar-dropdown is-boxed">
              <router-link :to="'/dashboard'"
                class="navbar-item">
                Mac v1.0.0
              </router-link>
              <hr class="navbar-divider">
              <router-link :to="'/dashboard'"
                class="navbar-item">
                Linux v1.0.0
              </router-link>
            </div>
          </div>
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <button class="button is-primary is-small" @click="auth.logout()">
                  <span class="icon">
                    <i class="fa fa-sign-in" />
                  </span>
                  <span>Logout</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['auth', 'authenticated'],
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
$navbar-dropdown-offset: -45px;
$navbar-item-img-max-height: 10em;

.header {
  max-width: 900px;
  margin: auto;
  padding: 30px 0;
  position: relative;
}

.navbar-item,
.navbar-link {
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
}

a.navbar-item:hover,
a.navbar-item.is-active,
a.navbar-link:hover,
a.navbar-link.is-active {
  background-color: white;
  color: #3273dc;
}
</style>
