<template>
    <div class="main-block">
        <div class="position-ref full-height">
            <div class="content">
                <div class="title">
                    <span>Krivoshein Dmitry</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        data(){
            return {}
        }
    }
</script>
<style>
    html, body {
        background-color: #fff;
        color: #636b6f;
        font-family: 'Raleway', sans-serif;
        font-weight: 100;
        height: 100vh;
        margin: 0;
    }

    .main-block {
        background: url("../assets/MRacgGlSt9k.jpg") no-repeat;
        background-position: bottom center;
        background-size: 40%;
        position: relative;
        display: block;
        margin: 0 auto;
    }
    /* Small devices (tablets, 768px and up) */
    @media (max-width: 768px) {
        .main-block{
            background-size: 50%;
        }
    }
    @media (max-width: 420px) {
        .main-block{
            background-size: 90%;
        }
    }


    .full-height {
        height: 100vh;
    }

    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .position-ref {
        position: relative;
    }

    .content {
        text-align: center;
    }

    .title {
        position: absolute;
        top: 40px;
        display: block;
        width: 100%;
        margin: 10px auto;
        font-size: 74px;
        color: #636b6f;
    }

    .links > a {
        color: #636b6f;
        padding: 0 25px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }


</style>