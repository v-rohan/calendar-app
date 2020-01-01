<template>
  <div>
    <form @submit.prevent="addEvent">
      <label>Name:  </label>
      <input type="text" v-model="title" name="title" placeholder="Add Event...">
      <label>Start Date:  </label>
      <input type="date" v-model="startDate" name="startDate">
      <label>End Date:  </label>
      <input type="date" v-model="endDate" name="endDate" >
      <label>Event Frequency  </label>
      <input type="text" v-model="repeat" name="repeat" placeholder="Enter yearly, monthly, never">
      <label>Event Category:  </label>
      <input type="number" v-model="categoryId" name="categoryId" min="1" max="2">
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>

export default {
  name: "AddEvent",
  data() {
    return {
      title: '',
      startDate:'',
      endDate:'',
      repeat:'',
      categoryId: 1

    }
  },
  methods: {
    addEvent() {
      const newEvent = 
        {
        title: this.title,
        start: this.startDate,
        end: this.endDate,
        repeat: this.repeat,
        categoryId: this.categoryId
        }
      // Send up to parent
      this.$emit('add-event', newEvent);

      this.title = '';
      this.startDate ='';
      this.endDate ='';
      this.repeat = '';
      this.categoryId = 1;
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 5px;
  }

  input[type="number"] {
    flex: 10;
    padding: 5px;
  }

  input[type="submit"] {
    flex: 2;
  }
</style>


