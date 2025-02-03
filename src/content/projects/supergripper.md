---
title: "Supergripper"
description: "Force calculator for the Ivanko Super Gripper"
image: "/src/assets/projects/supergripper.png"
liveDemoUrl: "https://supergripper.johngrahn.com"
githubUrl: "https://github.com/JohnGrahn/supergripper"
techStack: ["React", "Tailwind CSS", "TypeScript"]
featured: true
pubDate: "2024-04-01"
---

As a software developer and fitness enthusiast, I'm always looking for ways to combine my passions. That's why I'm excited to share my latest project: the **Ivanko Super Gripper Force Finder**. It's a simple yet powerful web application that helps you determine the precise spring configuration for your desired closing force on an Ivanko Super Gripper.

## The Challenge of Grip Training

Grip strength is a crucial component of many sports and exercises, from weightlifting and rock climbing to everyday tasks. The Ivanko Super Gripper is a popular tool for developing grip strength, known for its adjustable resistance. However, figuring out the right spring settings for a specific target force can be a real headache. It often involves trial and error, guesswork, and a lot of manual adjustment.

## My Solution: Automating the Process

To simplify this process, I built the Super Gripper Force Finder. This web app lets you input your desired closing force, and it instantly tells you the optimal position for each spring to achieve that force.

<div align="center">
<img src="https://placehold.co/800x400?text=Super+Gripper+Force+Finder+Screenshot" alt="Super Gripper Force Finder Screenshot" width="800" style="border-radius: 8px;">
</div>

## Key Features

-   **🎯 Precise Force Matching:**  The app uses a comprehensive 12x12 matrix of spring configurations (derived from the manufacturer's data) to find the closest possible match to your desired force.
-   **📊 Detailed Configuration:**  It provides clear instructions on where to position each spring for the recommended setting.
-   **🖥️ User-Friendly Interface:** Built with React and Tailwind CSS, the app is intuitive and easy to navigate.
-   **⚠️ Helpful Guidance:** Includes important safety reminders for adjusting the gripper, such as returning it to the unlocked position before changing spring settings and maintaining at least one notch between springs.

## How It Works

The core logic is surprisingly straightforward. When you input a desired force, the app searches through the `gripperForceData` array:

```typescript
// Gripper force data matrix (abbreviated for brevity)
const gripperForceData = [
  [null, null, 45, 56, 70, 85, 101, /* ... */],
  [null, null, null, 64, 77, 92, 109, /* ... */],
  [45, null, null, null, 87, 102, 119, /* ... */],
  // ... more rows ...
] as (number | null)[][];
```

It iterates through each cell of this matrix, calculates the difference between your input and the force value in the cell, and keeps track of the configuration with the smallest difference.

Here's a snippet of the `useMemo` hook that handles this calculation:

```typescript
const closestCombination = useMemo<ClosestCombination | null>(() => {
  const force = parseFloat(desiredForce) || 0;
  if (force <= 0) return null;

  let closestMatch: ClosestCombination | null = null;
  let smallestDifference = Infinity;

  gripperForceData.forEach((row, firstSpring) => {
    row.forEach((cellForce, secondSpring) => {
      if (cellForce !== null) {
        const difference = Math.abs(cellForce - force);
        if (difference < smallestDifference) {
          smallestDifference = difference;
          closestMatch = {
            firstSpring: firstSpring + 1,
            secondSpring: secondSpring + 1,
            actualForce: cellForce,
          };
        }
      }
    });
  });

  return closestMatch;
}, [desiredForce]);
```

## Tech Stack

This project was a great opportunity to work with some of my favorite web development tools:

-   **React:** For building the user interface and managing state.
-   **TypeScript:** For type safety and improved code maintainability.
-   **Vite:** As the build tool and development server.
-   **Tailwind CSS:** For rapid styling and a consistent design.
-   **shadcn/ui:** For pre-built, accessible UI components.

## Dockerized for Easy Deployment

To make it easy to run the app anywhere, I've also included a `Dockerfile`:

```dockerfile
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

This allows you to build a Docker image and run the Super Gripper Force Finder in a containerized environment.

## Get the Code and Try It Out!

You can find the complete source code for this project on GitHub: [SuperGripper Repository](https://github.com/yourusername/SuperGripper) (replace with your actual repo link).

Feel free to clone it, run it locally, and even contribute improvements.

## Final Thoughts

I hope this tool helps you optimize your grip training and get the most out of your Ivanko Super Gripper. If you have any feedback or suggestions, please don't hesitate to reach out! I'm always looking for ways to improve my projects and make them even more useful.
