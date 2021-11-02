require('dotenv').config();

const URI = 'mongodb+srv://fccmongodbmongoose.zdwya.mongodb.net/fccMongodbMongoose',
mongoose = require('mongoose'),
{ Schema, model } = mongoose;

// task 1 create new schema for
// - Person Prototype -
// --------------------
// name : string [required]
// age :  number
// favoriteFoods : array of strings (*)
const personSchema = new Schema({
  name:  {
    type: String, unique: false, required: true
  }, // String is shorthand for {type: String}
  age: Number,
  funny: Boolean,
  favoriteFoods: [String],
  alive: Boolean
});

//create a model called Person from the personSchema
//convert our blogSchema into a Model we can work with i.e. pass it into mongoose.model(modelName, schema):
const Person = model('Person', personSchema);

const createAndSavePerson = (done) => {
  done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};
//////////////////////////////////////////////////////////////////////////
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
///////////////////////////////////////////////////////////////////////////

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
