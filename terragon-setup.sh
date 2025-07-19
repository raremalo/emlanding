#!/bin/bash

# Terragon Setup Script
# This script sets up the codebase for development with typechecking and tests

set -e

echo "Starting Terragon setup..."

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
else
    echo "Dependencies already installed, skipping..."
fi

# Install @vitejs/plugin-react if not already installed
if ! npm list @vitejs/plugin-react &> /dev/null; then
    echo "Installing @vitejs/plugin-react..."
    npm install -D @vitejs/plugin-react
fi

# Create test directory if it doesn't exist
if [ ! -d "test" ]; then
    echo "Creating test directory..."
    mkdir -p test
fi

# Create test setup file if it doesn't exist
if [ ! -f "test/setup.ts" ]; then
    echo "Creating test setup file..."
    cat > test/setup.ts << 'EOF'
import '@testing-library/jest-dom'
EOF
fi

# Create vitest config if it doesn't exist
if [ ! -f "vitest.config.ts" ]; then
    echo "Creating vitest configuration..."
    cat > vitest.config.ts << 'EOF'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.ts',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
EOF
fi

# Update package.json scripts if needed
if ! grep -q '"typecheck"' package.json; then
    echo "Adding typecheck and test scripts to package.json..."
    # This is a bit complex, but we'll use node to update the package.json
    node -e "
    const fs = require('fs');
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    packageJson.scripts.typecheck = 'tsc --noEmit';
    packageJson.scripts.test = 'vitest';
    packageJson.scripts['test:run'] = 'vitest run';
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n');
    "
fi

# Run typecheck to verify setup
echo "Running typecheck..."
npm run typecheck

# Run tests to verify setup
echo "Running tests..."
npm run test:run || echo "No tests found or tests failed. You may need to add test files."

echo "Setup complete! You can now use:"
echo "  npm run typecheck - for TypeScript type checking"
echo "  npm run test - for running tests in watch mode"
echo "  npm run test:run - for running tests once"