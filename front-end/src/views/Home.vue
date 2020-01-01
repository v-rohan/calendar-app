<template>
  <div id="app">
    <calendar
      :eventCategories="eventCategories"
      :events="events"
      ref="calendar"
    />
    <AddEvent v-on:add-event="addEvent" />
    <Events v-bind:events="events" v-on:del-event="deleteEvent" />
  </div>
</template>

<script>
import Events from '../components/Events';
import AddEvent from '../components/AddEvent';
import {Calendar} from 'vue-sweet-calendar'
import 'vue-sweet-calendar/dist/SweetCalendar.css'
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Events,
    AddEvent,
    Calendar
  },
  data() {
    return {eventCategories: [
        {
          id: 1,
          title: 'Personal',
          textColor: 'white',
          backgroundColor: 'Blue'
        },
        {
          id: 2,
          title: 'Company-wide',
          textColor: 'white',
          backgroundColor: 'red'
        }
      ],
      events: []
    }
  },
  methods: {
    goToday() {
      this.$refs.calendar.goToday()
    },
    deleteEvent(_id) {
      axios.delete(`http://localhost:3000/event?Id=${_id}`)
        .then(res => this.events = res.data)
        .catch(err => console.log(err));
    },
    addEvent(newEvent){
      axios.post('http://localhost:3000/event', newEvent)
        .then(res =>{ 
          this.events = res.data})
        .catch(err => {console.log(err)});
    }
  },
  created() {
    axios.get('http://localhost:3000/event')
      .then(res => {
         this.events = res.data});
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }
</style>
