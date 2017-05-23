<style>
body {
    background: red;
}
.demo {
    background: blue;
}
</style>

<template>
    <div id="demo">
       <p>一些Demo</p>
       <demo1 v-on:fn = 'test'></demo1>
       <demo2></demo2>
    </div>
</template>

<script>
// import Vue   from 'vue';
import demo1 from '../../components/Demo1.vue';
import demo2 from '../../components/Demo2.vue';

export default {
    created() {
        this.$setSEO({
            title: 'demo'
        });
        this.$http.get('/mock/errorCode').then((response) => {
            // success callback
            console.log(response);
        }, (response) => {
            // error callback
            console.log(response);
        });
        console.log(`demo has created`);
    },
    mounted() {
        console.log(`demo has mounted`);
    },
    components: {
        demo1,
        demo2
    },
    methods: {
        test() {
            console.log(3);
        }
    }
};
</script>
