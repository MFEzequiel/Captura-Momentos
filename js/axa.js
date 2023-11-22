const requestData = {
    method : 'getUsers'
};
const usersPromise = fetch('/api', {
    method : 'POST',
    body : JSON.stringify(requestData)
}).then(response => {
    if (!response.ok) {
    throw new Error("Got non-2XX response from API server.");
    }
    return response.json();
}).then(responseData => {
    return responseData.users;
});
usersPromise.then(users => {
    console.log("Known users: ", users);
}, error => {
    console.error("Failed to fetch users due to error: ", error);
});
