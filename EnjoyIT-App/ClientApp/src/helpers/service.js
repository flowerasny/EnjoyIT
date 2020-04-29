import axios from 'axios'

export default {
    getData() {
        return axios.get('/api/data')
            .then(response => { return response.data })
    }
}