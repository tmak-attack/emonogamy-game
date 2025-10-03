/**
 * Board Spaces Configuration for (e)MOnogamy Game
 * 
 * INTEGRATION NOTE: For visual board rendering with grid coordinates,
 * see positionMap.js which provides:
 * - 10x10 grid position mapping (MONOPOLY_POSITION_MAP)
 * - getCoordinatesFromIndex(index) - converts board index to [row, col]
 * - calculateMove(currentIndex, spaces) - handles movement with wraparound
 * - renderGridWithMapping() - debug visualization of the board layout
 * 
 * Use positionMap.js to render tokens on a visual board grid while using
 * this file's BOARD_SPACES array for game logic and space properties.
 * 
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║                         ASCII BOARD LAYOUT (40 SPACES)                   ║
 * ║                                                                           ║
 * ║  30─31─32─33─34─35─36─37─38─39                                           ║
 * ║  │                             │                                          ║
 * ║  29                           0  ← GO (First Swipe Right)                ║
 * ║  28                           1                                          ║
 * ║  27                           2                                          ║
 * ║  26                           3                                          ║
 * ║  25                           4                                          ║
 * ║  24                           5                                          ║
 * ║  23                           6                                          ║
 * ║  22                           7                                          ║
 * ║  21                           8                                          ║
 * ║  │                             │                                          ║
 * ║  20─19─18─17─16─15─14─13─12─11─10                                       ║
 * ║                                                                           ║
 * ║  Position 0:  GO (First Swipe Right) - Bottom Right Corner               ║
 * ║  Position 10: Jail/Just Visiting - Bottom Left Corner                    ║
 * ║  Position 20: Free Parking - Top Left Corner                             ║
 * ║  Position 30: Go to Jail - Top Right Corner                              ║
 * ║                                                                           ║
 * ║  Movement: Clockwise from position 0                                     ║
 * ║  • Start at 0 (bottom right)                                             ║
 * ║  • Move left along bottom (1-9)                                          ║
 * ║  • Turn corner at 10 (bottom left)                                       ║
 * ║  • Move up left side (11-19)                                             ║
 * ║  • Turn corner at 20 (top left)                                          ║
 * ║  • Move right along top (21-29)                                          ║
 * ║  • Turn corner at 30 (top right)                                         ║
 * ║  • Move down right side (31-39) back to 0                                ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 * 
 * SPACE TYPES:
 *   • 'go' = Starting space (collect 200 points when passing)
 *   • 'property' = Purchasable property space
 *   • 'challenge_intimate' = Intimate challenge card (🔥🔥)
 *   • 'challenge_passion' = Passion challenge card (🔥🔥🔥)
 *   • 'challenge_steamy' = Steamy challenge card (🔥🔥🔥🔥)
 *   • 'challenge_voyeur' = Voyeur challenge card (🔥🔥🔥)
 *   • 'challenge_special' = Special challenge card (🔥-🔥🔥🔥🔥)
 *   • 'jail' = Jail/Just Visiting corner
 *   • 'parking' = Free Parking corner
 *   • 'go_to_jail' = Go to Jail corner
 *   • 'tax' = Tax/fee spaces
 *   • 'railroad' = Railroad-equivalent spaces (transportation/venues)
 *   • 'utility' = Utility-equivalent spaces
 * 
 * MOVEMENT LOGIC:
 * 1. Player position stored as array index (0-39)
 * 2. To move: newPosition = (currentPosition + diceRoll) % 40
 * 3. Check if passed GO: if (newPosition < currentPosition) { collect 200 points }
 * 4. Execute space action: BOARD_SPACES[newPosition]
 * 5. Corners trigger special actions based on type
 **/

const BOARD_SPACES = [
  // POSITION 0: GO (Bottom Right Corner)
  { 
    id: 0, 
    name: "First Swipe Right", 
    type: "go",
    description: "Starting space - Collect 200 relationship points when passing or landing"
  },
  
  // BOTTOM ROW (1-9) - Moving LEFT ←
  { id: 1, name: "Dark Aesthetic Dive", type: "property", color: "purple" },
  { id: 2, name: "Intimate Confession", type: "challenge_intimate" },
  { id: 3, name: "Emo Phase Apartment", type: "property", color: "purple" },
  { id: 4, name: "Black Nail Polish Tax", type: "tax" },
  { id: 5, name: "Warped Tour Memories", type: "railroad" },
  { id: 6, name: "Thrift Store Fashion", type: "property", color: "lightblue" },
  { id: 7, name: "Passion Rising", type: "challenge_passion" },
  { id: 8, name: "Band Tee Collection", type: "property", color: "lightblue" },
  { id: 9, name: "Choker Boutique", type: "property", color: "lightblue" },
  
  // POSITION 10: JAIL/JUST VISITING (Bottom Left Corner)
  { 
    id: 10, 
    name: "Tarot Reading Corner", 
    type: "jail",
    description: "Just Visiting - No penalty unless sent here by Go to Jail"
  },
  
  // LEFT SIDE (11-19) - Moving UP ↑
  { id: 11, name: "Fishnet Fashion", type: "property", color: "pink" },
  { id: 12, name: "Crystal Energy Co.", type: "utility" },
  { id: 13, name: "Platform Boot Emporium", type: "property", color: "pink" },
  { id: 14, name: "Vinyl Record Store", type: "property", color: "pink" },
  { id: 15, name: "Hot Topic Nostalgia", type: "railroad" },
  { id: 16, name: "Goth Club", type: "property", color: "orange" },
  { id: 17, name: "Steamy Secrets", type: "challenge_steamy" },
  { id: 18, name: "Tattoo Parlor", type: "property", color: "orange" },
  { id: 19, name: "Piercing Studio", type: "property", color: "orange" },
  
  // POSITION 20: FREE PARKING (Top Left Corner)
  { 
    id: 20, 
    name: "Mercury Retrograde Parking", 
    type: "parking",
    description: "Free Parking - Safe space, collect any pool money if house rules allow"
  },
  
  // TOP ROW (21-29) - Moving RIGHT →
  { id: 21, name: "Occult Library", type: "property", color: "red" },
  { id: 22, name: "Voyeur Vision", type: "challenge_voyeur" },
  { id: 23, name: "Witchy Apothecary", type: "property", color: "red" },
  { id: 24, name: "Spell Components Shop", type: "property", color: "red" },
  { id: 25, name: "Slam Poetry Night", type: "railroad" },
  { id: 26, name: "Candlelit Sanctuary", type: "property", color: "yellow" },
  { id: 27, name: "Astrology Readings", type: "property", color: "yellow" },
  { id: 28, name: "Incense & Vibes", type: "utility" },
  { id: 29, name: "Graveyard Picnic Spot", type: "property", color: "yellow" },
  
  // POSITION 30: GO TO JAIL (Top Right Corner)
  { 
    id: 30, 
    name: "Shadow Realm", 
    type: "go_to_jail",
    description: "Go to Jail - Move directly to Jail (position 10), do not pass GO"
  },
  
  // RIGHT SIDE (31-39) - Moving DOWN ↓
  { id: 31, name: "Haunted Manor", type: "property", color: "green" },
  { id: 32, name: "Black Rose Garden", type: "property", color: "green" },
  { id: 33, name: "Special Connection", type: "challenge_special" },
  { id: 34, name: "Moonlit Altar", type: "property", color: "green" },
  { id: 35, name: "Underground Shows", type: "railroad" },
  { id: 36, name: "Passionate Embrace", type: "challenge_passion" },
  { id: 37, name: "Punk Concert Venue", type: "property", color: "darkblue" },
  { id: 38, name: "Full Moon Ritual Fee", type: "tax" },
  { id: 39, name: "Coven Headquarters", type: "property", color: "darkblue" }
];

/**
 * HELPER FUNCTIONS FOR MOVEMENT LOGIC
 **/

// Get total number of spaces on the board (should always be 40)
function getBoardSize() {
  return BOARD_SPACES.length;
}

// Calculate new position after dice roll with wraparound
// Example: position 37 + roll 5 = position 2 (wraps around through GO)
function calculateNewPosition(currentPosition, diceRoll) {
  return (currentPosition + diceRoll) % BOARD_SPACES.length;
}

// Check if player passed GO during movement
// Returns true if new position is lower than old position (wrapped around)
function didPassGo(oldPosition, newPosition) {
  return newPosition < oldPosition;
}

// Get space object by position ID (0-39)
function getSpace(spaceId) {
  if (spaceId < 0 || spaceId >= BOARD_SPACES.length) {
    console.error(`Invalid space ID: ${spaceId}`);
    return null;
  }
  return BOARD_SPACES[spaceId];
}

// Get all spaces of a specific type
// Useful for finding all properties, challenges, etc.
function getSpacesByType(type) {
  return BOARD_SPACES.filter(space => space.type === type);
}

// Get all challenge spaces (any challenge type)
function getAllChallengeSpaces() {
  return BOARD_SPACES.filter(space => space.type.startsWith('challenge_'));
}

// Get all spaces in a color group (for monopoly detection)
function getSpacesByColor(color) {
  return BOARD_SPACES.filter(space => space.color === color);
}

// Get corner spaces (positions 0, 10, 20, 30)
function getCornerSpaces() {
  return BOARD_SPACES.filter(space => 
    space.type === 'go' || 
    space.type === 'jail' || 
    space.type === 'parking' || 
    space.type === 'go_to_jail'
  );
}

// Export for use in game logic (Node.js/module environment)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    BOARD_SPACES,
    getBoardSize,
    calculateNewPosition,
    didPassGo,
    getSpace,
    getSpacesByType,
    getAllChallengeSpaces,
    getSpacesByColor,
    getCornerSpaces
  };
}

// Also make available in browser context
if (typeof window !== 'undefined') {
  window.BOARD_SPACES = BOARD_SPACES;
  window.getBoardSize = getBoardSize;
  window.calculateNewPosition = calculateNewPosition;
  window.didPassGo = didPassGo;
  window.getSpace = getSpace;
  window.getSpacesByType = getSpacesByType;
  window.getAllChallengeSpaces = getAllChallengeSpaces;
  window.getSpacesByColor = getSpacesByColor;
  window.getCornerSpaces = getCornerSpaces;
}
