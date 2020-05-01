import axios from 'axios'

export default {
    async isGithubRepositoryValid(link) {
        if (link.includes("https://github.com/")) {
            return axios.get(`https://api.github.com/repos/${link.split("/")[3]}/${link.split("/")[4]}`)
                .then(response => {
                    return true
                })
                .catch(error => {
                    return false
                })
        } else {
            return Promise.resolve(false)
        }
    },

    async getContributors(link) {
        return axios.get(`https://api.github.com/repos/${link.split("/")[3]}/${link.split("/")[4]}/contributors`)
            .then(response => {
                return response.data
            })
            .catch(error => {
                return []
            })
    }
}
