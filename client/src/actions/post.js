
export const makePost = (author, title, description, institution, skillsRequired) => {

    const request = new Request(`/api/posts`, {
        method: "post",
        body: JSON.stringify({author, title, description, institution, skillsRequired}),
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
        .catch(error => {
            console.log(error);
        });
}

export const getAllPosts = (postList) => {
    const request = new Request(`/api/posts`, {
        method: "get",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    return fetch(request)
        .then(res => {
            console.log(res)
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            console.log("what is ", json)
            if (json === undefined) {
                return json;
            } else {
                postList.setState({ postList: json.posts})
            }
        })
        .catch(error => {
            console.log(error);
        });
}

export const getPostById = (id) => {
    const request = new Request(`/api/posts/${id}`, {
        method: "get",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    return fetch(request)
        .then(res => {
            console.log(res)
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



export const getUserPosts = (username) => {
    const request = new Request(`/api/posts/user/${username}`, {
        method: "get",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })

    return fetch(request)
        .then(res => {
            console.log(res)
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
