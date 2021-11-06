class PostList {

    constructor() {
        this.posts = []
    }

    addPost(post) {
        this.posts.push(post);
    }

    getAllPosts() {
        return this.posts;
    }

    getUserPosts(username) {
        result = []
        for(let i = 0; i < this.posts.length; i++) {
            if(this.posts[i].author === username) {
                result.push(this.posts[i]);
            }
        }
        return result;
    }

    removePost(post) {
        this.posts = this.posts.filter((x) => {
            return x !== post;
        });
    }

}

export default PostList;