<div align="center">
  <img src="public/awssbg/aws-sbg-logo-transparent.png" width="150" alt="AWSSBG Logo" />
  <h1>AWSSBG SWU Grand Freshmen Meetup 2026 Photobooth</h1>
  <p>A responsive, modern React-based digital photobooth built for the SWU Grand Freshmen Meetup 2026, powered by AWSSBG SWU.</p>
</div>

---

## 📖 Table of Contents

1. [Overview](#-overview)
2. [Key Features](#-key-features)
3. [Tech Stack](#-tech-stack)
4. [File Structure](#-file-structure)
5. [Getting Started](#-getting-started)
6. [Cloudinary Integration](#-cloudinary-integration)
7. [Responsive Optimization](#-responsive-optimization)

---

## 🌟 Overview

This photobooth application is a custom React web application developed to provide a fun, engaging, and premium interactive experience for Southwestern University (SWU) freshmen. It accesses the user's camera feed, runs a visual count-down timer to capture three separate snaps, styles the snaps into a commemorative vertical photo strip, and uploads the results to the cloud so users can immediately download their strip using a dynamic QR code.

---

## ⚡ Key Features

### 🏡 Welcome Screen

- Interactive landing page showcasing a smooth, infinite marquee of mock photo strips.
- Playful animated Panpan mascot assets that adapt size dynamically across tablet, desktop, and mobile viewports.
- Integrated setup loader simulating the startup loading delay with an animated progress meter.

### 📸 Camera Room (`/camera`)

- Responsive camera container layout displaying the live camera video stream in an optimal aspect ratio.
- Automatic 3-photo timer sequence with real-time screen overlays and sound guidance.
- Clean header/overlay branding showing the logo and `"Powered by AWSSBG"`.

### 🖼️ Commemorative Photo Strip

- Combines the 3 captured snaps into a vertical photo strip frame.
- Beautiful warm-orange and coral gradient backdrops referencing the official event branding palette.
- High-contrast transparent AWSSBG logo and subtitle displayed in a clean, proportioned format at the base of the strip.

### 📲 Results Page & QR Code Distribution

- Auto-generates a high-quality QR code encoding the uploaded photo strip URL.
- Enables instant download by scanning the QR code via mobile.
- Features a **"Try Again?"** primary action button to easily redirect users back to the camera room for another capture.
- Features a **"Back to Home"** secondary button to return to the welcome gate.

### 📱 Responsive Layout & Vertical Scrolling

- Automatically stacks panels vertically on mobile/narrow viewports.
- Replaces rigid body-level overflows with responsive scrolling (`overflow-x: hidden`), ensuring the site works and scrolls gracefully on all physical devices and screen heights.

---

## 🛠️ Tech Stack

- **Core**: React 18, Vite, React Router DOM (v6)
- **Styling**: Vanilla CSS + Tailwind CSS (responsive layouts, gradients, animations)
- **Canvas Generation**: `html2canvas` (renders the DOM-based PhotoStrip component to a downloadable image block)
- **QR Code**: `react-qr-code`
- **Cloud Storage**: Cloudinary API (stores generated photo strip images and returns URLs for scanning/downloading)

---

## 📂 File Structure

```text
cite-photobooth/
├── public/
│   ├── awssbg/
│   │   ├── aws-sbg-logo-transparent.png  # Transparent event branding logo
│   │   └── aws-sbg-logo.jpg              # Default event branding logo
│   └── awscc/                            # Legacy/mascot assets (e.g. panpan images)
├── src/
│   ├── components/
│   │   ├── Camera/                       # Camera stream rendering and countdown overlay
│   │   ├── Logo/                         # Event branding logo generator
│   │   ├── PhotoStrip/                   # Framed layout containing the captured photos
│   │   ├── Result/                       # QR code scanner and photo action page
│   │   └── WelcomeScreen/                # Landing portal and mock strip marquee
│   ├── hooks/
│   │   ├── useCameraStream.js            # Manages camera feed permissions and track cleanups
│   │   ├── useCloudinaryUpload.js        # Configures DOM capturing and uploading to Cloudinary
│   │   └── usePhotoCapture.js            # Controls photo snapshot sequences and interval timer state
│   ├── App.css                           # Global styling modifications and variables
│   ├── App.jsx                           # Route setup
│   └── main.jsx                          # App bootstrap
├── index.html                            # Root template; sets title and favicon
├── package.json                          # Dependencies list
└── vercel.json                           # Hosting configurations
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed.

### ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rodrigomarcelo643/cite-photobooth.git
   cd cite-photobooth
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### 💻 Running Locally

To launch the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 🏗️ Building for Production

To build a highly optimized production bundle:

```bash
npm run build
```

The output files will be created in the `dist/` directory.

---

## ☁️ Cloudinary Integration

Images are converted to data URLs using `html2canvas` and sent directly to Cloudinary. To customize the cloud location or upload presets, modify `src/hooks/useCloudinaryUpload.js`:

```javascript
const uploadPreset = "photobooth"; // Your upload preset name
const cloudName = "YOUR_CLOUD_NAME"; // Your Cloudinary cloud name
```

---

## 🎨 Responsive Optimization

This application is fully optimized for touch devices and vertical screens:

- Floating mascot decorators automatically hide (`hidden md:block`) on narrow screens to avoid covering core navigation actions.
- Containers stack vertically on mobile grids to allow scrolling rather than cropping essential items.
- Body-level `overflow-y` permits scroll gestures on small screens while preventing horizontal page bounce (`overflow-x: hidden`).
