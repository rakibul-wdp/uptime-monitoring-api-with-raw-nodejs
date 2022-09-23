# Uptime Monitoring API with Raw Node.js

- RESTFulAPI
- Authentication & Authorization
- User Signup & Add/Edit Settings
- SMS Notification using Twilio API
- RAW Node.js, no npm modules

### Requirement Analysis

- Start the API Server
- Create, Edit, Delete User
- Token based authentication
- Logout Mechanism
- Set links & Up/Down
- Edit/Delete links & rate limit
- Check up/down time

### Create Server

- Setup basic server in index.js file.
- require dependencies, create app object - module scaffolding, configuration, server, handle request and response, and start the server.

### Parsing Request

- Normally we get path many way like about/ or about or about/index
- But we need proper path one way.
- That's why we use replace method for trimmed path by this reg. expression.
- `.replace(/^\/+|\/+$/g, '')`
- If we need query string just do it `parseUrl.query`
- By req.headers we can get request headers.
- In post method we see how to pass data in body.

### Refactor Code

- Handle request and response functionality cut another file for better code readability.

### Routing Setup

- Create sample route and not found route and put those route in routes file.
- Main work doing in handle req res file.
