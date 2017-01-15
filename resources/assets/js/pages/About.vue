<template>
<div class="about-block full-height mr-top">
    <div class="my-photo">
        <img src="../assets/xDF5jt7SBqE.jpg" alt="my photo" width="280px" class="img-circle img-thumbnail pull-left">
    </div>
    <blockquote><font color="#000088">$about</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;name&nbsp;<font color="#339933">=&gt;</font>&nbsp;<font color="#0000ff">'Меня&nbsp;зовут&nbsp;Дмитрий'</font><font color="#339933">,</font><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;age&nbsp;<font color="#339933">=&gt;</font>&nbsp;<font color="#0000ff">'мне&nbsp;29&nbsp;лет'</font><font color="#339933">,</font><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;i_am&nbsp;<font color="#339933">=&gt;</font>&nbsp;<font color="#0000ff">'я&nbsp;веб-разработчик.'</font><br/>
        <font color="#009900">&#93;</font><font color="#339933">;</font></blockquote>
        <p class="text">

                Моё любимое занятие, это писать код, постоянно cсовершенствую профессиональные навыки. <br>
            Пишу я не быстро, но тестирую сразу, по этому практически без ошибок.
            Не работаю с NoSQL базами, но неплохо строю схемы и логику на SQL.
            Вполне приемлемо пишу логику и frontend`а.
            Знаю Linux, как пользователь
            Знаком с принципами SEO, также умею эффективно использовать яндекс Директ. <br>
               <b> Ищу удаленную работу backend/fullstack на Yii2. Laravel. </b>

        </p>

</div>
</template>

<script>

    export default {}
</script>
<style>

    .mr-top{
        margin-top: 70px;
    }
    .my-photo img {
        shape-outside: circle(50%);
        margin-right: 5em;
    }
    .about-block {
        font-family: 'Lato', sans-serif;
    }

    blockquote{
        border: none;
    }

    .text{
        font-size: 16px;
    }


</style>