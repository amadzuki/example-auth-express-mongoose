# Example Mongoose with Express MVC

## Guide

### Installation

```sh
yarn
```

Then edit the `.env` file.

```
PORT=
MONGODB_URI=
```

### Run Server

```sh
yarn start
```

## API Documentation

### Index

| HTTP  | Endpoint | Description              |
| ----- | -------- | ------------------------ |
| `GET` | `/`      | Show info message        |
| `GET` | `/hello` | Show hello world message |

### Auth

| Endpoint         | HTTP   | Description               |
| ---------------- | ------ | ------------------------- |
| `/auth/register` | `POST` | Register new user         |
| `/auth/login`    | `POST` | Login to existing user    |
| `/auth/logout`   | `POST` | Logout the logged in user |

### Users

| HTTP     | Endpoint     | Description       |
| -------- | ------------ | ----------------- |
| `POST`   | `/users`     | Add new user      |
| `GET`    | `/users`     | Get all users     |
| `GET`    | `/users/:id` | Get user by id    |
| `PUT`    | `/users/:id` | Update user by id |
| `DELETE` | `/users`     | Delete all users  |
| `DELETE` | `/users/:id` | Delete user by id |

### Todos

| HTTP     | Endpoint     | Description       |
| -------- | ------------ | ----------------- |
| `GET`    | `/todos`     | Get all todos     |
| `GET`    | `/todos/:id` | Get todo by id    |
| `POST`   | `/todos`     | Add new todo      |
| `DELETE` | `/todos`     | Delete all todos  |
| `DELETE` | `/todos/:id` | Delete todo by id |
| `PUT`    | `/todos/:id` | Update todo by id |
