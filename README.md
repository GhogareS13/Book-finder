# Alex's Book Finder 📚

## 🎯 User Requirement & Solution

**User Persona:** Alex, a college student, needs to find specific books for courses and research.
**User Need:** The app must allow searching in **"all the ways"** (Title, Author, and ISBN).

### Solution Implemented:

The application provides a unified search bar where the user can select the search type from a dropdown menu, fulfilling the core requirement of searching by:
1.  **Title**
2.  **Author**
3.  **ISBN**

## 💻 Technology Stack

* **Framework:** React (Vite)
* **Data Source:** Open Library Search API
* **Styling:** Plain CSS and CSS Modules (for responsive grid and card design)

## ✨ Features

* **Multi-Modal Search:** Seamlessly switches the API query based on the selected search type (Title, Author, or ISBN).
* **Responsive Display:** Displays results in a clean, professional, and responsive card grid that adapts to desktop and mobile screens.
* **Graceful State Handling:** Displays distinct messages for:
    * Loading books (`Loading...`)
    * Network or API errors (`Error: ...`)
    * No results found (`No books found...`)
* **Book Details:** Each card displays the book's title, author(s), first publication year, and cover image (or a placeholder if no cover is available).

## ⚠️ Note on Author Search (API Behavior)

The `author=` parameter is implemented correctly in the API call. It was observed that:
* Searching with **full, specific names** (e.g., `J. K. Rowling` or `Agatha Christie`) returns highly accurate results.
* Searching with **short or vague names** (e.g., `harry`) may cause the Open Library API to return broader, less specific results (acting more like a general keyword search). This is behavior inherent to the external API, not the application logic.

## 🚀 Getting Started (Local Setup)

1.  Clone the repository:
    ```bash
    git clone [https://github.com/GhogareS13/Book-finder](https://github.com/GhogareS13/Book-finder)
    cd Book-finder
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```

---
