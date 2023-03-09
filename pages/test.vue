<script setup lang="ts">
const { status, data, signOut, signIn } = useSession()
definePageMeta({ auth: false })


const login = ()=>{
    signIn('credentials', { username: 'test', password: 'hunter2' })
}

</script>

<template>
    <div>
        <p>{{ status }}</p>
        <button @click="login"> login</button>
    </div>
</template>