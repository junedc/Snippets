<template>
    <div id="app">
        <container />
        <hr>
        <lv-notification />
    </div>
</template>

<script>
import container from './components/Container.vue'
import LvNotification from './components/Notification.vue'
export default {
    name: 'app',
    components: { container, LvNotification }
}
</script>
