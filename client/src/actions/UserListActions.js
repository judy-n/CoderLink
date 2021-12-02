export function addUser(user) {
    const newList = this.state.userList;
    newList.push(user);
    this.setState({
        userList: newList
    });
}

export function removeUser(user) {
    const newList = this.state.userList.filter(x => {
        return x !== user;
    });
    this.setState({
        userList: newList
    });
}

export function getUser(username) {
    for(let i = 0; i < this.state.userList.length; i++) {
        if(this.state.userList[i].username === username) {
            return this.state.userList[i];
        }
    }
    return null;
}