# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# IncuGameCon
IncuGameCon offers expert consulting and development services for gaming enthusiasts, developers, and investors. We combine market insights, IP expertise, and cutting-edge technology to create innovative, engaging games that resonate globally. Join us to make a lasting impact in the gaming world.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (version 6 or higher)

### Installation

Clone the repository:
```
git clone https://github.com/your-username/incugamecon.git
cd incugamecon
```
Install dependencies: ``` npm i ```

### Development: 
To start the development server, run: ``` npm run dev``` This will start the Vite development server and you can view the application at http://localhost:3000.
### Build
To build the project for production, run: ```npm run build```
The built files will be in the dist directory.
### Preview
To preview the production build, run: ```npm run preview```
### Deployment
This project uses GitHub Actions to deploy to Firebase Hosting. The deployment workflow is defined in main.yml.
To deploy manually, run:
```
npm install -g firebase-tools
firebase deploy --only hosting
```

## Project Details
### Components
1. navbar-section.vue: Navigation bar component.
2. footer-section.vue: Footer component.
3. hero-section.vue: Hero section component.
4. loading.vue: Loading screen component.
5. projects-section.vue: Projects section component.
6. services-section.vue: Services section component.
7. team-section.vue: Team section component.

### Views
1. Home.vue: Home page view.
2. Services.vue: Services page view.
3. Preview-service.vue: Service preview page view.
4. Projects.vue: Projects page view.
5. Team.vue: Team page view.
6. Contact.vue: Contact page view.

### Store
The store is defined in store.js and contains the data for the application, including navigation links, hero section content, services, projects, and team members.
