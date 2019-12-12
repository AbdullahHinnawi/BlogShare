# BlogShare

Welcome to BlogShare application.

BlogShare is an online magazine or informative website that displays information in
 reverse chronological order, with the most recent blogs first. It is a platform where 
 users can share their knowledge, experience or views on a specific topic in their own way.

BlogShare requires registration or log in, after which the user can post, 
edit, or delete own blog posts. In addition, user can add new categories, 
view a certain category's blogs and react to other people's blogs by commenting.

This application built using Node js, Express js, Vue js, Bootstrap and MongoDB technologies. 
  

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

## Rest API Requests

### Request to get all blogs
GET /api/blogs
```
http://localhost:3000/api/blogs
```
#### Headers
Authorization: token
content-type: "application/json" 

#### Response: 
status: 200  
content-type: "application/json; charset=utf-8"  
data: blogs  
For example response.data looks like the following json object  
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
#### Headers
Authorization: token
content-type: "application/json" 
#### Response: 
status: 200  
content-type: "application/json; charset=utf-8"  
data: blog

### Request to create a blog
POST /api/blogs
```
http://localhost:3000/api/blogs
```
#### Headers
'Content-Type': 'multipart/form-data'
Authorization: token
req.body: form data object
req.file: image file info
#### Response: 
status: 200  
content-type: "application/json; charset=utf-8"  
data: {blog: the blog which is created}

### Request to get own blogs
GET /api/myblogs
```
'http://localhost:3000/api/myblogs?userId='+userId
```
#### Headers
content-type: "application/json; charset=utf-8" 
Authorization: token  
req.query: userId
#### Response: 
status: 200  
content-type: "application/json; charset=utf-8"  
data: {blogs: blogs}

### Request to update/edit own blog
PUT /api/myblogs/:id
```
'http://localhost:3000/api/myBlogs/'+blogId
```
#### Headers
'Content-Type': 'multipart/form-data'  
Authorization: token  
req.body: formData (blog info)
req.file: image file | undefined if the user left it empty
#### Response: 
status: 200  
content-type: "application/json; charset=utf-8"  
data: {message: 'Changes Saved Successfully!'}

### Request to delete own blog
DELETE '/api/myblogs
```
http://localhost:3000/api/myblogs?id=1
```
#### Headers
content-type: "application/json; charset=utf-8"  
Authorization: token  
req.query: id
#### Response: 
status: 200  
content-type: "application/json; charset=utf-8"  
data: {message: 'Blog DELETED Successfully!'}



### Request to get all the categories
GET /api/categories/
```
http://localhost:3000/api/categories
```
#### Headers
content-type: "application/json; charset=utf-8"  
Authorization: token  

#### Response: 
status: 200  
content-type: "application/json; charset=utf-8"  
data: {categories: categories}
For example response.data looks like the following json object 
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
#### Headers
Authorization: token
req.body: category object
#### Response: 
status: 200  
content-type: "application/json; charset=utf-8"  
data: {message:"Category Saved Successfully!"}


### Request to get the blogs that belongs to a certain category
POST /categories/show/:category
```
http://localhost:3000/api/categories/show/:category
```
#### Headers
Authorization: token
req.params: category
#### Response: 
status: 200  
content-type: "application/json; charset=utf-8"  
data: {blogs:blogs}

### Request to add a comment to a certain blog
POST /api/addcomment
```
http://localhost:3000/api/addcomment
```
#### Headers
Authorization: token
content-type: "application/json" 
req.body: comment
#### Response: 
status: 200  
content-type: "application/json; charset=utf-8"  
data: {{message: 'The comment added successfully!'}}




### Request to check if a username is already registered
GET /api/users/:username
```
http://localhost:3000//api/users/:username
```
#### Headers
content-type: "application/json" 
req.params: username
#### Response: 
status: 200  
content-type: "application/json; charset=utf-8"  
data: {{message: '"true" | "false"'}}



### Request to register a new username
POST /api/register
```
http://localhost:3000/api/register
```
#### Headers
content-type: "application/json" 
req.body: newUser
#### Response: 
status: 200  
content-type: "application/json; charset=utf-8"  
data: {message: "Registered Successfully! "}


### Request to log in
POST /api/auth
```
http://localhost:3000/api/auth
```
#### Headers
content-type: "application/json" 
req.body: user credentials
#### Response: 
status: 200  
content-type: "application/json; charset=utf-8"  
data: {token:token}














See [Configuration Reference](https://cli.vuejs.org/config/).
