<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" required placeholder="Display name" v-model="displayName">
        <input type="email" required placeholder="Email" v-model="email">
        <input type="password" required placeholder="Password" v-model="password">
        <div class="error">
            {{error}}
        </div>
        <button>Signup</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '@/composables/useSignup'

    export default {
        setup() {
            const {error, signup} = useSignup()

            //refs
            const displayName = ref('')
            const email = ref('')
            const password = ref('')

            const handleSubmit = async () => {
                await signup(email.value, password.value, displayName.value)
            }

            return { displayName, email, password, handleSubmit, error }
        }
    }
</script>

<style lang="scss" scoped>

</style>