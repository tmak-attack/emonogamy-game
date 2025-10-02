# (e)MOnogamy

🖤 **A Punk Witchy Relationship Empire Game** 🖤

## 🔮 Overview

(e)MOnogamy is an adult board game that combines the property-building mechanics of Monopoly with spicy relationship challenges. Players build their relationship empire through a punk/witchy aesthetic while completing intimate challenges ranging from sweet to steamy.

**Original App**: https://www.perplexity.ai/apps/96f8355a-830c-4dcf-9395-3caa6c8e8a64

## 🕯️ Game Concept

### Core Mechanics
- **Starting Points**: 1500 relationship points
- **Movement**: Dice-based board navigation
- **Properties**: Purchase properties when landing on them
- **Rent System**: Complete challenges when landing on owned properties
- **Milestones**: Build relationship milestones to increase challenge intensity
- **Passing Go**: Collect 200 points when passing "First Swipe Right"
- **Challenge Cards**: Draw and complete various relationship challenges

### Property System
- Own all properties in a color group to build milestones
- Milestone progression: First Kiss → Moving In → Engagement Ring
- Higher milestones = more intense challenges
- Properties can be traded between players

### Player Tokens
**Player 1 Options**: 🧙‍♀️ Witch Hat, 💀 Skull Mohawk, 💔 Broken Heart, 🤘 Devil Horns
**Player 2 Options**: 🔮 Crystal Ball, 📎 Safety Pin, 🃏 Tarot Card, 💿 Vinyl Record

## 🃏 Challenge Categories

### INTIMATE (🔥🔥)
Connection-focused challenges for building emotional and physical intimacy.
- Examples: Emo song slow dance, astrological confessions, tarot readings, body worship

### PASSION (🔥🔥🔥)
Heated romantic challenges with moderate intensity.
- Examples: Spell casting makeout, astrology roleplay, crystal foreplay, strip tease

### STEAMY (🔥🔥🔥🔥)
Intense challenges for experienced couples.
- Examples: High priestess domination, wax play, sensory bondage, edging

### VOYEUR (🔥🔥🔥)
Performance and exhibitionist-themed challenges.
- Examples: Webcam performances, thirst trap photoshoots, porn parodies

### SPECIAL (🔥-🔥🔥🔥🔥)
Unique challenges with variable intensity.
- Examples: Playlist roulette, Mercury retrograde excuses, gaming tournaments, TikTok challenges

## 🖤 Safety Features

### Safe Word: "Dashboard Confessional"
Say this anytime to immediately stop and return to safety mode.

### Safety Guidelines
- ✅ Consent is mandatory - veto anything without explanation
- ✅ Check in frequently with your partner
- ✅ Use safe word to stop immediately
- ✅ Respect boundaries and limits always
- ✅ This is about fun and connection, not pressure

## 🐛 Known Issues & Fixes Needed

### Critical Issues

#### 1. **Buggy Movement Logic** 🔴
**Problem**: Dice roll and board movement system is unreliable
- Players getting stuck on certain squares
- Inconsistent position tracking
- Movement count doesn't match dice roll

**Fix Needed**: 
- Refactor movement calculation algorithm
- Implement proper state management for player positions
- Add validation for board boundaries
- Test edge cases (landing on corners, passing go, etc.)

#### 2. **Onboarding Clarity** 🟡
**Problem**: New users confused about game setup and rules
- Unclear initial instructions
- No tutorial or guided first play
- Rules scattered across multiple screens

**Fix Needed**:
- Add comprehensive onboarding flow
- Create visual tutorial with step-by-step guidance
- Consolidate rules into accessible help section
- Add tooltips and contextual help throughout
- Include example turn walkthrough

#### 3. **Card Display Issues** 🟡
**Problem**: Challenge cards not rendering properly
- Text overflow on smaller screens
- Category labels misaligned
- Heat level indicators (🔥) inconsistent
- Preview hints button sometimes non-functional

**Fix Needed**:
- Implement responsive card layout
- Fix CSS for proper text wrapping
- Standardize heat level display
- Debug preview functionality
- Add loading states for card content

### Additional Improvements

#### UI/UX Enhancements
- [ ] Mobile responsiveness improvements
- [ ] Dark mode optimization (fits punk aesthetic)
- [ ] Better visual feedback for player actions
- [ ] Sound effects toggle
- [ ] Animation polish

#### Game Features
- [ ] Save/resume game state
- [ ] Custom challenge creation
- [ ] Difficulty level selection
- [ ] Alternative rule sets
- [ ] Score/achievement tracking

#### Technical Debt
- [ ] Code refactoring for maintainability
- [ ] Add unit tests
- [ ] Performance optimization
- [ ] Accessibility improvements (ARIA labels, keyboard nav)
- [ ] Cross-browser compatibility testing

## 📁 Project Structure (Planned)

```
emonogamy-game/
├── src/
│   ├── components/
│   │   ├── Board.js          # Game board component
│   │   ├── Card.js           # Challenge card component
│   │   ├── Player.js         # Player token component
│   │   ├── Dice.js           # Dice rolling component
│   │   └── Property.js       # Property management
│   ├── data/
│   │   ├── challenges.json   # All challenge cards
│   │   ├── properties.json   # Board properties
│   │   └── tokens.json       # Player tokens
│   ├── logic/
│   │   ├── movement.js       # Movement calculation (NEEDS FIX)
│   │   ├── gameState.js      # Game state management
│   │   └── rules.js          # Game rules engine
│   ├── styles/
│   │   ├── global.css        # Global styles
│   │   ├── board.css         # Board styles
│   │   └── cards.css         # Card styles (NEEDS FIX)
│   └── utils/
│       ├── validation.js     # Input validation
│       └── helpers.js        # Helper functions
├── docs/
│   ├── RULES.md              # Complete game rules
│   ├── FIXES.md              # Detailed fix documentation
│   └── CONTRIBUTING.md       # Contribution guidelines
├── tests/
│   └── (unit tests to be added)
└── README.md                 # This file
```

## 🚀 Getting Started (Development)

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Modern web browser

### Installation
```bash
git clone https://github.com/tmak-attack/emonogamy-game.git
cd emonogamy-game
npm install
npm start
```

### Testing
```bash
npm test
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Priority Issues
1. **Fix Movement Logic** - Most critical
2. **Improve Onboarding** - High impact
3. **Card Display Fixes** - User experience

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b fix/movement-logic`)
3. Make your changes
4. Test thoroughly
5. Commit with clear messages (`git commit -m 'Fix: Corrected dice roll calculation'`)
6. Push to your fork (`git push origin fix/movement-logic`)
7. Open a Pull Request

### Code Style
- Use ES6+ JavaScript
- Follow existing formatting conventions
- Comment complex logic
- Write meaningful commit messages

## 📝 License

This is an adult game intended for consenting partners 18+. 

## 🔗 Links

- Original Perplexity Labs App: https://www.perplexity.ai/apps/96f8355a-830c-4dcf-9395-3caa6c8e8a64
- Issues Tracker: https://github.com/tmak-attack/emonogamy-game/issues
- Discussions: https://github.com/tmak-attack/emonogamy-game/discussions

## 📞 Contact

Questions or suggestions? Open an issue or start a discussion!

---

🖤 Built with love (and a little bit of chaos) 🖤
