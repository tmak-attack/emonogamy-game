/**
 * Board Spaces Configuration for (e)MOnogamy Game — Monopoly-accurate order
 * Theme: punk/emo/goth romance. Progressive point values by board order.
 *
 * Uses classic Monopoly pacing and positions:
 * - GO(0), bottom row 1-9; Jail/Just Visiting(10); left side 11-19; Free Parking(20);
 *   top row 21-29; Go To Jail(30); right side 31-39 back to GO.
 * - Chance/Community Chest equivalents placed at 2/7/17/22/33/36.
 * - Income/Luxury taxes at 4 and 38.
 * - Railroads at 5/15/25/35 (as venues).
 * - Utilities at 12 and 28.
 *
 * Point values: start low near GO, increase steadily by color set, peak at 39.
 * Base point schedule roughly mirrors Monopoly rents without houses:
 * purple(1,3): 60/60 → 60, 80 points; lightblue(6,8,9): 100/100/120 → 100, 100, 120; pink(11,13,14): 140/140/160; orange(16,18,19): 180/180/200;
 * red(21,23,24): 220/220/240; yellow(26,27,29): 260/260/280; green(31,32,34): 300/300/320; darkblue(37,39): 350/400 with 39 highest.
 * Venues (railroads) scale 200/200/200/200; Utilities have dynamic effects.
 * Taxes are negative points; GO awards +200 when passed or landed.
 *
 * Challenge spaces include concise, consensual, playful tasks you can actually do.
 */

const BOARD_SPACES = [
  // 0 — GO
  { id: 0, name: "First Swipe Right (GO)", type: "go", points: 200, description: "Collect 200 relationship points when passing or landing." },

  // Bottom row (1–9)
  { id: 1, name: "Alleyway Zine Stand", type: "property", color: "purple", points: 60 },
  { id: 2, name: "Tender Truths", type: "challenge_intimate", points: 0, task: "Share a genuine compliment and a tiny secret. If both do, +50 each." },
  { id: 3, name: "Basement Studio", type: "property", color: "purple", points: 80 },
  { id: 4, name: "Smudged Eyeliner Tax", type: "tax", points: -200, description: "Pay 200 points into the pot (or bank)." },
  { id: 5, name: "Warped Tour Line", type: "railroad", points: 200, description: "Venue pass. Venue values scale with number owned." },
  { id: 6, name: "Thrift Rack Find", type: "property", color: "lightblue", points: 100 },
  { id: 7, name: "Kiss or Miss", type: "challenge_passion", points: 0, task: "Offer a 5‑second kiss or a flirty whisper. Accept = +75; pass = -25." },
  { id: 8, name: "Band Tee Bin", type: "property", color: "lightblue", points: 100 },
  { id: 9, name: "Choker Cart", type: "property", color: "lightblue", points: 120 },

  // 10 — Jail/Just Visiting
  { id: 10, name: "Tarot Reading Corner (Jail)", type: "jail", points: 0, description: "Just Visiting. If sent here, skip turn or pay per house rules." },

  // Left side (11–19)
  { id: 11, name: "Fishnet Boutique", type: "property", color: "pink", points: 140 },
  { id: 12, name: "Crystal Energy Co.", type: "utility", points: 0, description: "Utility: action value based on dice or card effects." },
  { id: 13, name: "Platform Boot Emporium", type: "property", color: "pink", points: 140 },
  { id: 14, name: "Vinyl Record Crate", type: "property", color: "pink", points: 160 },
  { id: 15, name: "Hot Topic Express", type: "railroad", points: 200 },
  { id: 16, name: "Goth Club Floor", type: "property", color: "orange", points: 180 },
  { id: 17, name: "Steamy Dares", type: "challenge_steamy", points: 0, task: "Choose: describe a fantasy PG‑13 style or do a 10‑second slow dance. +100 if done." },
  { id: 18, name: "Tattoo Flash Hub", type: "property", color: "orange", points: 180 },
  { id: 19, name: "Piercing Studio", type: "property", color: "orange", points: 200 },

  // 20 — Free Parking
  { id: 20, name: "Free Parking — Mercury Retrograde", type: "parking", points: 0, description: "Safe space. Collect pot if house rules allow." },

  // Top row (21–29)
  { id: 21, name: "Occult Library", type: "property", color: "red", points: 220 },
  { id: 22, name: "Voyeur’s Pick", type: "challenge_voyeur", points: 0, task: "Take a cute photo pose on partner’s request. If both approve, +75 each." },
  { id: 23, name: "Witchy Apothecary", type: "property", color: "red", points: 220 },
  { id: 24, name: "Spell Components Shop", type: "property", color: "red", points: 240 },
  { id: 25, name: "All‑Ages DIY Venue", type: "railroad", points: 200 },
  { id: 26, name: "Candlelit Sanctuary", type: "property", color: "yellow", points: 260 },
  { id: 27, name: "Astrology Reading Nook", type: "property", color: "yellow", points: 260 },
  { id: 28, name: "Incense & Vibes Utility", type: "utility", points: 0, description: "Utility: action value based on dice or card effects." },
  { id: 29, name: "Graveyard Picnic", type: "property", color: "yellow", points: 280 },

  // 30 — Go To Jail
  { id: 30, name: "Go to Shadow Realm", type: "go_to_jail", points: 0, description: "Go directly to Tarot Reading Corner (10). Do not pass GO." },

  // Right side (31–39)
  { id: 31, name: "Haunted Manor Steps", type: "property", color: "green", points: 300 },
  { id: 32, name: "Black Rose Garden", type: "property", color: "green", points: 300 },
  { id: 33, name: "Special Connection", type: "challenge_special", points: 0, task: "Pick truth or act: truth = answer a spicy question; act = a 10‑second forehead‑to‑forehead breath sync. +100 if completed." },
  { id: 34, name: "Moonlit Altar", type: "property", color: "green", points: 320 },
  { id: 35, name: "Underground Train Line", type: "railroad", points: 200 },
  { id: 36, name: "Passionate Embrace", type: "challenge_passion", points: 0, task: "Hold hands, make eye contact, and say one desire. +100 if both share." },
  { id: 37, name: "Penthouse Loft (Boardwalk‑1)", type: "property", color: "darkblue", points: 350 },
  { id: 38, name: "Luxury Ritual Tax", type: "tax", points: -100, description: "Pay 100 points into the pot (or bank)." },
  { id: 39, name: "Dream House (Boardwalk)", type: "property", color: "darkblue", points: 400 }
];

/** Helper functions and exports (unchanged API) **/
function getBoardSize() { return BOARD_SPACES.length; }
function calculateNewPosition(currentPosition, diceRoll) { return (currentPosition + diceRoll) % BOARD_SPACES.length; }
function didPassGo(oldPosition, newPosition) { return newPosition < oldPosition; }
function getSpace(spaceId) {
  if (spaceId < 0 || spaceId >= BOARD_SPACES.length) {
    console.error(`Invalid space ID: ${spaceId}`);
    return null;
  }
  return BOARD_SPACES[spaceId];
}
function getSpacesByType(type) { return BOARD_SPACES.filter(space => space.type === type); }
function getAllChallengeSpaces() { return BOARD_SPACES.filter(space => String(space.type).startsWith('challenge_')); }
function getSpacesByColor(color) { return BOARD_SPACES.filter(space => space.color === color); }
function getCornerSpaces() { return BOARD_SPACES.filter(space => ['go','jail','parking','go_to_jail'].includes(space.type)); }

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

/**
 * Simulation helper (in-file, optional): simulate a full lap for two players.
 * Deterministic pseudo-rolls sequence for debugging pacing.
 */
function debugSimulateLap(startA = 0, startB = 0) {
  const rolls = [6,3,5,2,4,6,1,6,3,5,4,2,6,1,6,3,2,4,6,5]; // 20 turns
  const players = [
    { name: 'Player A', pos: startA, log: [] },
    { name: 'Player B', pos: startB, log: [] }
  ];
  const behaviorNotes = [];
  for (let t = 0; t < rolls.length; t++) {
    const p = players[t % 2];
    const r = rolls[t];
    const old = p.pos;
    const next = calculateNewPosition(old, r);
    const passedGo = didPassGo(old, next);
    if (passedGo) p.log.push({ turn: t+1, event: 'Passed GO', space: BOARD_SPACES[0].name, points: 200 });
    // Go to Jail handling
    let landing = next;
    if (BOARD_SPACES[next].type === 'go_to_jail') {
      landing = 10;
      behaviorNotes.push(`${p.name} sent to Jail on turn ${t+1}.`);
    }
    p.pos = landing;
    const s = BOARD_SPACES[landing];
    p.log.push({ turn: t+1, index: landing, name: s.name, points: s.points || 0 });
  }
  return { players, behaviorNotes };
}

if (typeof window !== 'undefined') window.debugSimulateLap = debugSimulateLap;
