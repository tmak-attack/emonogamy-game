/**
 * Board Spaces Configuration for (e)MOnogamy Game
 * 
 * This file contains the canonical board space array for movement logic.
 * Each space is an object with:
 *   - id: Sequential position (0-39 for standard 40-space board)
 *   - name: Display name of the space
 *   - type: Space type for game logic
 *     • 'go' = Starting space (collect points when passing)
 *     • 'property' = Purchasable property space
 *     • 'challenge' = Draw a challenge card
 *     • 'corner' = Special corner spaces
 *     • 'special' = Tax/fee spaces
 *     • 'railroad' = Railroad-equivalent spaces
 *     • 'utility' = Utility-equivalent spaces
 *   - color: (optional) Color group for properties
 * 
 * MOVEMENT LOGIC USAGE:
 * 1. Player position is stored as array index (0-39)
 * 2. To move: newPosition = (currentPosition + diceRoll) % BOARD_SPACES.length
 * 3. Check if passed GO: if (newPosition < currentPosition) { collect 200 points }
 * 4. Execute space action: BOARD_SPACES[newPosition]
 * 
 * Board Layout: 40 spaces arranged clockwise
 * - Space 0: GO (First Swipe Right) - Bottom left corner
 * - Spaces 1-9: Bottom row (moving right)
 * - Space 10: Just Visiting - Bottom right corner
 * - Spaces 11-19: Right side (moving up)
 * - Space 20: Free Parking - Top right corner  
 * - Spaces 21-29: Top row (moving left)
 * - Space 30: Go to Jail - Top left corner
 * - Spaces 31-39: Left side (moving down, back to GO)
 */

const BOARD_SPACES = [
  // BOTTOM ROW (0-10) - Moving RIGHT →
  { id: 0, name: "First Swipe Right", type: "go" },
  { id: 1, name: "Dark Aesthetic Dive", type: "property", color: "purple" },
  { id: 2, name: "Intimate Challenge", type: "challenge" },
  { id: 3, name: "Emo Phase Apartment", type: "property", color: "purple" },
  { id: 4, name: "Black Nail Polish Tax", type: "special" },
  { id: 5, name: "Warped Tour Memories", type: "railroad" },
  { id: 6, name: "Thrift Store Fashion", type: "property", color: "lightblue" },
  { id: 7, name: "Passion Challenge", type: "challenge" },
  { id: 8, name: "Band Tee Collection", type: "property", color: "lightblue" },
  { id: 9, name: "Choker Boutique", type: "property", color: "lightblue" },
  { id: 10, name: "Tarot Reading Corner", type: "corner" },
  
  // RIGHT SIDE (11-20) - Moving UP ↑
  { id: 11, name: "Fishnet Fashion", type: "property", color: "pink" },
  { id: 12, name: "Crystal Energy Co.", type: "utility" },
  { id: 13, name: "Platform Boot Emporium", type: "property", color: "pink" },
  { id: 14, name: "Vinyl Record Store", type: "property", color: "pink" },
  { id: 15, name: "Hot Topic Nostalgia", type: "railroad" },
  { id: 16, name: "Goth Club", type: "property", color: "orange" },
  { id: 17, name: "Steamy Challenge", type: "challenge" },
  { id: 18, name: "Tattoo Parlor", type: "property", color: "orange" },
  { id: 19, name: "Piercing Studio", type: "property", color: "orange" },
  { id: 20, name: "Mercury Retrograde Parking", type: "corner" },
  
  // TOP ROW (21-30) - Moving LEFT ←
  { id: 21, name: "Occult Library", type: "property", color: "red" },
  { id: 22, name: "Voyeur Challenge", type: "challenge" },
  { id: 23, name: "Witchy Apothecary", type: "property", color: "red" },
  { id: 24, name: "Spell Components Shop", type: "property", color: "red" },
  { id: 25, name: "Slam Poetry Night", type: "railroad" },
  { id: 26, name: "Candlelit Sanctuary", type: "property", color: "yellow" },
  { id: 27, name: "Astrology Readings", type: "property", color: "yellow" },
  { id: 28, name: "Incense & Vibes", type: "utility" },
  { id: 29, name: "Graveyard Picnic Spot", type: "property", color: "yellow" },
  { id: 30, name: "Shadow Realm (Go to Detention)", type: "corner" },
  
  // LEFT SIDE (31-39) - Moving DOWN ↓
  { id: 31, name: "Haunted Manor", type: "property", color: "green" },
  { id: 32, name: "Black Rose Garden", type: "property", color: "green" },
  { id: 33, name: "Special Challenge", type: "challenge" },
  { id: 34, name: "Moonlit Altar", type: "property", color: "green" },
  { id: 35, name: "Underground Shows", type: "railroad" },
  { id: 36, name: "Passion Challenge", type: "challenge" },
  { id: 37, name: "Punk Concert Venue", type: "property", color: "darkblue" },
  { id: 38, name: "Full Moon Ritual Fee", type: "special" },
  { id: 39, name: "Coven Headquarters", type: "property", color: "darkblue" }
];

/**
 * HELPER FUNCTIONS FOR MOVEMENT LOGIC
 */

// Get total number of spaces on the board
function getBoardSize() {
  return BOARD_SPACES.length;
}

// Calculate new position after dice roll
function calculateNewPosition(currentPosition, diceRoll) {
  return (currentPosition + diceRoll) % BOARD_SPACES.length;
}

// Check if player passed GO
function didPassGo(oldPosition, newPosition) {
  return newPosition < oldPosition;
}

// Get space by ID
function getSpace(spaceId) {
  return BOARD_SPACES[spaceId];
}

// Get all spaces of a certain type
function getSpacesByType(type) {
  return BOARD_SPACES.filter(space => space.type === type);
}

// Get all spaces of a certain color group
function getSpacesByColor(color) {
  return BOARD_SPACES.filter(space => space.color === color);
}

// Export for use in game logic
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    BOARD_SPACES,
    getBoardSize,
    calculateNewPosition,
    didPassGo,
    getSpace,
    getSpacesByType,
    getSpacesByColor
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
  window.getSpacesByColor = getSpacesByColor;
}
