# Odyssey: Global Customs Operating System

Odyssey is a high-fidelity, role-based SaaS prototype designed to modernize international border management. It simulates a complete, end-to-end customs clearance workflow, offering distinct dashboards for both local port inspectors and global logistics administrators.

## 🚀 Features

Odyssey was built to fulfill strict real-world customs management requirements, featuring a massively upgraded "God-Mode" user experience.

### Core Architecture
- **Role-Based Access Control (RBAC):** Dynamic interface that shifts based on security clearance (Local Inspector vs. Global Admin).
- **Persistent Ambient UI:** Features a custom GLSL 3D wave shader and an interactive Three.js 3D globe that seamlessly flow behind all application routes.

### The Local Inspector Workflow (Clearance Station & Terminal Yard)
*Tools designed for boots-on-the-ground agents managing physical cargo.*
- **AI Tariff Classifier:** Instantly lookup and organize international HS tax codes.
- **Manifest Audit Trail:** A version-controlled ledger tracking all edits to shipping manifests with safe undo capabilities.
- **Smart FIFO Queue:** Sequential container management lining up checks based on arrival.
- **Document Security Checker:** Cryptographic fraud detection cross-examining Bills of Lading against a secure registry.
- **Tax Cost Sorter:** In-memory algorithm that instantly ranks cargo items based on tax revenue yielded.
- **Inspector Workload Planner:** Dynamic staff allocation managing port congestion across terminal lanes.
- **Container X-Ray Analysis:** A volumetric deep-scan simulation detecting contraband and density anomalies in physical cargo.

### The Global Admin Workflow (Control Tower)
*Macro-level tools for oversight agencies and supply chain directors.*
- **Customs Post Status Hub:** Real-time global congestion monitoring across massive ports (LAX, Rotterdam, Singapore).
- **Quickest Clearance Route:** AI pathfinding engine calculating alternative transit routes to bypass congested checkpoints.
- **Global Sanctions Ledger:** A cryptographic audit log tracking international embargoes, blocked corporate entities, and active global threat levels.

## 🛠 Tech Stack

Odyssey is built entirely as a modern, client-side React application.

- **Framework:** React 18 & Vite
- **Routing:** React Router v6
- **Styling:** Vanilla CSS3 (Advanced custom properties, alpha masking, grid layouts, fluid typography)
- **Icons:** Lucide React
- **3D Rendering:** `react-globe.gl` & `three.js` (for interactive global trade route visualizations)
- **Animations:** Custom CSS keyframes and `react-intersection-observer` (if applicable) for scroll reveals.

## 💻 Running Locally

To run the development server locally on your machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/abdealimak/reactjs-project.git
   ```
2. Navigate into the project directory:
   ```bash
   cd odyssey
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```
5. Open your browser to the localhost port provided in the terminal (usually `http://localhost:5173`).

## 📁 Project Structure

- `/src/components/layout/` - Core architectural wrappers (Console Sidebar, Navbars, Footers).
- `/src/components/sections/` - Major landing page marketing blocks.
- `/src/components/console/` - The specialized, role-locked SaaS tools (Tax Sorter, X-Ray Scanner, Route Optimizer).
- `/src/pages/` - Main view controllers handling routing between the Landing Page and the specific Console views.
- `/src/index.css` - The master stylesheet containing the complete design system, CSS variables, and animation keyframes.

---
*Built as a prototype for modernizing LogiCustoms border infrastructure.*
