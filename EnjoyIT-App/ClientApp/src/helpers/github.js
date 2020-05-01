import axios from 'axios'

export default {
    async isGithubRepositoryValid(link) {
        if (link.startsWith("https://github.com/")) {
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
                    .map(contributor => contributor.login)
                    .join(", ")
            })
            .catch(error => {
                return ""
            })
    },

    validateURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    },

    getProjectName(link) {
        if(!!link){
            return link.split("/")[4]
        } else {
            "Project link is missing"
        }
    }

}
