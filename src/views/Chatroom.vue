<template>
    <div class="container">
        <Navbar />
        <NewChatForm />
        <ChatWindow />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import NewChatForm from '@/components/NewChatForm.vue'
import ChatWindow from '@/components/ChatWindow.vue'
import getUser from '@/composables/getUser'
import {watch} from 'vue'
import { useRouter } from 'vue-router'

    export default {
        components: { Navbar, NewChatForm, ChatWindow },
        setup() {
            const {user} = getUser()
            const router = useRouter()

            watch(user, () => {
                if (!user.value) {
                    router.push({ name: 'Welcome'})
                }
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>