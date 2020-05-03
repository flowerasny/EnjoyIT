import axios from 'axios'

export default {
    getData() {
        return axios.get('/api/data')
            .then(response => { return response.data })
    },
    edit(id, content) {
        let url = 'api/data/' + id;
        return axios.put(url, content)
            .then(response => { return response.data })
    },
    add(content) {
        return axios.post('/api/data', content)
            .then(response => { return response.data })
    },
    addUser(content) {
        return axios.post('/api/user', content)
            .then(response => { return response.data })
    },
    validateUser(email, password) {
        let url = '/api/user?email=' + email + '&password=' + password
        return axios.get(url)
            .then(response => { return response.data })
    }
}