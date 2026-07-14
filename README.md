# Ms. Jaspreet's Computer Science Portal (JASCP)

A premium, interactive, and responsive academic web portal for computer science students, offering structured syllabus overviews, notes, assignments, practicals, past question papers, and teacher portfolios.

## Structure
```
ms-jascp-website/
├── index.html            # Portal Home
├── about.html            # Biography & Pedagogical Approach
├── qualifications.html   # Timeline & Certifications
├── subjects.html         # Curriculum Overview
├── notes.html            # Searchable Chapter Notes
├── assignments.html      # Track Student Work & Submissions
├── question-papers.html  # Exam Archive
├── practicals.html       # Laboratory Experiments
├── assets/
│   ├── css/
│   │   ├── style.css         # Typography, Core Theme & Variables
│   │   ├── responsive.css    # Mobile Navigation & Layout Adaptability
│   │   └── animations.css    # Micro-interactions, Transitions & Hover Styles
│   ├── js/
│   │   ├── main.js           # Navigation drawer, menu toggling, interactive animations
│   │   ├── search.js         # Real-time data search/filtering engine
│   │   └── theme.js          # Persistent light/dark scheme selector
│   ├── images/
│   │   ├── teacher.jpg       # Teacher Portrait
│   │   ├── hero-bg.jpg       # Hero Background Image
│   │   └── logo.png          # Portal Branding Logo
│   ├── icons/
│   └── docs/                 # PDF/DOC Download folders
```

## Features
- **Responsive Layout**: Adapts smoothly from mobile displays to ultrawide screens.
- **Persistent Theme Toggler**: Instantly toggles between light and dark modes, saving user choices in local storage.
- **Dynamic Search & Filters**: Clientside JavaScript filters files, assignments, and practicals dynamically based on search queries and categories.
- **Interactive Qualifications Timeline**: Interactive display of academic qualifications and job experience.
- **Practical Experiments Compiler Links**: Links to online sandboxes and direct download options for coding tasks.

## Quick Start
Open `index.html` in your browser, or spin up a local development server in this directory:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000`.
