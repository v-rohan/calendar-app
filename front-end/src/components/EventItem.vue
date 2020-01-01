<template>
  <div class="event-item" >
    <p>
      {{event.title}}
      <button @click="$emit('del-event', event._id)" class="del">DELETE</button>
      </p>
  </div>
</template>

<script>
export default {
  name: "EventItem",
  props: ["event"],
  methods: {
    
  }
}
</script>

<style scoped>
  .event-item{
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }

  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>

