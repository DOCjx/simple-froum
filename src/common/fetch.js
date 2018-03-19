export default (path, params = {}, method = 'GET') => {
    const head = {
        method,
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if(method != 'GET'){
        head.body = JSON.stringify({
            path,
            params
        })
    }
    return fetch(`/api/${path}`, head).then(res => {
        return res.json()
    });
};