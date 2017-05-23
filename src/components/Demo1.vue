<template id="">
    <div>
        <button v-on:click='fn'>demo1</button>
        <router-link to="/about">Go to about</router-link>
    </div>
</template>
<script type="text/javascript">
export default {
    methods: {
        fn() {
            console.log(2);
            this.$emit('fn');
        }
    }
};
</script>
