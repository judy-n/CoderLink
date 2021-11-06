export function addPost(post) {
    const newList = this.state.postList;
    newList.push(post);
    this.setState({
        postList: newList
    });
}

export function getUserPosts(username) {
    const result = []
    for(let i = 0; i < this.state.postList.length; i++) {
        if(this.state.postList[i].author === username) {
            result.push(this.state.postList[i]);
        }
    }
    return result;
}

export function removePost(post) {
    const newList = this.state.postList.filter(x => {
        return x !== post;
    });
    this.setState({
        postList: newList
    });
}