/**
 * positionMap.js
 * 
 * Position mapping for (e)MOnogamy board game
 * Maps board space indices (0-39) to 10x10 grid coordinates for visual rendering
 * Follows standard Monopoly board layout with perimeter movement
 */

/**
 * POSITION_MAP: Array mapping board index to [row, col] coordinates
 * 
 * Board layout (10x10 grid, 0-indexed):
 * - Bottom row (indices 0-9): row 9, moving right (col 9→0)
 * - Left column (indices 10-19): col 0, moving up (row 8→0) 
 * - Top row (indices 20-29): row 0, moving left (col 1→9)
 * - Right column (indices 30-39): col 9, moving down (row 1→8)
 * 
 * Index 0 is the starting corner (bottom-right): [9,9]
 * Movement is counter-clockwise around the perimeter
 */
const POSITION_MAP = [
  // Bottom row: indices 0-9 (row 9, columns 9→0)
  [9, 9], // 0 - GO/Start (bottom-right corner)
  [9, 8], // 1
  [9, 7], // 2
  [9, 6], // 3
  [9, 5], // 4
  [9, 4], // 5
  [9, 3], // 6
  [9, 2], // 7
  [9, 1], // 8
  [9, 0], // 9 - Bottom-left corner

  // Left column: indices 10-19 (column 0, rows 8→0)
  [8, 0], // 10
  [7, 0], // 11
  [6, 0], // 12
  [5, 0], // 13
  [4, 0], // 14
  [3, 0], // 15
  [2, 0], // 16
  [1, 0], // 17
  [0, 0], // 18 (note: skipping corner)
  [0, 0], // 19 - Top-left corner (placeholder for index alignment)

  // Top row: indices 20-29 (row 0, columns 1→9)
  [0, 1], // 20
  [0, 2], // 21
  [0, 3], // 22
  [0, 4], // 23
  [0, 5], // 24
  [0, 6], // 25
  [0, 7], // 26
  [0, 8], // 27
  [0, 9], // 28 (note: skipping corner)
  [0, 9], // 29 - Top-right corner (placeholder for index alignment)

  // Right column: indices 30-39 (column 9, rows 1→8, then corner at 9)
  [1, 9], // 30
  [2, 9], // 31
  [3, 9], // 32
  [4, 9], // 33
  [5, 9], // 34
  [6, 9], // 35
  [7, 9], // 36
  [8, 9], // 37
  [9, 9], // 38 (note: approaching starting corner)
  [9, 9]  // 39 - Back to GO (wraps to index 0)
];

/**
 * CORRECTED MONOPOLY-STYLE POSITION MAP (40 spaces total)
 * Following standard Monopoly board with 4 corners and 9 spaces per side
 * 
 * Layout:
 * - Index 0: GO (bottom-right corner)
 * - Indices 1-9: Bottom edge (9 spaces)
 * - Index 10: Just Visiting/Jail (bottom-left corner) 
 * - Indices 11-19: Left edge (9 spaces)
 * - Index 20: Free Parking (top-left corner)
 * - Indices 21-29: Top edge (9 spaces)
 * - Index 30: Go To Jail (top-right corner)
 * - Indices 31-39: Right edge (9 spaces, then back to GO)
 */
const MONOPOLY_POSITION_MAP = [
  // Bottom row: 0-10 (GO + 9 spaces + corner)
  [9, 9], // 0 - GO (bottom-right corner)
  [9, 8], // 1
  [9, 7], // 2
  [9, 6], // 3
  [9, 5], // 4
  [9, 4], // 5
  [9, 3], // 6
  [9, 2], // 7
  [9, 1], // 8
  [9, 0], // 9
  [9, 0], // 10 - Just Visiting/Jail (bottom-left corner)

  // Left column: 11-20 (9 spaces + corner)
  [8, 0], // 11
  [7, 0], // 12
  [6, 0], // 13
  [5, 0], // 14
  [4, 0], // 15
  [3, 0], // 16
  [2, 0], // 17
  [1, 0], // 18
  [0, 0], // 19
  [0, 0], // 20 - Free Parking (top-left corner)

  // Top row: 21-30 (9 spaces + corner)
  [0, 1], // 21
  [0, 2], // 22
  [0, 3], // 23
  [0, 4], // 24
  [0, 5], // 25
  [0, 6], // 26
  [0, 7], // 27
  [0, 8], // 28
  [0, 9], // 29
  [0, 9], // 30 - Go To Jail (top-right corner)

  // Right column: 31-39 (9 spaces back to GO)
  [1, 9], // 31
  [2, 9], // 32
  [3, 9], // 33
  [4, 9], // 34
  [5, 9], // 35
  [6, 9], // 36
  [7, 9], // 37
  [8, 9], // 38
  [9, 9]  // 39 - Wraps back to GO at index 0
];

/**
 * Get grid coordinates for a given board index
 * @param {number} index - Board space index (0-39)
 * @returns {Array<number>} [row, col] coordinates, or null if invalid
 */
function getCoordinatesFromIndex(index) {
  if (index < 0 || index >= MONOPOLY_POSITION_MAP.length) {
    console.error(`Invalid board index: ${index}. Must be 0-39.`);
    return null;
  }
  return MONOPOLY_POSITION_MAP[index];
}

/**
 * Get board index from grid coordinates
 * @param {number} row - Grid row (0-9)
 * @param {number} col - Grid column (0-9)
 * @returns {number} Board index, or -1 if coordinates don't map to a board space
 */
function getIndexFromCoordinates(row, col) {
  for (let i = 0; i < MONOPOLY_POSITION_MAP.length; i++) {
    const [r, c] = MONOPOLY_POSITION_MAP[i];
    if (r === row && c === col) {
      return i;
    }
  }
  console.warn(`Coordinates [${row}, ${col}] do not map to a board space`);
  return -1;
}

/**
 * Render a visual grid representation with board indices
 * Useful for debugging and understanding the board layout
 * @returns {string} ASCII representation of the board grid
 */
function renderGridWithMapping() {
  // Initialize 10x10 grid with empty spaces
  const grid = Array(10).fill(null).map(() => Array(10).fill('  '));
  
  // Place board indices in their grid positions
  MONOPOLY_POSITION_MAP.forEach((coords, index) => {
    const [row, col] = coords;
    // Format index to always be 2 characters
    grid[row][col] = index.toString().padStart(2, ' ');
  });
  
  // Build output string
  let output = '\n=== (e)MOnogamy Board Grid Mapping ===\n\n';
  output += '   0  1  2  3  4  5  6  7  8  9  (columns)\n';
  output += '  ╔═══════════════════════════════╗\n';
  
  grid.forEach((row, rowIndex) => {
    output += rowIndex + ' ║';
    row.forEach(cell => {
      output += cell + ' ';
    });
    output += '║\n';
  });
  
  output += '  ╚═══════════════════════════════╝\n';
  output += '\n';
  output += 'Corner positions:\n';
  output += '  Index 0:  GO/Start (bottom-right)\n';
  output += '  Index 10: Just Visiting/Jail (bottom-left)\n';
  output += '  Index 20: Free Parking (top-left)\n';
  output += '  Index 30: Go To Jail (top-right)\n';
  output += '\n';
  output += 'Movement: Counter-clockwise around perimeter\n';
  output += 'Total spaces: 40 (indices 0-39)\n';
  
  return output;
}

/**
 * Calculate the next position after moving N spaces
 * @param {number} currentIndex - Current board position (0-39)
 * @param {number} spaces - Number of spaces to move forward
 * @returns {Object} { newIndex, passedGo } - New position and whether GO was passed
 */
function calculateMove(currentIndex, spaces) {
  const totalSpaces = 40;
  const newIndex = (currentIndex + spaces) % totalSpaces;
  const passedGo = (currentIndex + spaces) >= totalSpaces;
  
  return {
    newIndex,
    passedGo,
    coordinates: getCoordinatesFromIndex(newIndex)
  };
}

/**
 * USAGE EXAMPLES:
 * 
 * 1. Get coordinates for a board position:
 *    const coords = getCoordinatesFromIndex(5);
 *    // Returns [9, 4] - row 9, column 4
 * 
 * 2. Render player token at board position:
 *    const position = 15;
 *    const [row, col] = getCoordinatesFromIndex(position);
 *    renderToken(row, col, playerToken);
 * 
 * 3. Calculate movement:
 *    const result = calculateMove(currentPosition, diceRoll);
 *    if (result.passedGo) {
 *      awardGoBonus();
 *    }
 *    updatePlayerPosition(result.newIndex);
 * 
 * 4. Debug the board layout:
 *    console.log(renderGridWithMapping());
 * 
 * 5. Validate a position is a corner:
 *    const corners = [0, 10, 20, 30];
 *    if (corners.includes(playerPosition)) {
 *      handleCornerSpace(playerPosition);
 *    }
 */

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    POSITION_MAP,
    MONOPOLY_POSITION_MAP,
    getCoordinatesFromIndex,
    getIndexFromCoordinates,
    renderGridWithMapping,
    calculateMove
  };
}
