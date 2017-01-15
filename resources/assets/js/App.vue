<template>
    <div id="app">
        <nav-bar></nav-bar>
        <div class="container">
            <div class="row">
                <!-- компонент, соответствующий пути, отобразится здесь -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from './components/NavBar.vue';

    export default{
        data(){
            return {}
        },
        components: {
            'nav-bar': NavBar
        }
    }
</script>


