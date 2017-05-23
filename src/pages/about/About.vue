<style>
body {
    background: red;
}
.about {
    background: blue;
}
</style>
<template>
    <div class="about">
        <router-link to="/demo">Go to demo</router-link>
    </div>
</template>
<script type="text/javascript">
export default {
    created() {
        console.log(this.$router.currentRoute.path);
        console.log(`about has created`);
    },
    mounted() {
        console.log(`about has mounted`);
    }
};
</script>
