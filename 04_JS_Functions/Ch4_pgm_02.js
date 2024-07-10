// Displaying information from similar objects

var movie1;
var movie2;
var movie3;
var movie4;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};
movie4 = {
  title: " The Shawshank Redemption",
  actors: "Tim Robbins,Morgan Freeman",
  directors: " Frank Darabont"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");
console.log("Movie information for " + movie4.title);
console.log("------------------------------");
console.log("Actors: " + movie4.actors);
console.log("Directors: " + movie4.directors);
console.log("------------------------------");
var event1;
var event2;
var event3;

event1 = {
  name: "Meeting with Bob",
  date: "2024-07-15",
  time: "10:00 AM"
};

event2 = {
  name: "Lunch with Sarah",
  date: "2024-07-16",
  time: "12:30 PM"
};

event3 = {
  name: "Project Deadline",
  date: "2024-07-20",
  time: "11:59 PM"
};

console.log("Event information for " + event1.name);
console.log("------------------------------");
console.log("Date: " + event1.date);
console.log("Time: " + event1.time);
console.log("\n");

console.log("Event information for " + event2.name);
console.log("------------------------------");
console.log("Date: " + event2.date);
console.log("Time: " + event2.time);
console.log("\n");

console.log("Event information for " + event3.name);
console.log("------------------------------");
console.log("Date: " + event3.date);
console.log("Time: " + event3.time);
console.log("\n");


/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */