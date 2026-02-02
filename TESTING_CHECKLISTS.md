# Testing Checklists for The Assistant Coach Suite

## Quick Start
Before testing, start each app:
```bash
# Practice Planner (Drill Generator)
cd /Users/ars46/lacrosse-drill-generator && npm run dev
# → http://localhost:3100

# Shot Tracker
cd /Users/ars46/lacrosse-shot-tracker && npm run dev
# → http://localhost:3080

# GameStat
# Open /Users/ars46/yale-gameday-stats/index.html in browser
# Or deploy to see PWA features
```

---

## 1. PRACTICE PLANNER (Drill Generator)
**URL**: http://localhost:3100

### Core Functionality
- [ ] Page loads without console errors
- [ ] "Randomize Drill" button is visible and clickable
- [ ] Button shows "Randomizing..." during animation (~650ms)
- [ ] Configuration cards appear after randomization:
  - [ ] Field type with dimensions
  - [ ] Matchup (e.g., "3v2", "Offense +1")
  - [ ] Constraint (amber card)

### Field Diagram
- [ ] SVG field renders with green background
- [ ] Blue dots for offense players (numbered)
- [ ] Red X marks for defense players
- [ ] Purple "G" for goalie (when applicable)
- [ ] Goal marker positioned correctly

### Drill Generation
- [ ] "Generate Drill Instructions" button works
- [ ] Shows "Generating..." while API calls
- [ ] Drill description appears in panel below
- [ ] Description has proper formatting

### Re-roll Buttons
- [ ] ↻ Field - changes only field type
- [ ] ↻ Numbers - changes only player counts
- [ ] ↻ Constraint - changes only constraint
- [ ] ↻ Goal - changes only goal position
- [ ] Each re-roll clears drill description

### Edge Cases
- [ ] Multiple rapid clicks don't break UI
- [ ] All 8 field types generate correctly
- [ ] API error doesn't crash app

### Mobile
- [ ] Layout responsive at 375px width
- [ ] Buttons large enough to tap
- [ ] Text readable on small screens

---

## 2. SHOT TRACKER
**URL**: http://localhost:3080

### Initial Load
- [ ] Page loads and connects to Supabase
- [ ] Session selector visible in header
- [ ] Field diagram renders

### Session Management
- [ ] Can create new session
- [ ] Can select existing session
- [ ] Can delete session (with confirmation)
- [ ] Session mode shows (Offense/Defense/Scout)

### Field Interactions
- [ ] Field renders with proper dimensions
- [ ] Zoom buttons cycle (Full → Box → XZoom)
- [ ] Grid toggle works
- [ ] Hash toggle works
- [ ] Wall zone toggle (red zone)
- [ ] Paint zone toggle (orange zone)

### Shot Recording Flow
- [ ] Clicking field starts shot flow
- [ ] Player selection appears
- [ ] Hand selection (Left/Right)
- [ ] Result selection (Goal/Save/Wide/High/Post/Blocked)
- [ ] Additional options for goals (Assisted, Shot Type, Chipped)
- [ ] Shot appears on field with correct color

### Shot Map
- [ ] Goals show as green dots
- [ ] Saves show as red dots
- [ ] Other results show appropriate colors
- [ ] Dots positioned at click location

### Roster (Offense Mode)
- [ ] Player list displays
- [ ] Can add new player
- [ ] Can edit player name/number
- [ ] Can delete player
- [ ] Shot counts update per player

### Defense Roster (Defense Mode)
- [ ] Defender list displays
- [ ] Can add/edit/delete defenders
- [ ] Tracks shots against each defender

### Reports
- [ ] Report button opens modal
- [ ] Shows session stats (shots, goals, xG)
- [ ] Player-by-player breakdown
- [ ] Export option works

### Data Persistence
- [ ] Shots persist after page refresh
- [ ] Session data syncs to Supabase
- [ ] Roster persists

### Mobile
- [ ] Compact header on phone
- [ ] Roster toggle button works
- [ ] Field responsive
- [ ] Touch targets large enough

---

## 3. GAMESTAT
**URL**: Open `/Users/ars46/yale-gameday-stats/index.html`

### Setup Flow
- [ ] Setup overlay appears on first load
- [ ] Can enter team name
- [ ] Can select team color
- [ ] Can skip/complete roster setup
- [ ] Main app loads after setup

### Header
- [ ] Game clock displays (MM:SS)
- [ ] Clock starts/pauses on click
- [ ] Quarter buttons (1-4) work
- [ ] Current quarter highlighted
- [ ] Connection indicator visible

### Voice Input
- [ ] Mic button opens voice overlay
- [ ] Browser requests mic permission
- [ ] Live transcript displays
- [ ] Parsed result shows in green box
- [ ] Confirm button records stat
- [ ] Cancel closes overlay

### Stats Recording
- [ ] Voice: "Player 23 goal" records correctly
- [ ] Stats table updates immediately
- [ ] Player totals increment
- [ ] Team totals update
- [ ] Shooting percentage calculates

### Stats Display
- [ ] Table shows all players
- [ ] Columns: #, Name, G, SOG, Shots, etc.
- [ ] Click column header to sort
- [ ] Leading stat highlighted yellow
- [ ] Rows alternate background

### Roster
- [ ] Can add players (number + name)
- [ ] Can edit player info
- [ ] Can delete players
- [ ] Roster persists

### Mode Toggle
- [ ] Game mode (dark theme)
- [ ] Practice mode (light theme)
- [ ] Toggle switches correctly

### Data Persistence
- [ ] Stats persist on refresh
- [ ] Roster persists
- [ ] Settings persist
- [ ] Supabase sync works

### PWA Features
- [ ] Can install to home screen
- [ ] App icon displays
- [ ] Launches in standalone mode
- [ ] Works offline (limited)

### Mobile
- [ ] Compact layout on phone
- [ ] Clock tappable
- [ ] Voice button accessible
- [ ] Table scrollable horizontally

---

## Common Issues to Watch For

### All Apps
- [ ] Console errors (open DevTools)
- [ ] Slow/frozen UI
- [ ] Data not saving
- [ ] Broken layouts on resize

### API/Network
- [ ] Supabase connection failures
- [ ] Slow API responses
- [ ] Offline handling

### Mobile
- [ ] Touch targets too small
- [ ] Keyboard covers inputs
- [ ] Scroll issues
- [ ] Orientation changes break layout

---

## Browser Testing Matrix

| Feature | Chrome | Safari | Firefox | Mobile Safari | Mobile Chrome |
|---------|--------|--------|---------|---------------|---------------|
| Practice Planner | | | | | |
| Shot Tracker | | | | | |
| GameStat | | | | | |
| Voice Input | | | | | |
| PWA Install | | | | | |

---

## Reporting Bugs

For each bug found, note:
1. **App**: Which app
2. **Steps**: How to reproduce
3. **Expected**: What should happen
4. **Actual**: What actually happened
5. **Screenshot**: If visual issue
6. **Console**: Any error messages
7. **Device/Browser**: What you tested on
