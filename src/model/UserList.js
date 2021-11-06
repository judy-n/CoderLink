class UserList {

    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    getUser(username) {
        for(let i = 0; i < this.users.length; i++) {
            if(this.users[i].username === username) {
                return this.users[i];
            }
        }
        return null;
    }

    getAllUsers() {
        return this.users;
    }

    removeUser(user) {
        this.users = this.users.filter((x) => {
            return x !== user;
        });
    }

}

export default UserList;