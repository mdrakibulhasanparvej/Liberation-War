# Liberation War Archive

## Project Name

**Liberation War Archive**

---

## Purpose

The Liberation War Archive is a web-based Single Page Application (SPA) built with React. Its goal is to **preserve and showcase the history of Bangladesh's Liberation War** through documents, interviews, and photographs, making it accessible to the public in an organized and interactive way.

---

## Live URL

[Your Live Website URL Here]

> Example: `https://liberation-war-archive.vercel.app/`

---

## Key Features

- **Homepage**
  - Introduction to the archive and its historical significance.
  - Featured sections for documents, interviews, and photographs.

- **Documents Section**
  - Catalog of historical documents.
  - Filtering by type and date.
  - Detailed view with descriptions and source information.
  - Option to download documents.

- **Interviews Section**
  - Collection of recorded interviews with freedom fighters and civilians.
  - Biographical details and summaries.
  - Audio player for listening to interviews.

- **Photographs Gallery**
  - Curated images capturing key moments, events, and people.
  - High-resolution images with zoom functionality and download option.

- **Contact Form**
  - Form for inquiries, feedback, or contributing materials.
  - Fields: Name, Email, Subject, Message, File Upload.
  - Toast notifications for submission success/error.

- **Responsive Design**
  - Fully responsive using **Tailwind CSS** and **DaisyUI** components.
  - Mobile, tablet, and desktop support.

- **Routing**
  - SPA navigation with **React Router**.
  - Parent Layout with Header/Footer and child routes.

- **Interactive Features**
  - Form validation using **React Hook Form** and **Yup**.
  - Toast notifications with **React Toastify**.
  - Smooth animations with **Framer Motion**.

---

## NPM Packages Used

- `react` – Frontend library for building UI
- `react-dom` – Rendering React components
- `react-router` – Core routing library for SPA
- `tailwindcss` – Utility-first CSS framework
- `daisyui` – Tailwind CSS component library
- `framer-motion` – Animation library for React
- `react-toastify` – Toast notifications
- `react-hook-form` – Form handling and validation
- `@hookform/resolvers` – Validation resolver for react-hook-form
- `yup` – Schema validation library
- `axios` – HTTP requests
- `react-icons` – Icon library for React
- `swiper` – Carousel/slider for photographs
- `sweetalert2` & `sweetalert2-react-content` – Stylish alerts and modals
- `typewriter-effect` / `react-simple-typewriter` – Animated text effects
- `prettier` – Code formatting tool

---

## Installation & Run Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/liberation-war-archive.git
cd liberation-war-archive

# Install dependencies
npm install

# Run the app in development mode
npm run dev
```

src/
├─ components/
│ ├─ layout/ # Header, Footer, Layout
│ ├─ documents/ # DocumentCard, DocumentFilter
│ ├─ interviews/ # InterviewCard, AudioPlayer
│ ├─ photographs/ # PhotoGallery
│ └─ ui/ # Buttons, Inputs, ToastContainer
├─ data/ # Sample JSON data for documents, interviews, photos
├─ pages/ # Home, Documents, DocumentDetails, Interviews, InterviewDetails, Photographs, Contact
├─ routes/ # AppRoutes.jsx
├─ main.jsx # Entry point
└─ index.css
