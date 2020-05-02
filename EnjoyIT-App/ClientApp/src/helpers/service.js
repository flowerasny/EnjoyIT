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
    }
}