
let Quotes = [
"Life's too short to not own a dog", 
"Yo", 
"You are a really unlucky person if you aren't me", 
"The Netflickses is a TV App", 
"I am Here, You may now be  happy", 
"What do you want with me, Non- dog?", 
"You are who you are, even if you aren't a dog", 
"All these Humans thinking they are so smart, while we do all the hard work" ,
"Humans are so unhygenic, eating with those metal things",
"How many times do I have to tell you, A credit card is something with money on it",
"You're too lucky, you Humans",
"Your species would've been wiped out thousands of times without us dogs",
"Oh no, not a Cat",
"You think K2 is a high mountain? You should see K9",
"Us dogs have a type of tooth named after us, and what do you have?",
"You treat us like pets, even though you are the pets",
"Aside from cats, Humans are the worst thing that has ever happened to the world"
];
let x = Math.floor(Math.random() * 17);
let y = '\"' + Quotes[x] + '\"'
document.getElementById("Quote").innerHTML = y;
