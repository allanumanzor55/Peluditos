<template>
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#/">Home</a></li>
                <li><a href="#/users/">Users</a></li>
                <li><a href="#/settings/">Settings</a></li>
                <li><a href="#/settings/profiles/">Profiles</a></li>
                <li><a href="#/login/">Login</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    
    name: 'MyNavbar'
}
</script>

<style scoped>
    .nav-wrapper{
        background-color: orange !important;
    }
</style>
