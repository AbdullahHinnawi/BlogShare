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

### Request To Get All Blogs
GET /api/blogs
```
http://localhost:3000/api/blogs
```
### Response
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

See [Configuration Reference](https://cli.vuejs.org/config/).
