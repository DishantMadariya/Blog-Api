# Blog API

A simple RESTful API for managing blog posts built with Node.js, Express, and MongoDB. This API allows users to create, view, edit, and delete blog posts.

## Features

1. **Create Post**: Users can add a new blog post with a title and content.
2. **View All Posts**: Users can browse a list of all available blog posts, displayed in reverse chronological order.
3. **View Post Details**: Users can click on a blog post to view the full content and see the date it was posted.
4. **Edit Post**: Users can modify an existing post's title and content.
5. **Delete Post**: Users can remove a blog post from the list.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Body-Parser

## Prerequisites

- Node.js (v12 or later)
- MongoDB (local or remote)
- npm (Node package manager)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/DishantMadariya/Blog-Api.git
cd blog-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

In the root of your project, create a `.env` file and add your MongoDB connection string:

```
MONGO_URI=mongodb://localhost:27017/blogDB
PORT=6000  # Optional: Specify the port number
```

### 4. Start the Server

```bash
npm start
```
or, if you're using nodemon for development:
```bash
nodemon app.js
```

The server should now be running on `http://localhost:6000`.

## API Endpoints

| Method | Endpoint           | Description                    |
|--------|--------------------|--------------------------------|
| POST   | /api/posts         | Create a new blog post        |
| GET    | /api/posts         | Get all blog posts            |
| GET    | /api/posts/:id     | Get a specific blog post      |
| PUT    | /api/posts/:id     | Update a blog post            |
| DELETE | /api/posts/:id     | Delete a blog post            |

## Testing the API

You can test the API using tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/).

### Example Request to Create a Post

**POST** `/api/posts`

```json
{
  "title": "My First Post",
  "content": "This is the content of the post."
}
```

### Example Request to Get All Posts

**GET** `/api/posts`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## Acknowledgments

- Inspired by various RESTful API examples and tutorials.
- Special thanks to the developers of Express and MongoDB for making this possible.