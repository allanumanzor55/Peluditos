<template>
    <div class="menu">
        <MyNavbar />
        <div class="container">
            <div class="row" style="margin-top:30px">
                <a class="btn col s3 offset-s1 orange" href="#/settings/profiles/">
                    Perfiles
                </a>
                <div class="btn col s3 offset-s1 orange">
                    Razas
                </div>
                <div class="btn col s3 offset-s1 orange">
                    Vacunas
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyNavbar from "@/components/navbar";
export default {
    name: "Menu",
    components: {
        MyNavbar,
    },
    data() {
        return {};
    },
};
</script>
