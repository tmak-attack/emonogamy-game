/**
 * Board Spaces Configuration for (e)MOnogamy Game
 * 
 * This file contains the canonical board space array for the game.
 * Each space is an object with:
 *   - id: Sequential position (0...n)
 *   - name: Display name of the space
 *   - type: Space type (go, property, challenge, corner, special)
 * 
 * Spaces are arranged in clockwise play order starting with space 0 (First Swipe Right).
 * Use this array as the authoritative source for all movement logic calculations.
 * 
 * Board Layout: 40 spaces total (standard Monopoly-style board)
 * - Corner spaces: 0, 10, 20, 30
 * - Properties: Organized in color groups
 * - Challenge spaces: Special cards (Intimate, Passion, Steamy, Voyeur, Special)
 */

const BOARD_SPACES = [
  // BOTTOM ROW (0-10) - Moving right
  { id: 0, name: "First Swipe Right", type: "go" },
  { id: 1, name: "Dark Aesthetic Property", type: "property" },
  { id: 2, name: "Intimate Challenge", type: "challenge" },
  { id: 3, name: "Emo Phase Property", type: "property" },
  { id: 4, name: "Black Nail Polish Tax", type: "special" },
  { id: 5, name: "Band Tee Collection", type: "property" },
  { id: 6, name: "Choker Boutique", type: "property" },
  { id: 7, name: "Passion Challenge", type: "challenge" },
  { id: 8, name: "Fishnet Fashion", type: "property" },
  { id: 9, name: "Platform Boot Emporium", type: "property" },
  { id: 10, name: "Tarot Reading Corner", type: "corner" },
  
  // RIGHT SIDE (11-20) - Moving up
  { id: 11, name: "Crystal Shop", type: "property" },
  { id: 12, name: "Steamy Challenge", type: "challenge" },
  { id: 13, name: "Vinyl Record Store", type: "property" },
  { id: 14, name: "Goth Club", type: "property" },
  { id: 15, name: "Occult Library", type: "special" },
  { id: 16, name: "Tattoo Parlor", type: "property" },
  { id: 17, name: "Voyeur Challenge", type: "challenge" },
  { id: 18, name: "Piercing Studio", type: "property" },
  { id: 19, name: "Witchy Apothecary", type: "property" },
  { id: 20, name: "Mercury Retrograde Parking", type: "corner" },
  
  // TOP ROW (21-30) - Moving left
  { id: 21, name: "Spell Components Shop", type: "property" },
  { id: 22, name: "Special Challenge", type: "challenge" },
  { id: 23, name: "Candlelit Sanctuary", type: "property" },
  { id: 24, name: "Astrology Readings", type: "property" },
  { id: 25, name: "Graveyard Picnic Spot", type: "special" },
  { id: 26, name: "Haunted Manor", type: "property" },
  { id: 27, name: "Intimate Challenge", type: "challenge" },
  { id: 28, name: "Black Rose Garden", type: "property" },
  { id: 29, name: "Moonlit Altar", type: "property" },
  { id: 30, name: "Shadow Realm (Go to Detention)", type: "corner" },
  
  // LEFT SIDE (31-39) - Moving down
  { id: 31, name: "Punk Concert Venue", type: "property" },
  { id: 32, name: "Passion Challenge", type: "challenge" },
  { id: 33, name: "Mosh Pit Memorial", type: "property" },
  { id: 34, name: "Underground Bar", type: "property" },
  { id: 35, name: "Spellbound Taxes", type: "special" },
  { id: 36, name: "Steamy Challenge", type: "challenge" },
  { id: 37, name: "Dimly Lit Dungeon", type: "property" },
  { id: 38, name: "Full Moon Ritual Fee", type: "special" },
  { id: 39, name: "Coven Headquarters", type: "property" }
];

// Export for use in game logic
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BOARD_SPACES };
}

// Also make available in browser context
if (typeof window !== 'undefined') {
  window.BOARD_SPACES = BOARD_SPACES;
}
