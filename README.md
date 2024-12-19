# PDFly - PDF Viewer App
## Overview
This is a React.js application that allows users to browse, search, and read PDF files. The app displays a list of PDFs with basic information like title, author, and a thumbnail. The user can search for PDFs by name and read them in a clean, responsive viewer.

## Setup Instructions
### Prerequisites
Before you start, ensure that you have the following installed:
- **Node.js**: You can download it from [here](https://nodejs.org/).
- **npm** or **yarn**: Comes with Node.js, but you can install Yarn from [here](https://yarnpkg.com/).
### Installation
1. **Clone the Repository**:
```
git clone https://github.com/your-username/PDFly.git
cd pdf-viewer-app
```
2. **Install Dependencies**: Install all the required dependencies using either npm or yarn:
- Using npm:
```
npm install
```
- Or using yarn:
```
yarn install
```
3. **Start the Development Server**: Once the dependencies are installed, start the development server:
- Using npm:
```
npm run dev
```
- Or using yarn:
```
yarn start
```
This will start the app and open it in your browser at `http://localhost:5173`.
### Running the Project Locally
To run the project locally, follow these steps: 
1. Clone the repository.
2. Install dependencies (`npm install` or `yarn install`).
3. Start the project (`npm run dev` or `yarn start`).
4. Open your browser and go to `http://localhost:5173` to see the app in action.
### Assumptions Made During Development
- **External Libraries Used**: Tailwind CSS was used for styling the application. No other external libraries were used, except for React and its hooks.
- **API Data**: The PDF data was fetched from a provided API endpoint. The app assumes that the API structure remains unchanged.
### How to Use the Application
- **Search PDFs**: Use the search bar to quickly find PDFs by their title.
- **View PDF**: Click on any PDF from the list to open the viewer and read the document.
- **Responsive Layout**: The app is fully responsive, ensuring a good user experience on both mobile and desktop devices.