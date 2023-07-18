<script setup>
import {useUserStore} from "./store/user.js";
import {computed} from "vue";

const userStore = useUserStore()

const login = computed(() => userStore.userLogin)

function test() {
    userStore.auth('post', 'Nikitos1234', '1234')
}
</script>

<template>
    <RouterView/>
    <span v-if="userStore.isAuth">{{ login }}</span>
    <button @click="test">Test</button>
</template>

<style scoped>
</style>
