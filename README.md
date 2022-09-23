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
