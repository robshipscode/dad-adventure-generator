const locations = [
  "Hillarys Beach",
  "Local playground",
  "Bush walk trail",
  "Bike path near home",
  "Backyard camp",
  "Bells Rapids walk",
  "Scooter ride spot",
  "Park with a big oval",
  "Cottesloe Beach",
  "Scarborough Beach",
  "Kings Park",
  "Bold Park",
  "Lake Monger",
  "Whiteman Park",
  "Greenmount Falls trail",
  "Mundaring Weir walk",
  "City Beach",
  "Floreat Beach",
  "Aylesbury Park",
  "Trigg Beach",
  "Rocky beach with pools",
  "Dog-friendly beach walk"
];

const missions = [
  "Build the biggest fort",
  "Find three cool rocks",
  "Spot two birds",
  "Race Dad to a tree",
  "Collect five sticks",
  "Take a funny selfie together",
  "Find something red, blue, and yellow",
  "Make up a secret adventure code word",
  "Skip stones in the water",
  "Build a sandcastle",
  "Chase each other on the beach",
  "Have a picnic and eat snacks",
  "Hunt for shells or treasures",
  "Climb on the rocks",
  "Play a ball game",
  "Spot 5 different types of plants",
  "Listen for bird calls",
  "Run around and explore",
  "Play in the water",
  "Look for wildlife and animals",
  "Create a nature art project",
  "Play tag or hide and seek"
];

const rewards = [
  "Ice cream",
  "Hot chocolate",
  "Choose tonight's movie",
  "Extra Lego time",
  "A treat from Dad",
  "Pick dessert tonight",
  "Stay up 15 minutes later",
  "Choose the music in the car",
  "Fish and chips dinner",
  "Trip to the toy store",
  "Bake cookies together",
  "Extra screen time",
  "Special Dad breakfast",
  "Build a fort after dinner",
  "Pick the next adventure location",
  "Frozen smoothie treat",
  "Story time with Dad",
  "Park visit next weekend"
];

const challenges = {
  Annabelle: {
    chill: [
      "Take a nice photo",
      "Find something pretty",
      "Notice interesting colors",
      "Draw a simple map"
    ],
    medium: [
      "Take 3 creative photos",
      "Make up a story about what you find",
      "Find something beautiful in nature",
      "Create a mini treasure map",
      "Teach Dad a dance move"
    ],
    wild: [
      "Act out an entire story using only silly faces",
      "Take photos pretending to be a superhero",
      "Make up the silliest dance ever",
      "Speak in a funny accent the whole time",
      "Create an imaginary creature and draw it",
      "Do impressions of animals for Dad"
    ]
  },
  Jack: {
    chill: [
      "Walk to a good spot",
      "Find something cool",
      "Look for interesting objects",
      "Take your time exploring"
    ],
    medium: [
      "Jump over 5 sticks",
      "Find something super tiny",
      "Do your fastest run",
      "Roar like a dinosaur",
      "Find the biggest leaf"
    ],
    wild: [
      "Do a cartwheel or summersault",
      "Race Dad while making funny noises",
      "Climb a tree (safely!) like a monkey",
      "Stomp around like a giant kaiju",
      "Slide down the biggest hill you can find",
      "Run backwards as fast as you can"
    ]
  },
  Both: {
    chill: [
      "Walk around together",
      "Find things as a team",
      "Chat and explore",
      "Take a family photo"
    ],
    medium: [
      "Work together to build something awesome",
      "Find 5 things as a team",
      "Make up a team name",
      "Do a silly victory dance together",
      "Help each other complete the mission"
    ],
    wild: [
      "Create the silliest team chant ever",
      "Have a three-legged race",
      "Make ridiculous animal sounds together",
      "Do the goofiest dance battle ever",
      "Create secret silly handshake",
      "Roll down a grassy hill together"
    ]
  }
};

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getDifficultyLevel(value) {
  if (value <= 3) return "chill";
  if (value <= 7) return "medium";
  return "wild";
}

function generateAdventure() {
  // Show spinner
  document.getElementById("spinner").style.display = "block";
  document.getElementById("result").innerHTML = "";

  // Simulate thinking time with spinning wheel
  setTimeout(() => {
    const selectedKidValue = document.getElementById("kid").value;
    const selectedKid = selectedKidValue.charAt(0).toUpperCase() + selectedKidValue.slice(1);
    const difficultyValue = parseInt(document.getElementById("difficulty").value);
    const difficultyLevel = getDifficultyLevel(difficultyValue);

    let displayName = selectedKid;
    if (selectedKid === "Both") {
      displayName = "Annabelle & Jack";
    }

    const location = randomItem(locations);
    const mission = randomItem(missions);
    const reward = randomItem(rewards);
    const challenge = randomItem(challenges[selectedKid][difficultyLevel]);

    // Hide spinner and show result
    document.getElementById("spinner").style.display = "none";
    document.getElementById("result").innerHTML = `
      <h2>Adventure for ${displayName}</h2>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Mission:</strong> ${mission}</p>
      <p><strong>Challenge:</strong> ${challenge}</p>
      <p><strong>Reward:</strong> ${reward}</p>
    `;
  }, 1500);
}

// Update difficulty display value on slider change
document.addEventListener("DOMContentLoaded", function() {
  const slider = document.getElementById("difficulty");
  if (slider) {
    slider.addEventListener("input", function() {
      document.getElementById("difficulty-value").textContent = this.value;
    });
  }
});