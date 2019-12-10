# BlogShare

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration

### Request to get all blogs
GET /api/blogs
```
http://localhost:3000/api/blogs
```
### Response: res.data
{
    "blogs": [
        {
            "comments": [
                {
                    "_id": 1,
                    "commentAuthor": "AbdullahHinnawi",
                    "body": "The first comment",
                    "commentdate": "December 10, 2019 10:52 PM"
                }
            ],
            "_id": "5df0053c8c97594603614107",
            "title": "The First Blog Post",
            "body": "  There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected humour, or 
            randomised words which don't look even slightly believable. If you are going to use a 
            passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in 
            the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined 
            chunks as necessary, making this the first true generator on the Internet.
            ",
            "category": "Technology",
            "date": "Tuesday, December 10, 2019 10:51 PM",
            "authorId": "5df004d38c97594603614103",
            "author": "AbdullahHinnawi",
            "imageFile": "d47d57104de469bca59fe4d817acd4a7.jpeg",
            "imageName": "car.jpeg",
            "__v": 0
        }
    ]
    
}

### Request to get a blog by id
GET /api/blogs/show/:id
```
http://localhost:3000/api/blogs/show/:id
```
### Response: res.data
{"blog":[{blog info}]}

### Request to create a blog
POST /api/blogs
```
http://localhost:3000/api/blogs
```
### Response: res.data
{"blog":[{blog info}]}

### Request to get own blogs
GET /api/myblogs
```
http://localhost:3000/api/myblogs
```
### Response: res.data
{"blogs":[{blog info}, {blog info}, ....]}

### Request to update/edit own blog
PUT /api/myblogs/:id
```
http://localhost:3000/api/myblogs/:id
```
### Response: res.data
{"blog":[{updated blog info}]}

### Request to delete own blog
DELETE '/api/myblogs?id=' + blogId
```
http://localhost:3000/api/myblogs?id=1
```
### Response: res.data
{message: 'Blog DELETED Successfully!' | error}

### Request to get all the categories
GET /api/categories/
```
http://localhost:3000/api/categories
```
### Response: res.data
{
    "categories": [
        {
            "_id": "5df004f48c97594603614104",
            "name": "technology",
            "__v": 0
        },
        {
            "_id": "5df004fe8c97594603614105",
            "name": "business",
            "__v": 0
        },
        {
            "_id": "5df005068c97594603614106",
            "name": "nature",
            "__v": 0
        }
    ]
}
### Request to add a category
POST /api/categories/add
```
http://localhost:3000/api/categories/add
```
### Response: res.data
{category: category}
'/api/categories/show/:category

### Request to get a blogs that belongs to a certain category
POST /categories/show/:category
```
http://localhost:3000/api/categories/show/:category
```
### Response: res.data
{"blogs":[{blog info}, {blog info}, ....]}

### Request to add a comment to a certain blog
POST /api/addcomment
```
http://localhost:3000/api/addcomment
```
### Response: res.data
{message: 'The comment added successfully!'}


### Request to check if a username is already registered
GET /api/users/:username
```
http://localhost:3000//api/users/:username
```
### Response: res.data
{message: '"true" | "false"'}

### Request to register a new username
POST /api/register
```
http://localhost:3000/api/register
```
### Response: res.data
{message: '"Registered Successfully! " | "The username is already registered!"'}

### Request to log in
POST /api/auth
```
http://localhost:3000/api/auth
```
### Response: res.data
{token: token}












See [Configuration Reference](https://cli.vuejs.org/config/).
