# JobFolio

JobFolio is a responsive React job dashboard that helps you **search, save, and track remote developer jobs**.  
It’s designed to be recruiter‑friendly, modular, and scalable — with clean UI components, semantic HTML, and future API integration.

---

## 🚀 Features

- **Sidebar Navigation**: Semantic, accessible nav with links to Home, Saved Jobs, and Job Details
- **Header Layout**: Reusable header component with page title
- **Home Page**: Search bar + filters for job search (API integration planned)
- **Saved Page**: Grid of compact job cards with shadow + border styling
- **JobCard Component**:
  - Displays job title, company, location, and status
  - Status badges styled by type (Saved, Applied, Interview)
  - Remove button with confirmation popup
  - API‑ready props (`id`, `onRemove`) for future backend integration

---

## 🛠️ Tech Stack

- **React + Vite** (fast dev environment)
- **React Router** (layout routes with `<Outlet />`)
- **Zustand** (state management, planned)
- **CSS Modules + layout.css** (scoped, responsive styling)
- **ESLint + Prettier** (linting and formatting)

---

## 📚 Concepts Learned

- **Reusable components**: modular, semantic, accessible
- **Props**: pass data into components for flexibility
- **map()**: render lists of components from arrays
- **State management**: handle dummy data and removals
- **API readiness**: prepare components for dynamic data
- **Git discipline**: clean commits, handling `.gitignore` and `.gitkeep`

---

## 📈 Progress

### Week 1

- Initialized Vite project and GitHub repo
- Installed ESLint + Prettier, set up lint/format scripts
- Created folder structure (`components`, `pages`, `styles`, `store`, `data`, `lib`)
- Built layout route with React Router (`Layout.jsx` + `<Outlet />`)
- Styled layout shell with CSS Grid + responsive media queries

### Week 2

- Implemented **Sidebar navigation** (semantic HTML + icons)
- Added **Header layout** component
- Scaffolded **Home dashboard** layout
- Added **search bar + filters** to Home
- Created **JobCard.jsx** (reusable job card component)

### Week 3

- Built **Saved.jsx** with grid of JobCards
- Styled JobCards with border, shadow, bold colored status
- Enhanced JobCard with:
  - Status formatting
  - Remove button + confirmation popup
  - API‑ready props
- Introduced **dummy data + map()** for rendering JobCards
- Prepared for **future API integration** (replace dummy data with backend jobs)

---

## 🔮 Next Steps

- Integrate job search API
- Add Kanban board for application tracking
- Add analytics page
- Improve accessibility and testing

---

## 🏃 Getting Started

To run locally:

```bash
# clone repo
git clone https://github.com/patricia-k-m/jobfolio.git
cd jobfolio

# install dependencies
npm install

# start dev server
npm run dev
```
