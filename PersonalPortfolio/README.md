## Created using CLI tool

```
npm init -y

npm install tailwindcss @tailwindcss/cli
```

## Folder structure

```
CuvetteProjects/PersonalPortfolio/
│
├── tailwind.config.js
│    │
│    └── export default {
│            content: ["./index.html"],
│        };
│
├── input.css
│    │
│    └──@import "tailwindcss";
│
└── index.html
     │
     └── <link rel="stylesheet" href="./output.css">
```

## Compile

```
cd CuvetteProjects/PersonalPortfolio

npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
```



## Deliverables:
- HTML File: A single index.html file with all sections (Header, Hero, About Me, Projects, Contact, Footer).
- Tailwind CSS: Use Tailwind’s utility classes for styling and responsiveness.
- Tailwind Config File: A custom tailwind.config.js file for any theme customization (colors, fonts, etc.).


-----------------------------