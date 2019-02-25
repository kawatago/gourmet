<template>
    <div class="sidebar">
        <ul>
            <li v-on:click= "postTest">contents1</li>
            <li>contents2</li>
            <li>contents3</li>
            <li>contents4</li>
            <li>contents5</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true

export default {
    name: 'Sidebar',
    data: () => {
        return {
            err: []
        }
    },
    methods: {
        postTest: function(){
            console.log("test axios ...");
            axios
                .post('/test')
                .then((result) => {
                    console.log(result)
                })
                .catch((err) => {
                    console.log("there are some errors")
                    console.log(err)
                })
        }
    }
}
</script>

<style>

</style>
