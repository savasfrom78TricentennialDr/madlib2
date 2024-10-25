let adjective1 = prompt("Enter an adjective.");
let creature = prompt("Enter a emotion");
let adjective2 = prompt("Enter a plural noun");
let friend = prompt("Enter the name of a candy");
let adjective3 = prompt("Enter a plural noun.");
let adjective4 = prompt("Enter a noun");




let story = 
`Once upon a Halloween night, a boy named Matt Russo was out trick-or-treating, dressed as a ${adjective1} superhero. His pumpkin-shaped bucket was brimming with ${adjective2} and he was feeling ${creature} As Matt approached a spooky house decorated with ${adjective3}.
 he noticed a group of kids nearby. Suddenly, out of nowhere, a masked figure appeared and shouted, “Give me your candy!” In shock, Matt hesitated, but the robber grabbed his bucket and dashed away. Matt stood there, eyes wide, as he realized his beloved ${friend} was gone. Overwhelmed with sadness, he burst into tears, feeling like the ${adjective4} of the Halloween party. He ran home, vowing to never let anyone steal his candy again!`;

let madLibOutputDiv = document.getElementById("madLibOutput");

madLibOutputDiv.innerHTML = `<p>${story}</p>`;