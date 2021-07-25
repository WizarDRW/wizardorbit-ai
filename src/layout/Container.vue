<template>
    <app-header></app-header>
    <router-view :key="$route.path"></router-view>
</template>

<script>
import AppHeader from './header/Header.vue'
export default {
    components: {
        AppHeader
    }
}
</script>

<style lang="">

</style>