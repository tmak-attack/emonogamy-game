# Contributing to (e)MOnogamy Game 🖤

Welcome to the (e)MOnogamy contribution guide! We're excited to have you help build this punk witchy relationship empire game. This guide will help you get started and make meaningful contributions.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- Git
- GitHub account
- Basic knowledge of JavaScript/React
- A sense of humor and appreciation for punk aesthetics 🤘

### Setting Up Development Environment

```bash
# 1. Fork the repository on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/emonogamy-game.git
cd emonogamy-game

# 3. Install dependencies
npm install

# 4. Start development server
npm start

# 5. Run tests
npm test
```

## 🎯 Priority Areas for Contribution

### 🔴 Critical Issues (High Priority)

#### 1. Movement Logic Bug Fix
**Files**: `src/logic/movement.js`, game board components
**Issue**: Players getting stuck, incorrect position tracking
**Skills Needed**: JavaScript, game state management
**Difficulty**: Medium-Hard

#### 2. Card Display Issues
**Files**: `src/components/Card.js`, `src/styles/cards.css`
**Issue**: Responsive layout problems, broken preview buttons
**Skills Needed**: CSS, React, responsive design
**Difficulty**: Medium

#### 3. Onboarding & Tutorial System
**Files**: New files needed, UI components
**Issue**: New users confused about gameplay
**Skills Needed**: UX design, React, user research
**Difficulty**: Medium-Hard

### 🟡 Enhancement Areas

- Mobile responsiveness improvements
- Dark mode optimization
- Performance enhancements
- Accessibility features
- Additional challenge categories
- Sound effects and animations

## 📋 Contribution Types

### 🐛 Bug Fixes
- Check [FIXES.md](./FIXES.md) for detailed bug documentation
- Look for issues labeled `bug` in GitHub Issues
- Test thoroughly before submitting PR

### ✨ Feature Development
- Discuss new features in Issues before coding
- Follow existing code patterns and style
- Include tests for new functionality

### 📝 Documentation
- Improve README, code comments, or guides
- Create tutorials or examples
- Update API documentation

### 🎨 Design & UX
- UI/UX improvements
- Asset creation (following punk/witchy aesthetic)
- Accessibility enhancements

## 🔧 Development Workflow

### Branching Strategy

```bash
# Create feature branch from main
git checkout main
git pull origin main
git checkout -b feature/your-feature-name

# For bug fixes
git checkout -b fix/bug-description

# For documentation
git checkout -b docs/what-youre-updating
```

### Making Changes

1. **Code Style**: Follow existing patterns
   - Use ES6+ JavaScript features
   - Consistent indentation (2 spaces)
   - Meaningful variable names
   - Comment complex logic

2. **Commit Messages**: Use clear, descriptive commits
   ```bash
   # Good examples
   git commit -m "Fix: Correct dice roll calculation in movement.js"
   git commit -m "Add: Responsive card layout for mobile devices"
   git commit -m "Update: README with new setup instructions"
   
   # Follow pattern: Type: Description
   # Types: Fix, Add, Update, Remove, Refactor
   ```

3. **Testing**
   ```bash
   # Run all tests
   npm test
   
   # Run tests for specific file
   npm test -- Card.test.js
   
   # Check code coverage
   npm run test:coverage
   ```

### Pull Request Process

1. **Before Submitting**
   - [ ] Code follows project style guidelines
   - [ ] All tests pass
   - [ ] No console errors or warnings
   - [ ] Documentation updated if needed
   - [ ] Self-review of changes completed

2. **PR Title & Description**
   ```markdown
   Fix: Movement logic causing player position desync
   
   ## Changes
   - Refactored position calculation in movement.js
   - Added boundary validation
   - Fixed edge case when passing GO
   
   ## Testing
   - [ ] Tested normal movement
   - [ ] Tested corner landings
   - [ ] Tested rapid dice clicks
   - [ ] No position desync observed
   
   Fixes #123
   ```

3. **Review Process**
   - Maintainer will review within 3-5 days
   - Address feedback promptly
   - Keep PR focused and atomic
   - Be open to suggestions

## 🧪 Testing Guidelines

### Required Tests
- **Unit Tests**: For utility functions and logic
- **Component Tests**: For React components
- **Integration Tests**: For game flow
- **Manual Testing**: Cross-browser, device testing

### Test Organization
```
tests/
├── unit/
│   ├── movement.test.js
│   └── gameState.test.js
├── components/
│   ├── Card.test.js
│   └── Board.test.js
└── integration/
    └── gameFlow.test.js
```

### Writing Tests
```javascript
// Example test structure
describe('Movement System', () => {
  test('should calculate correct position after dice roll', () => {
    const movement = new MovementSystem();
    const result = movement.rollDiceAndMove('player1');
    
    expect(result.success).toBe(true);
    expect(result.newPosition).toBeGreaterThanOrEqual(0);
    expect(result.newPosition).toBeLessThan(40);
  });
});
```

## 🎨 Design Guidelines

### Visual Aesthetic
- **Color Palette**: Dark backgrounds, neon accents
- **Typography**: Modern, edgy fonts
- **Icons**: Punk/goth/witchy themes (🖤, 🔥, 🔮, 💀)
- **Layout**: Clean but with attitude

### Content Guidelines
- Keep the playful, adult tone
- Respect the punk/witchy theme
- Ensure content is consensual and safe
- Follow safety guidelines in README

## 🚨 Code of Conduct

### Our Standards
- **Respectful Communication**: Be kind and constructive
- **Inclusive Environment**: Welcome all contributors
- **Focus on Code**: Keep discussions technical and productive
- **Adult Content**: This is an adult game, but maintain professionalism

### Unacceptable Behavior
- Harassment or discrimination
- Toxic or unconstructive criticism
- Spam or off-topic discussions
- Sharing of actual explicit content (game is text-based)

## 🏆 Recognition

### Contributors
All contributors will be:
- Listed in README contributors section
- Mentioned in release notes for their contributions
- Invited to join project discussions
- Given credit for their work

### Maintainer Expectations
- Responsive to PRs and issues
- Clear communication about project direction
- Recognition of contributor efforts
- Maintenance of welcoming environment

## 📚 Resources

### Development
- [React Documentation](https://reactjs.org/docs)
- [Jest Testing Framework](https://jestjs.io/docs)
- [CSS Grid/Flexbox](https://css-tricks.com/snippets/css/complete-guide-grid/)

### Project Specific
- [FIXES.md](./FIXES.md) - Detailed bug documentation
- [README.md](../README.md) - Project overview
- [Issues](https://github.com/tmak-attack/emonogamy-game/issues) - Current bugs and features

## 🤔 Questions?

### Getting Help
1. **Check Documentation**: README, FIXES.md, code comments
2. **Search Issues**: Someone might have asked already
3. **Create New Issue**: Use issue templates
4. **Start Discussion**: For broader topics

### Issue Templates
When creating issues, use our templates:
- **Bug Report**: For reporting problems
- **Feature Request**: For suggesting enhancements
- **Question**: For getting help

## 🎉 Thank You!

Every contribution, no matter how small, helps make (e)MOnogamy better. Whether you're:
- Fixing a typo in documentation
- Solving a critical bug
- Adding a new feature
- Improving accessibility

Your work is appreciated and valuable to the community.

---

**Happy coding, and let's build something beautifully chaotic together!** 🖤🔥

*Last updated: October 2, 2025*
