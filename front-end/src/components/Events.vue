<template>
  <div>
    <div v-bind:key="event.id" v-for="event in events">
      <EventItem v-bind:event="event" v-on:del-event="$emit('del-event', event._id)" />
    </div>
  </div>
</template>

<script>
import EventItem from './EventItem.vue';

export default {
  name: "Events",
  components: {
    EventItem
  },
  props: ["events"]
}
</script>

<style scoped>

</style>

