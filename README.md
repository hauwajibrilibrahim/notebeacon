### FLEXISAF FINAL PROJECT - A REACT NOTES APPLICATION

# NoteBeacon

NoteBeacon is a modern notes application that enables users to create, manage, and delete notes efficiently. With features such as search, and editing, it provides an intuitive user experience and is fully responsive across all devices.

## Features

### 1. Create and Save Notes
- Users can write and save notes with a title and content.
- Each note displays the creation date.

### 2. Delete Notes
- Users can delete unwanted notes with a simple click.

### 3. View Full Note Details
- Clicking on a note displays the full content along with options to edit or delete.

### 4. Edit Notes
- Users can update the title and content of existing notes.

### 5. Search Notes
- A search bar allows users to filter notes by title or content.

### 6. Responsive Design
- The application is fully responsive and works seamlessly on desktops, tablets, and mobile devices.

## Technologies Used

### Frontend
- **React.js**: For building a dynamic and interactive user interface.
- **CSS**: For styling the application, with a focus on responsive design.

### Storage
- **LocalStorage**: To persist notes data across browser sessions.

## Project Setup

Follow these steps to set up the project locally:

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/note-beacon.git
   ```

2. Navigate to the project directory:
   ```bash
   cd note-beacon
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser at `http://localhost:3000`.

## Folder Structure

```plaintext
note-beacon/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── AddNote.js
│   │   ├── FullNote.js
│   │   ├── Note.js
│   │   ├── NotesList.js
│   │   └── SearchBar.js
│   ├── styles/
│   │   └── styles.css
│   ├── App.js
│   ├── index.js
│   └── utils/
├── .gitignore
├── package.json
├── README.md
└── package-lock.json
```

## Future Improvements

- Add folder categorization to organize notes.
- Integrate a backend for multi-device synchronization.
- Implement user authentication for personalized note management.
- Allow image attachments within notes.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your forked repository:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)


**Developed with passion using React.js.**




