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
      "Find something pretty in nature",
      "Notice interesting colors around you",
      "Sketch or draw something you see",
      "Find flowers or pretty leaves"
    ],
    medium: [
      "Take 3 creative photos of nature",
      "Make up a story about what you find",
      "Collect pretty items for an art project",
      "Create a mini nature collection",
      "Teach Dad a new dance move or song"
    ],
    wild: [
      "Put on a theatrical performance with silly voices",
      "Take photos as different character personalities",
      "Make up and teach Dad the silliest dance",
      "Do a funny fashion show with nature items",
      "Create and perform a story with dramatic voices",
      "Do impressions of different animals for Dad"
    ]
  },
  Jack: {
    chill: [
      "Find rocks or sticks to explore with",
      "Look for cool stuff to examine",
      "Scout out the best climbing spots",
      "Hunt for animal tracks or signs",
      "Build something simple with found items"
    ],
    medium: [
      "Do 5 jumping contests",
      "Find something super tiny or tiny creature",
      "Run a race against Dad",
      "Climb or scramble up something safely",
      "Build a cool structure with sticks and rocks"
    ],
    wild: [
      "Do flips, cartwheels, or summersaults",
      "Race Dad with silly running styles",
      "Climb trees or rocks like a ninja",
      "Stomp around making dinosaur roars",
      "Slide down hills and do wild tricks",
      "Run backwards and sideways as fast as possible"
    ]
  },
  Both: {
    chill: [
      "Explore together and talk about what you see",
      "Find cool things as a team",
      "Have a relaxed chat and enjoy time together",
      "Take a nice family photo together",
      "Collect interesting items together"
    ],
    medium: [
      "Work together to build something awesome",
      "Find 5 things as a team",
      "Make up a fun team name together",
      "Do a goofy dance together",
      "Help each other and solve a challenge"
    ],
    wild: [
      "Create the silliest team chant ever",
      "Have a three-legged race or relay race",
      "Make ridiculous animal sounds together",
      "Do the goofiest dance battle ever",
      "Create a secret silly handshake and dance",
      "Have a rolling race down a hill together"
    ]
  }
};

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getDifficultyLevel(value) {
 

function isBeachLocation(location) {
  const beaches = ["Beach", "beach", "water", "Water", "Pools"];
  return beaches.some(beach => location.includes(beach));
}

function filterMissionsForLocation(location) {
  const beachMissions = ["Skip stones in the water", "Build a sandcastle", "Play in the water", "Hunt for shells or treasures"];
  
  if (!isBeachLocation(location)) {
    // Remove beach-specific missions for non-beach locations
    return missions.filter(mission => !beachMissions.includes(mission));
  }
  
  return missions;
} if (value <= 3) return "chill";
  if (value <= 7) return "medium";
  return "wild";
}

function generateAdventure() {
  // Show spinner
  documentfilteredMissions = filterMissionsForLocation(location);
    const mission = randomItem(filteredMer").style.display = "block";
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
  }, 5000);
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