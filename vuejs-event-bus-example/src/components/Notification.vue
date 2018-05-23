<template>
    <section v-if="message != ''">
        <strong>Opps, </strong>
        <span v-text="message"/>
    </section>
</template>

<script>
export default{
    name: 'lv-notification',
    props: ['name'],
    data: () => ({
        message: ''
    }),
    mounted() {
        this.$bus.$on('notify', _m => {
            this.message = _m
            setTimeout(() => this.message = '', 1500)
        })
    }
}
</script>
