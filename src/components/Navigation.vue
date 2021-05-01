<template>
  <nav :style="{ background: background || '#333' }">
    <ul :style="{ background: background || '#333' }" ref="nav">
      <figure class="image-logo" @click="toggleNav(false)">
        <img :src="imagePath" alt="logo" height="40px" width="40px"/>
      </figure>
      <li
          v-for="(link, index) in navLinks"
          :key="index"
          @mouseenter="$event.currentTarget.style.background = hoverBackground || '#999'"
          @mouseleave="$event.currentTarget.style.background = background || '#333'"
          @click="toggleNav(true)"

      >
        <router-link
            :to="link.path"
            :style="{ color: linkColor || '#DDD' }"
        >
          {{ link.text }}
          <i>{{ link.icon }}</i>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: ['navLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath'],
  methods: {
    toggleNav(isLinkClicked) {
      const nav = this.$refs.nav.classList
      nav.contains('active') || isLinkClicked ? nav.remove('active') : nav.add('active')
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  height: 60px;
  width: 100%;
  box-shadow: 2px 2px 2px #CCC;

  ul {
    display: flex;
    height: 100%;
    align-items: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    box-shadow: 2px 2px 2px #CCC;

    figure {
      cursor: pointer;
      margin-right: 10px;
    }

    a {
      text-decoration: none;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }

    i {
      margin-right: 10px;
      font-size: 22px;
    }

    li {
      list-style-type: none;

      a {
        padding: 10px 20px;
      }
    }
  }
}

@media screen and (max-width: 759px) {
  nav {
    height: 0;
    ul {
      position: fixed;
      width: 125px;
      flex-direction: column;
      left: -65px;
      transition: 300ms ease all;
      padding-top: 60px;
      //height: calc(100% - 60px);

      &.active {
        left: 0px;
      }

      figure {
        position: fixed;
        z-index: 1;
        top: 10px;
        left: 2px;
      }

      li {
        width: 100%;

        a {
          padding-left: 0;
          padding-right: 0;
        }
      }

      a {
        flex-direction: row;
        margin-left: 20px;
        justify-content: space-between;
        margin-right: 13px;
      }
    }
  }
}
</style>
