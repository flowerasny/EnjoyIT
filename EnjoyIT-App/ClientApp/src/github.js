async function isGithubRepositoryValid(link) {
    if (link.includes("https://github.com/")){
        return axios.get(`https://api.github.com/repos/${getUserNick(link)}/${getRepoName(link)}`)
        .then(response => {
            return true
        })
        .catch(error => {
            return false
        })
    } else {
        return Promise.resolve(false)
    }
}

async function getContributors(link) {
    return axios.get(`https://api.github.com/repos/${getUserNick(link)}/${getRepoName(link)}/contributors`)
    .then(response => {
        return response.data
    })
    .catch(error => {
        return []
    })
}

function getUserNick(link) {
    return link.split("/")[3]
}

function getRepoName(link) {
    return link.split("/")[4]
}