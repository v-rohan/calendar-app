let mongoose =  require('mongoose')


const server = 'testcluster-xrkro.mongodb.net'
const database = 'test?retryWrites=true&w=majority'
const user = 'calRohan'
const password = '1234'
mongoose.connect(`mongodb+srv://${user}:${password}@${server}/${database}`)
var Schema = mongoose.Schema;
let EventSchema = new Schema({
    title: String,
    start: String,
    end: String,
    repeat: String,
    categoryId: Number
  });
  
  var Event = mongoose.model("Event", EventSchema);
  module.exports = Event;