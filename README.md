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

#### 1. Buggy Movement Logic 🔴
**Problem**: Dice roll and board movement system is unreliable
- Players getting stuck on certain squares
- Inconsistent position tracking
- Movement count doesn't match dice roll

**Fix Needed**:
- Refactor movement calculation algorithm
- Implement proper state management for player positions
- Add validation for board boundaries
- Test edge cases (landing on corners, passing go, etc.)

#### 2. Onboarding Clarity 🟡
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

#### 3. Card Display Issues 🟡
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

## 🚀 Future Features & Improvements

*The following enhancements have been proposed to significantly improve user experience, game functionality, and overall engagement. See [Issue #1](https://github.com/tmak-attack/emonogamy-game/issues/1) for detailed implementation plans.*

### 🎯 Priority 1: Enhanced Game Logic

#### Movement System Overhaul
- **Sequential Movement Validation**: Ensure pieces move in proper order without skipping, duplicating, or jumping incorrectly
- **Turn Order Enforcement**: Strict validation of player turn sequence
- **Position Tracking**: Robust state management with rollback capabilities
- **Debugging Tools**: Movement history logging and validation reporting

### 🃏 Priority 2: Advanced Card System

#### Interpretation Hints
- **Universal Hints**: Every card includes expandable "Ideas and interpretations" sections
- **Progressive Disclosure**: 3-5 specific suggestions that get increasingly explicit
- **Smart UI**: Collapsible sections with smooth animations

#### Card Library & Browser
- **Browse All Cards**: Comprehensive card library with search functionality
- **Category Navigation**: Tabbed interface (Intimate, Passion, Steamy, Voyeur, Special)
- **Personal Collections**: Favorites system with heart buttons and completion tracking
- **Smart Filtering**: By difficulty, category, completion status, and personal preferences

#### Skip-to-Redraw System
- **Smart Redraw**: "Too vanilla? Draw something spicier" prompts
- **Anti-Repeat Logic**: Prevents immediate repeats of recently skipped cards
- **Memory System**: Tracks skipped cards to improve future suggestions

#### Enhanced Card Display
- **Visual Difficulty**: 1-5 flame (🔥) indicators
- **Interactive Elements**: Collapsible hint sections, favorite hearts, queue management
- **Status Tracking**: Completion badges and progress indicators

### 💬 Priority 3: Language & Tone Revolution

#### Explicit, Snarky Overhaul
- **Mature Language**: Complete rewrite with explicit terms and unapologetic emo/punk attitude
- **Example Transformations**:
  - "Start Game" → "Start Fucking"
  - Skip prompts → "Too vanilla for you? Let's find something spicier"
  - Overall vibe → "We're too old for vanilla bullshit" energy
- **Safety Balance**: Maintain consent framework while embracing explicit language

#### "Slut Mode" Feature
- **Language Toggle**: Extra explicit variants for all text
- **Consistent Theming**: Punk/witchy aesthetic with mature, direct communication
- **Cultural References**: Embrace emo/punk cultural touchstones

### 🎨 Priority 4: UI/UX Excellence

#### Enhanced Interface
- **Dark Mode Optimization**: Perfect fit for punk aesthetic
- **Mobile Excellence**: Responsive design for all devices
- **Audio Integration**: Punk/witchy themed sound effects toggle
- **Animation Polish**: Smooth card flips, transitions, and interactions

#### Bonus Features
- **Tonight's Queue**: Planning system for favorite challenges
- **Achievement System**: Statistics and completion tracking
- **Random Generator**: "Random Horny Challenge" quick-draw button
- **Customization**: Difficulty preferences and personalized content

### 📋 Implementation Phases

**Phase 1: Critical Fixes** (Movement logic, game stability)  
**Phase 2: Card System** (Hints, library, skip-to-redraw)  
**Phase 3: Language Overhaul** (Explicit rewrite, Slut Mode)  
**Phase 4: UI/UX Polish** (Dark mode, mobile, animations)

### 🤝 Collaboration Guidelines

#### For Contributors
- **Language Sensitivity**: Understand this is explicit adult content with punk/emo themes
- **Code Standards**: Follow existing conventions while implementing enhancements
- **Testing Priority**: All movement logic changes require thorough testing
- **Safety First**: Always maintain consent framework regardless of language changes

#### Success Metrics
- Zero movement sequence bugs reported
- Increased card engagement (more favorites, fewer skips)
- Improved user retention through better onboarding
- Consistent brand voice throughout application

---

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
