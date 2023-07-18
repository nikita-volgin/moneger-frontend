import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "../plugins/axios.js";

export const useUserStore = defineStore('user', () => {
    const isAuth = ref(false)
    const userLogin = ref('')

    async function auth(type, login, password) {
        if (type === 'get') {
            userLogin.value = await axios[type]('/user', {
                headers: {
                    login,
                    password
                }
            })
        } else {
            userLogin.value = await axios[type]('/user', {
                login,
                password
            })
        }
        isAuth.value = true
    }

    return {isAuth, userLogin, auth}
})