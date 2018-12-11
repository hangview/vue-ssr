<template>
    <div>
        <p>home</p>
        <p>{{home}}</p>
    </div>
</template>

<script>
  export default {
    asyncData(store) {
      return store.dispatch('getHome');
    },
    computed: {
      home() {
        return this.$store.state.home;
      },
    },
  };
</script>
<style></style>
