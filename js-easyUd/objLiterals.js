function CreatePost(title, body, author){
        this.title = title;
        this.body = body;
        this.author = author;
        this.views = 0;
        this.comments = [];
        this.isLive = false;
}

const comment1 = {
    comment: 'Mega',
    author: 'Billy'
}

const newPost = new CreatePost('world ends', 'story of two lines', 
'J.Hardy')



console.log(newPost);