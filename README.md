# PictureTV - Image & Video Selling Platform

## Overview
**PictureTV** is a web application designed to facilitate the buying and selling of images and videos globally. It is a full-stack monolithic application built using the latest technologies, ensuring a seamless user experience and robust backend functionality.

## Features
- **E-Commerce Functionality:** Users can browse, add to cart, and purchase images and videos.
- **Secure Payment Processing:** Integrated with **Stripe Payment Gateway** for seamless transactions.
- **User Dashboard:** Allows users to manage their purchases and download media easily.
- **Admin Panel:**
  - Manage uploaded resources.
  - Monitor user activity and payment history.
  - Enhance administrative efficiency by 40%.
- **Authentication & Security:**
  - OAuth-based authentication.
  - Two-step verification for enhanced security.
- **Media Management:** Utilizes **Cloudinary** for efficient image and video storage.
- **Communication Tools:** Integrated **EmailJS** for email services and **Twilio SMS** for notifications.

## Tech Stack
- **Frontend:** Next.js 14
- **Backend:** Next.js API Routes
- **Database:** MongoDB
- **State Management:** Zustand
- **Authentication:** OAuth & Two-Step Verification
- **Storage:** Cloudinary
- **Payments:** Stripe Payment Gateway
- **Messaging:** EmailJS & Twilio SMS

## Installation & Setup
### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v18+ recommended)
- **MongoDB** (local or cloud instance)

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/mdemong87/picturetv.git
   cd picturetv
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:** Create a `.env.local` file and add your credentials:
   ```env
   NEXT_PUBLIC_BASE_URL=your_base_url
NEXT_PUBLIC_BASE_URL_DEVELOPMENT=your_development_base_url
NEXT_PUBLIC_DATABASE_URL=your_database_url
NEXT_PUBLIC_AUTH_SECRECT=your_auth_secret
NEXT_PUBLIC_CLOUD_NAME=your_cloudinary_cloud_name
NEXT_PUBLIC_CLOUD_KEY=your_cloudinary_api_key
NEXT_PUBLIC_CLOUD_SECRECT=your_cloudinary_api_secret
NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_PUBLIC_API=your_emailjs_public_api
NEXT_PUBLIC_STRIPE_KEY=your_stripe_public_key


   ```
4. **Run the application:**
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser.



## Contact
For any inquiries, feel free to reach out via email at **mdemong87@gmail.com** or visit our website: [www.emonhossen.xyz](https://www.emonhossen.xyz) or  [www.picturetv.net](https://www.picturetv.net)
