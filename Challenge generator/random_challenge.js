function randomChallenge() {
const challenges = [
    'Walk 1,000 steps', 'Do 5 Pushups', 'Do 5 Squats', 'Read a book for 5 minutes', 
    'Jog for 10 minutes', 'Do 10 Pushups', 'Do 10 Squats', 'Read a book for 10 minutes', 
    'Walk 5,000 steps', 'Do 15 Pushups', 'Do 15 Squats', 'Read a book for 15 minutes', 
    'Do 10 burpees', 'Do 20 Pushups', 'Do 20 Squats', 'Write for 10 minutes', 
];

const para = document.querySelector('p');
para.innerHTML = challenges[Math.floor(Math.random() * challenges.length )];
}
