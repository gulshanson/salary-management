# Architecture Overview

## Design Approach

The application follows a layered architecture:

* Routes → Define API endpoints
* Controllers → Handle HTTP requests/responses
* Services → Contain business logic
* Prisma ORM → Database access layer

## Flow

Client → Express Routes → Controller → Service → Prisma → PostgreSQL

## Why this design?

* Separation of concerns
* Easy to scale and maintain
* Testable components
