export const checkSession = (app) => {
    const url = `/users/check-session`;

    if (true) {
    return fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                return json.currentUser;
                // app.setState({ currentUser: json.currentUser });
            }
        })
        .catch(error => {
            console.log(error);
        });
    } else {
        app.setState({ currentUser: {} });
    }
    
};

export const login = ({username, password}) => {
    // Create our request constructor with all the parameters we need
    const request = new Request(`/users/login`, {
        method: "post",
        body: JSON.stringify({username, password}),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json.currentUser !== undefined) {
                return json.currentUser;
            }
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a GET request to logout the current user
export const logout = (app) => {
    const url = `/users/logout`;

    fetch(url)
        .then(res => {
            app.setState({
                currentUser: {
                  username: null,
                  fullname: null,
                  about: null,
                  skills: null,
                  institution: null,
                  userType: null,
                },
                loggedIn: false
              })
        })
        .catch(error => {
            console.log(error);
        });
};

export const signup = (username, password, fullname, about, skills, institution) => {

    const request = new Request(`/api/users`, {
        method: "post",
        body: JSON.stringify({username, password, fullname, about, skills, institution}),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            console.log('what is', json)
            // if (json.currentUser !== undefined) {
            //     return json.currentUser;
            // }
        })
        .catch(error => {
            console.log(error);
        });
}

export const getUser = (username) => {
    const request = new Request(`/api/users/${username}`, {
        method: "get",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json !== undefined) {
                return json;
            }
        })
        .catch(error => {
            console.log(error);
        });
}

export const editUser = (username, fullname, about, skills, institution) => {

    console.log('edit User json:', username, fullname, about, skills, institution)
    const url = `/api/users/${username}`
    const request = new Request(`http://localhost:5001/api/users/${username}`, {
        method: "post",
        body: JSON.stringify({fullname, about, skills, institution}),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    return fetch(request)
        .then(res => {
            console.log(res, res.status)
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            console.log('edit User json:', json)
            if (json !== undefined) {
                return json;
            }
        })
        .catch(error => {
            console.log("Meow meow", error);
        });
}