# Shluchim Dashboard

The Shluchim Dashboard is a React-based web application that displays a list of Shluchim (emissaries) along with their corresponding IDs, names, and branch details. The data is fetched from the provided API endpoint.

## Features

- Displays a table with the following columns:
  - Shliach ID
  - Shliach Name
  - Branch
- Supports a dark mode toggle button to switch between light and dark themes.
- Implements right-to-left (RTL) layout for better compatibility with Hebrew text.
- Uses the Material-UI (MUI) library for a consistent and responsive UI.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:

```
git clone https://github.com/your-username/shluchim-dashboard.git
```

2. Navigate to the project directory:

```
cd shluchim-dashboard
```

3. Install the dependencies:

```
npm install
```

### Running the Application

1. Start the development server:

```
npm start
```

2. Open your web browser and navigate to `http://localhost:3000` to view the Shluchim Dashboard.

## Configuration

The application uses the following configuration:

- **API Endpoint**: The API endpoint is hardcoded in the `ShluchimDashboard` component.
- **Shliach IDs**: The list of Shliach IDs to be fetched is defined in the `ShluchimDashboard` component.
- **Material-UI Theme**: The application uses a custom Material-UI theme that includes dark mode and right-to-left layout support.

## Contributions

If you have any suggestions or find any issues, feel free to open a new issue or submit a pull request.