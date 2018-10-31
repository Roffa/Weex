<template>
    <div class="wrapper">
      <router-view/>
    </div>
</template>

<script>
    
    export default {
        
        data () {
            return {

            }
        },
        
        created: function() {   
            this.scbaseUrl = '/api'
        },

        methods: {

        },
    }

</script>

<style scoped>

 
</style>
