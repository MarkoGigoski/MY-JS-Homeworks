console.log("HOMEWORK 2");

console.log('EXERCISE - #1')
console.log(`Decription: Using prompt() display a dialog box that prompts the visitor for input. Will return null on 'Cancel' or the value provided on 'Ok' `);
console.log(`Action: Ask the user how much money he has, and depending on the value, suggest to him what he should do `);

//Start
let fridayCash = prompt("How much money do you have on you, for the evening Sir/Mis ?")
let fridayCash2 = parseFloat(fridayCash);
console.log(fridayCash2 || 0);

if(fridayCash >= 50){
    alert("You should go out to a dinner and a movie.")
}
else if(fridayCash >= 35){
    alert("You should go out to a fine meal.")
}
else if(fridayCash >= 12){
    alert("You should go see a movie. ")
}
else{
    alert("Looks like you'll be watching TV")
}
//End

console.log('EXERCISE - #2');
console.log(
    `Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in,
    Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:
    0 - Rat, 1 - Ox, 2 - Tiger, 3 - Rabbit, 4 - Dragon, 5 - Snake, 6 - Horse, 7 - Goat, 8 - Monkey, 9 - Rooster, 10 - Dog, 11 - Pig`
)

//Start
let yearBorn = prompt("What year are you born in? ");
let zodiacYear = ((yearBorn - 4) % 12);
let finalZodiac = parseFloat(zodiacYear);

if(zodiacYear === 0){
    alert(`You are a RAT
    Personality: quick-witted, resourceful and smart.`)
}
else if(zodiacYear === 1 ){
    alert(`You are an OX
        Personality: diligent, dependable and strong.`)
}
else if(zodiacYear === 2){
    alert("You are a TIGER"
    `Personality: brave, confident and unpredictable.`)
}
else if(zodiacYear === 3){
    alert(`You are a RABBIT
    Personality: intelectual, ambitious and hard-working.`)
}
else if(zodiacYear === 4){
    alert(`You are a DRAGON
    Personality: introverted, eazy-going and vigourus.`)
}
else if(zodiacYear === 5){
    alert(`You are a SNAKE
    Personality: calm, determined and corageous.`)
}
else if(zodiacYear === 6){
    alert(`You are a HORSE
    Personality: sentimental, creative and reliable.`)
}
else if(zodiacYear === 7){
    alert(`You are a GOAT
    Personality: gentle, righteous and honest.`)
}
else if(zodiacYear === 8){
    alert(`You are a MONKEY
    Personality: compassionate, stubborn and confident.`)
}
else if(zodiacYear === 9){
    alert(`You are a ROOSTER
    Personality: energetic, generous and unstable.`)
}
else if(zodiacYear === 10){
    alert(`You are a DOG
    Personality: patient, communicative and serious.`)
}
else{
    alert("RESTART APP")
}
console.log(`When you are born in: ${yearBorn} that makes you: ${zodiacYear} in the Chinese Zodiac!`);
//End
