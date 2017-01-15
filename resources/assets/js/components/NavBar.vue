<template>
    <div class="navbar-wrapper">
        <div class="container-fluid">
            <nav class="navbar navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="/">Laravel And Vue.js App!</a>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">

                        <ul class="nav navbar-nav">
                            <li>
                                <router-link to="/" exact>Home</router-link>
                            </li>
                            <li>
                                <router-link to="/about">About</router-link>
                            </li>
                            <li>
                                <router-link to="/resume">Resume</router-link>
                            </li>
                            <li class=" dropdown">
                                <a href="#" class="dropdown-toggle " data-toggle="dropdown" role="button"
                                   aria-haspopup="true" aria-expanded="false">Tests <span
                                        class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><router-link to="/crud">Vue.js CRUD</router-link></li>
                                </ul>
                            </li>

                         <!--   <li class=" dropdown"><a href="#" class="dropdown-toggle " data-toggle="dropdown"
                                                     role="button" aria-haspopup="true" aria-expanded="false">Managers
                                <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">View Managers</a></li>
                                    <li><a href="#">Add New</a></li>
                                </ul>
                            </li>
                            <li class=" dropdown"><a href="#" class="dropdown-toggle active" data-toggle="dropdown"
                                                     role="button" aria-haspopup="true" aria-expanded="false">Staff
                                <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">View Staff</a></li>
                                    <li><a href="#">Add New</a></li>
                                    <li><a href="#">Bulk Upload</a></li>
                                </ul>
                            </li>
                            <li class=" down"><a href="#" class="dropdown-toggle active" data-toggle="dropdown"
                                                 role="button" aria-haspopup="true" aria-expanded="false">HR <span
                                    class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Change Time Entry</a></li>
                                    <li><a href="#">Report</a></li>
                                </ul>
                            </li>-->
                        </ul>


                        <ul class="nav navbar-nav pull-right">
                            <li class=" dropdown"><a href="#" class="dropdown-toggle active" data-toggle="dropdown"
                                                     role="button" aria-haspopup="true" aria-expanded="false">Signed in
                                as <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Change Password</a></li>
                                    <li><a href="#">My Profile</a></li>
                                </ul>
                            </li>
                            <li class=""><a href="#">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
    }
</script>
<style>
    .navbar, .dropdown-menu {
        background: #8999A8;
        border: none;
    }

    .nav > li > a,
    .dropdown-menu > li > a:focus,
    .dropdown-menu > li > a:hover,
    .dropdown-menu > li > a,
    .dropdown-menu > li {
        border-bottom: 3px solid transparent;
    }

    .nav > li > a:focus,
    .nav > li > a:hover,
    .nav .open > a,
    .nav .open > a:focus,
    .nav .open > a:hover,
    .dropdown-menu > li > a:focus,
    .dropdown-menu > li > a:hover {
        border-bottom: 3px solid transparent;
        background: none;
    }

    .navbar a,
    .dropdown-menu > li > a,
    .dropdown-menu > li > a:focus,
    .dropdown-menu > li > a:hover,
    .navbar-toggle {
        color: #fff;
    }

    .dropdown-menu > li:hover{
        border-left: #C4E17F 3px solid !important;
    }

    .dropdown-menu {
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    a.router-link-active{
        border-bottom: #C4E17F 3px solid !important;
    }

    .navbar-toggle .icon-bar {
        color: #fff;
        background: #fff;
    }
</style>
