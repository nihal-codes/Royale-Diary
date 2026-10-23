<div align="center">

# 🚀 MERN Stack Industrial Training Portfolio

### A 4-Week Full-Stack Development Internship at **Softricity**, Panipat, Haryana

![MERN](https://img.shields.io/badge/Stack-MERN-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

*From React fundamentals to a production-style, JWT-secured full-stack e-commerce platform, in 28 days.*

</div>

---

## 📌 Overview

This repository documents my one-month industrial training in the **MERN stack** (MongoDB, Express.js, React, Node.js) at **Softricity**, Panipat. The program covered the full web development lifecycle: frontend architecture, state management, REST API design, database modeling, authentication and authorization, and deployment. It ended with a capstone **E-Commerce platform built independently, without AI assistance**.

I also took part in AI-assisted design and generative media tasks, which gave me exposure to prompt-driven workflows alongside traditional engineering.

---

## 🛠️ Tech Stack & Tooling

**Frontend:** React, React Router DOM, React Hook Form, Tailwind CSS, ShadCN UI, Recharts
**State Management:** Context API, Redux Toolkit (theory), Zustand, Recoil (exploration)
**Backend:** Node.js, Express.js, Middleware, CORS
**Database:** MongoDB, Mongoose ODM
**Auth & Security:** JWT, bcrypt, Protected Routes, Role-Based Access Control
**API & Data:** Fetch API, Axios (instances, interceptors), JSON Server (mock REST APIs)
**Tools:** Git, GitHub, GitHub Pages, Thunder-client-style API testing

---

## 🗂️ Projects

| # | Project | Highlights |
|---|---|---|
| 1 | **To-Do Application** | Component architecture, state lifting, conditional rendering, `useEffect`, `useContext`, LocalStorage persistence, responsive UI |
| 2 | **Analytics Dashboard + Pomodoro Timer** | Data visualization with Recharts, theme switcher, state management exploration |
| 3 | **Product Fetch App** | Consumed REST data via Fetch API and Axios; responsive layout |
| 4 | **Educational Company Landing Page** | Pixel-faithful implementation from a reference design; deployed to the web |
| 5 | **Canvas Showcase Projects (x2)** | Interactive canvas-based visual experiences built with AI-assisted tooling |
| 6 | **Full-Stack E-Commerce Platform (Capstone)** | Built solo, no AI assistance. React + Tailwind + Express + Mongoose, JWT/bcrypt auth, middleware-protected routes, role-based admin controls |

---

## 🏆 Capstone: E-Commerce Platform

**Architecture:** MVC-style REST backend with a React SPA frontend.

- ✅ RESTful API design with modular controllers and routes
- ✅ Authentication using **JWT + bcrypt** password hashing
- ✅ **Middleware-based route protection** on category and admin routes
- ✅ **Role verification (RBAC)** so admin-only options are shown just to admins
- ✅ Mongoose schemas with MongoDB persistence
- ✅ Responsive, Tailwind-styled UI

**Engineering reflection:** While building the auth layer, I analyzed weaknesses in client-side JWT storage and token handling. This led me to research managed identity solutions (**Clerk**, **MSG91**, **SuperProfile**) as alternatives to hand-rolled authentication, and I iterated on the system's design accordingly.

---

## 📅 Training Journey

<details>
<summary><b>Week 1: Frontend Foundations (Days 1–7)</b></summary>

- **Day 1:** React fundamentals, component model, project setup
- **Day 2:** Props, `useState`, Tailwind CSS setup and utility-first styling
- **Day 3:** Began the To-Do app; props as children, state lifting, conditional rendering, event handling, `useEffect`, `useContext`, LocalStorage basics
- **Day 4:** Completed the To-Do app; React Router DOM, React Hook Form, `useRef`, `useMemo`
- **Day 5:** Redux Toolkit concepts (actions, reducers, slices, store, state); built the dashboard and Pomodoro project with Recharts; explored Recoil and Zustand
- **Day 6:** Fetch API and GET requests; started a data-driven product project

</details>

<details>
<summary><b>Week 2: APIs, Axios & Backend Introduction (Days 8–14)</b></summary>

- **Day 7:** Built a landing page from a reference design
- **Day 8:** Finished the landing page; continued the fetch project
- **Day 9:** Completed the fetch project; started a Figma-to-code AI-assisted design project
- **Day 10:** Mastered **GET, POST, PUT, PATCH, DELETE**; deployed two projects and published one on LinkedIn; Axios (instances, interceptors)
- **Day 11:** Basic auth system with JSON Server mock APIs; Express fundamentals (routing, URL/query params, request body, headers) and architecture patterns; made the products app responsive
- **Day 12:** Improved To-Do UI and responsiveness; MongoDB installation, setup and CRUD

</details>

<details>
<summary><b>Week 3: Authentication & Security (Days 15–21)</b></summary>

- **Day 13:** Express API creation, middleware, Mongoose connection, CORS; built a full CRUD app with React, Express and Mongoose
- **Day 14:** Built a backend project with user credentials and a post-management module backed by a database
- **Day 15:** JWT (sign, decode, verify); advanced Mongoose queries (`findByIdAndUpdate`, `limit`, `sort`)
- **Day 16:** **bcrypt** password hashing; login/register with JWT delivered to the frontend; protected routes
- **Day 17:** Consolidated a complete authentication flow (JWT + bcrypt + LocalStorage + protected routes)
- **Day 18:** Kicked off the **capstone E-Commerce project** (solo, no AI); controllers and initial frontend

</details>

<details>
<summary><b>Week 4: Capstone & AI-Assisted Media (Days 22–28)</b></summary>

- **Day 19:** Integrated JWT/bcrypt auth with middleware on category routes; identified and documented design flaws
- **Day 20:** Researched auth weaknesses and managed alternatives (Clerk, MSG91, SuperProfile); surveyed Next.js, Angular and Vue
- **Day 21:** Learned **ShadCN UI**; built a mini project for an educational company; deployed a daily-diary site on **GitHub Pages**; added **role verification** to the capstone
- **Day 22:** Continued the E-Commerce build; began a dermatology skincare commercial project using generative video tools (Gemini, Google Flow), evaluating platforms such as Kling, OpenArt and Freepik
- **Day 24:** Continued the commercial project with a third video-generation model, learning how demanding quality control is in generative media pipelines
- **Sundays:** Self-directed exploration and recovery

</details>

---

## 💡 Key Learnings

- **Full-stack thinking:** how the frontend, API, and database fit together end to end
- **Security awareness:** hashing, token-based auth, route protection, RBAC, and the limits of each
- **Developer discipline:** I committed to GitHub infrequently early on and have since adopted a commit-early, commit-often workflow
- **Independence:** shipped a complete capstone without AI assistance, then compared that experience against AI-assisted workflows
- **Generative AI tooling:** hands-on evaluation of text-to-video platforms and the trade-offs involved

---

## 🔭 Roadmap / Areas for Growth

- [ ] Deepen **useNavigate()** and advanced React Router patterns
- [ ] In-depth **Zustand** and **Recoil**; hands-on Redux Toolkit implementation
- [ ] Explore **Next.js** and server-side rendering
- [ ] Add automated testing and CI/CD

---

## 🔗 Links

- 🌐 **Live Demo:** `https://official-sevra.vercel.app/`
- 📁 **Capstone Repo:** `https://github.com/nihal-codes/Sevra_E_commerce`
- 🐙 **GitHub:** [@nihal-codes](https://github.com/nihal-codes)

---

## 📊 Training at a Glance

| Metric | Value |
|---|---|
| **Duration** | 28 days |
| **Hours in-company** | 144+ hrs |
| **Self-study hours** | 80+ hrs |
| **Total engagement** | ~200+ hrs |
| **Projects delivered** | 6 |
| **Git commits** | 40+ |
| **Deployments** | 4 projects deployed |

---

## 🙏 Acknowledgements

Thanks to the team at **Softricity, Panipat** for the structured, hands-on mentorship and for the opportunity to build real projects.

---
