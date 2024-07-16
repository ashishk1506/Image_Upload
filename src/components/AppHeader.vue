<template>
    <div class="ui secondary pointing menu">
        <div>
            <a class="item active" href="/">
            Image Storage
        </a>
        </div>
        <div class="item" @click="login">
            <a>Login</a>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name: 'AppHeader',
    methods : mapActions(['login']),
    
}
</script>