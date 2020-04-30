import axios from 'axios'

export default {
    getData() {
        return axios.get('/api/data')
            .then(response => { return response.data })
    },
    increment(id, content) {
        let url = 'api/data/' + id;
        return axios.put(url, content)
            .then(response => { return response.data })
    }
}