# Travel Backend

Backend API service for travel booking and management.

## Project Structure

```text
Backend/
├── src/
│   ├── config/        # MongoDB connection and environment configuration
│   ├── controllers/   # Request and response handling
│   ├── docs/          # API specifications
│   ├── jobs/          # Background tasks, if required
│   ├── middleware/    # Authentication, rate limits and error handling
│   ├── models/        # User, booking and other database schemas
│   ├── routes/        # URL and HTTP method definitions
│   ├── services/      # Business rules and provider integrations
│   ├── utils/         # Shared response and error helpers
│   ├── validators/    # Validate request bodies and query parameters
│   ├── app.js         # Application setup and middleware configuration
│   └── server.js      # Server entry point and port listener
├── tests/             # Test suites
├── .env               # Secrets (never commit)
├── .env.example       # Example environment variables template
├── .gitignore         # Git ignore rules
├── package.json       # Project dependencies and scripts
└── README.md          # Documentation
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment:
   ```bash
   cp .env.example .env
   ```

3. Run development server:
   ```bash
   npm run dev
   ```
