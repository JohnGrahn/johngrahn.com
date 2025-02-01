---
title: "Space Invaders"
description: "A deep dive into recreating the classic Space Invaders game using modern web technologies and deploying it with Docker."
image: "/assets/space-invaders-screenshot.png" # Replace with an actual screenshot
liveDemoUrl: "https://spaceinvaders.johngrahn.com" # Replace with your live demo URL
githubUrl: "https://github.com/yourusername/space-invaders" # Replace with your GitHub repo URL
techStack: ["JavaScript", "HTML", "CSS", "Node.js", "Express", "PostgreSQL", "Docker"]
featured: true
pubDate: "2025-02-02"
---

## About This Project

Space Invaders defined a generation of arcade gaming, and I decided to give it a modern revival. In this project, I rebuilt Space Invaders using **JavaScript** with the **HTML5 Canvas** for rendering, styled it with **CSS**, and built a backend using **Node.js** and **Express** to manage a global leaderboard stored in **PostgreSQL**. To top it off, I containerized the full-stack application using **Docker** for easy deployment.

## Features

- **Classic Gameplay:** Faithfully recreates the original Space Invaders experience.
- **Real-Time Action:** Smooth enemy movements and fast-paced collisions to keep the action engaging.
- **Global Leaderboard:** Submit and view high scores with a persistent PostgreSQL-backed leaderboard.
- **Full-Stack Modernization:** Combines frontend JavaScript with a robust Node.js backend.
- **Dockerized Deployment:** Seamlessly deploy the application in any environment using Docker and Docker Compose.

## Technical Implementation

### Frontend – JavaScript, HTML5 Canvas, CSS

- **Game Loop & Entity Management:**  
  The `Game.js` class handles the main game loop, updating game entities (player, enemies, bullets) and rendering the scene.

  ```javascript
  // src/game/Game.js
  export class Game {
    // ... constructor and other methods ...

    gameLoop(currentTime) {
      const deltaTime = (currentTime - this.lastTime) / 1000;
      this.lastTime = currentTime;

      this.update(deltaTime);
      this.draw();

      requestAnimationFrame(this.gameLoop.bind(this));
    }

    update(deltaTime) {
      if (!this.isGameStarted || this.isPaused) {
        return;
      }
      // ... game logic ...
    }

    // ... additional methods for drawing, input handling, etc. ...
  }
  ```

- **Rendering & UI:**  
  The rendering logic is separated into a `Renderer.js` class which draws all visual elements—from the background and game entities to score displays and UI pop-ups.

- **Game Entities:**  
  Classes such as `Player.js`, `Enemy.js`, `Bullet.js`, and `Barrier.js` encapsulate the behavior and interactions of game objects.

### Backend – Node.js, Express, PostgreSQL

- **API Endpoints:**  
  The backend (in `server.js`) exposes API endpoints to add and retrieve leaderboard scores. It uses an Express server and connects to PostgreSQL using the `pg` module.

  ```javascript
  // server.js
  import express from 'express';
  import pkg from 'pg';
  const { Pool } = pkg;
  import cors from 'cors';

  const app = express();
  app.use(express.json());
  app.use(cors());

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  // Add score to leaderboard
  app.post('/api/leaderboard', async (req, res) => {
    // ... implementation ...
  });

  // Get top 10 scores
  app.get('/api/leaderboard', async (req, res) => {
    // ... implementation ...
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
  ```

### Dockerized Deployment

- **Docker & Docker Compose:**  
  The project uses Docker to package the application and its dependencies. A `Dockerfile` builds the application image, and a `docker-compose.yml` file sets up both the application and a PostgreSQL database.

  ```yaml
  # docker-compose.yml
  version: '3.8'
  services:
    db:
      # ... database configuration ...

    app:
      build: 
        context: .
        dockerfile: Dockerfile
      ports:
        - "3000:3000"
      depends_on:
        - db
      # ... additional configurations ...
  ```

To start the entire application, simply run:
  
  docker-compose up -d

## Development Process

This project involved an iterative development process:
- **Prototype to Production:** Started with a single-player prototype and gradually integrated multiplayer mechanics and backend services.
- **Tackling Challenges:** Fine-tuning enemy behavior, implementing precise collision detection, and managing asynchronous database operations were the core challenges.
- **Learning & Refinement:** From mastering Docker to optimizing the game loop, each step provided valuable insights into both game development and full-stack programming.

## Get the Code and Play!

- **Live Demo:** [Play the Game](https://spaceinvaders.johngrahn.com)
- **GitHub Repository:** [Source Code](https://github.com/yourusername/space-invaders)

I encourage you to clone the repository, explore the code, and even contribute your improvements!

## Future Enhancements

- **Multiplayer Mode:** Exploring real-time multiplayer possibilities with WebSockets.
- **Advanced Collision Mechanics:** Adding enhanced collision responses for improved gameplay.
- **Enhanced Visuals & Sound:** Integrating sound effects and dynamic visuals to enrich the gaming experience.

