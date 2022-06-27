function dareMe() {
const dare = [
    'Punch someone in the face', 'Use your body as a mop', 'Drink chili sauce',
    'crawl up the stairs 20 times', 'duck walk 10 laps', 
    'Show the most embarrassing photo on your phone', 'Give a foot massage to the person on your right',
    'Eat a banana without using your hands', 'Do 100 squats', 'Keep your eyes closed until it’s your go again',
    'Eat a raw onion', 'Keep three ice cubes in your mouth until they melt', 'Empty out your wallet/purse and show everyone what’s inside',
    'Try to put your whole fist in your mouth', 'Try to lick your elbow', 'Let someone shave part of your body', 
    'put on makeup', 'Open a bag of snacks or candy using only your mouth, no hands or feet', 'Go to the bathroom, take off your underwear and put it on your head. Wear it on your head for the rest of the game',
    'Sit in a spinning chair and have the group spin you for 30 seconds', 'Let two people give you a wet willy at the same time',
    'Lick the floor', 'Do pushups until you can’t do any more, wait 5 seconds, and then do one more', 'Get slapped on the face by the person of your choosing'
];

const para = document.querySelector('p');
para.innerHTML = dare[Math.floor(Math.random() * dare.length )];
}
