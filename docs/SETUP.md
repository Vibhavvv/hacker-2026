# Project Setup Guide

## Development Environment Setup

### Required Tools
- **Node.js**: Version 16.x or higher
- **npm**: Comes with Node.js
- **Git**: For version control
- **Code Editor**: VS Code recommended

### Environment Configuration

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vibhavvv/hacker-2026.git
   cd hacker-2026
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the root directory:
   ```
   NODE_ENV=development
   PORT=3000
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

## Build and Deployment

### Production Build
```bash
npm run build
```

### Testing
```bash
npm test
```

### Linting
```bash
npm run lint
```

## Troubleshooting

### Common Issues
- **Port already in use**: Change the PORT in .env file
- **Module not found**: Run `npm install` again
- **Permission errors**: Check file permissions

### Getting Help
- Check existing issues on GitHub
- Create a new issue with detailed information
- Contact the development team
