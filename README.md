# react-photolabs
The PhotoLabs project is a React Project and is a part of the Lighthouse Labs web development course. It is a single page application that renders photos along with information of the user who uploaded the photo.

## Features
1. Modal opens on click of a photo.
2. Photos can be liked or unliked on both normal view and modal view
3. Notification appears on the heart in the Navigation bar when a photo is liked.
4. When a topic on the Naigation bar is clicked, photos of that category is displayed.
5. Clicking on the Photolabs logo reloads the page.
6. User can change the app to Darkmode or Lightmode by clicking moon icon or sun icon.
7. User can search photos by username, topic, city or country.

## App Interface
!["Screenshot of Homepage"](https://github.com/vyshudoulagar/photolabs/blob/main/docs/photo-homepage.png)
!["Screenshot of Modal"](https://github.com/vyshudoulagar/photolabs/blob/main/docs/photo-modal.png)
!["Screenshot of Darkmode"]()
!["Screenshot of Search"]()

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## Dependencies

### Frontend Dependencies
- "@testing-library/jest-dom": "^5.16.5",
- "@testing-library/react": "^13.4.0",
- "@testing-library/user-event": "^13.5.0",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-scripts": "5.0.1",
- "react-test-renderer": "^18.3.1",
- "web-vitals": "^2.1.4"

#### Dev Dependencies
- "sass": "^1.59.2"

### Backend Dependencies
- "body-parser": "^1.18.3",
- "cors": "^2.8.5",
- "dotenv": "^7.0.0",
- "express": "^4.16.4",
- "helmet": "^3.18.0",
- "pg": "^8.5.0",
- "socket.io": "^2.2.0",
- "ws": "^7.0.0"

#### Dev Dependencies
- "jest": "^24.8.0",
- "supertest": "^4.0.2"
