<template>
    <section>
        <button @click="showMessage('helo ganda')">
            Sign Invalid!
        </button>
        <button @click="showMessage('helo pogi')">
           User Invalid!
        </button>
    </section>
</template>

<script>

   
	export default {
	   
	    methods: {
	        
            showMessage(myMessage) {
	           this.$bus.$emit('notify', myMessage);
	        }
	    }
	}


</script>
