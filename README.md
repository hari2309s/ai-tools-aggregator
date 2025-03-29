# AI Tools Aggregator

A modern web application that aggregates and showcases various AI tools and services. Built with Angular and featuring a beautiful Material Design interface.

## Features

- Browse and search through a curated collection of AI tools
- Detailed information about each AI tool including pricing, features, and use cases
- Modern, responsive UI built with Angular Material
- Mobile-friendly design

## Tech Stack

- **Frontend Framework**: Angular 19
- **UI Components**: Angular Material
- **Styling**: Tailwind CSS
- **Testing**: Jasmine & Karma

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v19.2.5)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd ai-tools-aggregator
```

2. Install dependencies:
```bash
npm install
```

## Development

To start a local development server, run:

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building for Production

To build the project for production:

```bash
npm run build
```

This will compile your project and store the build artifacts in the `dist/` directory. The production build optimizes your application for performance and speed.

## Testing

### Unit Tests

To execute unit tests with the Karma test runner:

```bash
npm test
```

### End-to-End Tests

For end-to-end testing:

```bash
ng e2e
```

## Project Structure

- `src/app/` - Main application code
  - `components/` - Reusable UI components
  - `services/` - Application services
  - `models/` - TypeScript interfaces and types
  - `app.component.ts` - Root component
  - `app.module.ts` - Main application module

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Angular](https://angular.io/) - The web framework used
- [Angular Material](https://material.angular.io/) - UI component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
