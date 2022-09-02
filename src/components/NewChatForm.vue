<template>
    <form>
        <textarea 
            placeholder="Type a message and hit enter to send..."
            v-model="message"
            @keypress.enter.prevent="handleSubmit"
            ></textarea>
            <div class="error">{{error}}</div>
    </form>
</template>

<script>
import getUser from '@/composables/getUser'
import useCollection from '@/composables/useCollection'
import { ref } from 'vue'
import { timestamp } from '@/firebase/configs'

    export default {
        setup() {
            const {user} = getUser()
            const message = ref('')
            const {addDoc, error} = useCollection('messages') 

            const handleSubmit = async () => {
                const chat = {
                    message: message.value,
                    name: user.value.displayName,
                    createdAt: timestamp()
                }
                await addDoc(chat)
                if (!error.value) {
                    message.value = ''
                }
                
            }
            return {message, handleSubmit}
        }
    }
</script>

<style scoped>
form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
</style>