# Cantandum Singers

Welcome to the Cantandum Singers project! This repository contains the source code and documentation for the Cantandum Singers website.

## About

Cantandum Singers is a community choir dedicated to performing a wide range of choral music. This site provides information about our group, upcoming events, and how to join.

## Getting Started

These instructions will help you set up and build the site locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/cantandum.git
    cd cantandum
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

### Building the Site

To build the site for production:

```bash
npm run build
```

The output will be in the `dist` or `build` directory (depending on your setup).

### Running Locally

To start a local development server:

```bash
npm start
```

Visit `http://localhost:3000` (or the port specified in your project) to view the site.

## Contributing

Pull requests are welcome! Please open an issue first to discuss any major changes.

## Creating New Programmes Content

To add new programmes to the site, follow these steps:

### 1. Set Up a GitHub Account

If you don't have a GitHub account, [sign up here](https://github.com/join). After registration, fork the repository or request access to contribute directly.

### 2. Create a New Content File

Programme content is typically stored in the `content/programmes` directory as Markdown files (`.md`). Each file should include frontmatter at the top, followed by the content body.

#### Example Frontmatter

```yaml
---
title: "Spring Concert 2024"
date: "2024-05-15"
location: "St. Mary's Church"
description: "A celebration of choral music from around the world."
---
```

#### Content Body

After the frontmatter, add details about the programme:

```markdown
Join us for our annual Spring Concert featuring works by Mozart, Lauridsen, and Whitacre. The concert begins at 7:30pm and tickets are available at the door.
```

### 3. Commit and Push Your Changes

1. Save your new file in the appropriate directory.
2. Add and commit your changes:

    ```bash
    git add content/programmes/spring-concert-2024.md
    git commit -m "Add Spring Concert 2024 programme"
    git push origin main
    ```

3. Open a pull request if you are working on a fork.

Your new programme will appear on the site after your changes are merged.

## Alternative: Using the GitHub Web Interface

If you prefer to use the GitHub website instead of the command line, follow these steps:

### 1. Create a GitHub Account

If you don't have a GitHub account, [sign up here](https://github.com/join). Once registered, request access to the repository or fork it to your own account.

### 2. Add a New Programme File

1. Navigate to the `content/programmes` directory in the repository.
2. Click the "Add file" button, then select "Create new file".
3. Name your file (e.g., `spring-concert-2024.md`).
4. Add the frontmatter and content body as shown in the example above.

### 3. Commit Your Changes

1. Scroll down to the "Commit new file" section.
2. Enter a brief commit message (e.g., "Add Spring Concert 2024 programme").
3. Choose "Commit directly to the main branch" if you have access, or "Create a new branch" and start a pull request.

### 4. Open a Pull Request (if needed)

If you created a new branch or are working from a fork, click "Compare & pull request" to submit your changes for review.

Once your pull request is merged, your new programme will appear on the site.

## Adding Images to Programmes

To include images in your programme content:

### 1. Upload Your Image

- Save your image in the `/assets/images/` directory (create this folder if it doesn't exist).
- Use a descriptive filename (e.g., `spring-concert-2024-poster.jpg`).

### 2. Reference the Image in Markdown

Add the following syntax to your markdown file where you want the image to appear:

```markdown
![Spring Concert 2024 Poster](/assets/images/spring-concert-2024-poster.jpg)
```

- The path should start with `/assets/images/programmes/` followed by your image filename.
- You can add alt text inside the square brackets for accessibility.

### 3. Commit and Push the Image

Make sure to add and commit the image file along with your markdown changes:

```bash
git add public/images/programmes/spring-concert-2024-poster.jpg
git commit -m "Add poster for Spring Concert 2024"
git push origin main
```

Your image will be displayed on the site once your changes are merged.
## License

This project is licensed under the MIT License.

---

For more information, contact the Cantandum Singers team.