---
title: "TypeScript Pong"
description: "TypeScript remake of the classic Pong game with online multiplayer."
image: "/src/assets/projects/ts-pong.png"  # You might want to update this with a new screenshot
liveDemoUrl: "https://pong.johngrahn.com"
githubUrl: "https://github.com/JohnGrahn/ts-pong" # Update with your repo
techStack: ["TypeScript", "HTML", "CSS", "Socket.IO", "Express"]
featured: true
pubDate: "2025-02-02" # Updated date
---

## About This Project

I've taken the classic Pong game to the next level by adding **online multiplayer** functionality! This project is built using **TypeScript**, **HTML5 Canvas**, **Socket.IO**, and **Node.js** with **Express**. It's a great example of how to create a real-time, interactive web game that allows players from different locations to compete against each other.


## Features

-   **🎮 Classic Pong Gameplay:**  The core mechanics of the beloved arcade game are faithfully recreated.
-   **🎯 Accurate Collision Detection:**  The game features precise collision detection between the ball and paddles.
-   **🤖 Single Player Mode with AI:** Play against a challenging AI when you want to practice solo.
-   **🤝 Online Multiplayer:** Challenge friends or strangers to a match in real time!
-   **🖥️ In-Game Menu:** Pause, restart, or enter fullscreen.
-   **🕹️ Responsive Controls:** Play with smooth controls on both desktop (mouse) and mobile (touch).
-   **🎨 Modern Design:** Clean and minimalist UI that looks great on any device.
-   **🔧 TypeScript:**  Ensures type safety and enhances code maintainability.
-   **🌐 Socket.IO:** Enables real-time, bidirectional communication between the server and clients.
-   **🚀 Node.js & Express:** Powers the backend server for matchmaking and game state synchronization.

## Technical Implementation

This project showcases a robust client-server architecture for a real-time multiplayer game. Let's break down the key components:

### Client-Side (TypeScript, HTML5 Canvas)

-   **Object-Oriented Structure:**  The game logic is organized into classes like `Game`, `Paddle`, `Ball`, `AI`, `CollisionManager`, `ScoreManager`, and `Renderer`. This makes the code modular and easier to understand.
-   **Game Loop:** The `Game` class manages the main game loop, responsible for updating the game state and rendering the graphics. Here is a snippet of the `Game` class:
    ```typescript
    export class Game {
      // ... other properties ...
      private countdownTimer: number = 5;
      private isCountingDown: boolean = false;
      private isMultiplayer: boolean = false;
      private playerId: number = 0;

      // ... constructor and other methods ...

      private gameLoop() {
        if (this.isGameRunning) {
          if (!this.isPaused) {
            if (!this.isCountingDown) {
              this.update();
            }
            this.draw();
          }
          requestAnimationFrame(this.gameLoop.bind(this));
        }
      }

      private update() {
        if (!this.isMultiplayer) {
            // Single player update logic...
        } else {
            // Multiplayer update logic...
        }
      }
      // ... rest of Game class ...
    }
    ```
-   **Rendering:** The `Renderer` class handles drawing all the game elements on the HTML5 Canvas, including a game over screen and countdown timer.
-   **Input Handling:** Event listeners capture mouse and touch events to control the player's paddle.
-   **Multiplayer Integration:** The `MultiplayerManager` class handles communication with the server via Socket.IO. It listens for events like `gameStart`, `opponentPaddleMove`, `ballUpdate`, `scoreUpdate`, and `opponentDisconnected`.
    ```typescript
    export class MultiplayerManager {
      // ... properties ...
      constructor(game: Game) {
        this.game = game;
      }

      public startMultiplayerGame() {
        this.game.setIsMultiplayer(true);
        this.socket = io(window.location.origin);
        this.setupSocketListeners();
        this.socket.emit('joinGame');
      }
      // ... other methods ...
    }
    ```

### Server-Side (Node.js, Express, Socket.IO)

-   **Room Management:** The `RoomManager` class handles creating and managing game rooms. Players are placed into rooms as they join, and the server keeps track of each room's state (players, ball position, scores).
    ```typescript
    class RoomManager {
        private gameRooms: Map<string, GameRoom> = new Map();
        // ... methods to manage rooms ...
    }
    ```
-   **Socket.IO Event Handling:** The server listens for client connections and handles events like `joinGame`, `paddleMove`, `ballMove`, `collision`, `ballReset`, and `disconnect`.
-   **Game State Synchronization:** The server is the authority on the game state. It updates the ball's position, detects collisions, updates scores, and broadcasts these changes to the clients in the same room.
-   **Security Considerations**: As a measure against cheating, the server only accepts collision events from the socket it designates as player 1.
-   **Express.js:**  The server uses Express.js to serve the static HTML, CSS, and JavaScript files to the clients.

### Multiplayer Logic

-   **Matchmaking:** When a player clicks "Multiplayer," the client sends a `joinGame` event to the server. The server either places the player in an existing room with an open slot or creates a new room. Once two players are in a room, the `gameStart` event is emitted, and the game begins.
-   **Paddle Movement:** When a player moves their paddle, the client sends a `paddleMove` event to the server, which then relays the updated paddle position to the other player in the room.
-   **Ball Synchronization:** Player 1 is designated as the authority on the ball's position. They update the ball's position locally and emit `ballMove` events to the server. The server then broadcasts these updates to Player 2, ensuring both clients see a consistent ball position.
-   **Collision Handling:** Only Player 1 handles collision detection. When a collision occurs, they emit a `collision` event to the server, which updates the score and broadcasts it to both players. The server also handles the `ballReset` event.

## Development Process

Developing this multiplayer Pong game was a challenging but rewarding experience. Here are some key takeaways from the process:

-   **Iterative Development:** I started with a basic single-player version of Pong and then incrementally added features like AI, menus, and finally, multiplayer.
-   **Testing and Debugging:** Real-time multiplayer introduces complexities. I used browser developer tools and server-side logging extensively to debug synchronization issues and ensure smooth gameplay.
-   **Learning Socket.IO:**  This project was my first deep dive into Socket.IO. I learned a lot about real-time communication and how to manage state in a distributed environment.

## Get the Code and Play!

You can find the complete source code for this project on GitHub: [GitHub Repository](https://github.com/JohnGrahn/ts-pong) 

Feel free to clone the repository, run it locally, and explore the code. I encourage you to experiment, add your own features, and even try to improve the AI!

**Live Demo:**  You can also play the game live here: [Live Demo](https://pong.johngrahn.com) 

## Future Enhancements

Here are some ideas for future improvements:

-   **Improved AI:** Make the AI opponent even more challenging and adaptable.
-   **Power-ups:** Add fun power-ups like speed boosts or multiball.
-   **Customization:** Allow players to customize paddle colors or game settings.
-   **Chat:** Implement in-game chat for player interaction.
-   **Leaderboards:** Keep track of player scores and rankings.

I hope you enjoy playing and exploring this multiplayer Pong game as much as I enjoyed building it! If you have any feedback or suggestions, please feel free to reach out or open an issue on GitHub.