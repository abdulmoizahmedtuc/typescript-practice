//import axios from 'axios';

// Set the repository owner and name
// owner = input("Enter Owner Name: ")
// repo = input("Enter repo name: ")
const owner:string = "almalence"
const repo:string = "OpenCamera"

// Set the API endpoint
/* const endpoint:string = `https://api.github.com/repos/${owner}/${repo}`
axios.get(endpoint)
.then(response =>{
    if(response.headers['content-type'].indexOf('application/json') !== -1){
        const repository_url:string = response.data.html_url
        const repository_name:string = response.data.name
        // Print the Repository Name and Url
        console.log(`Repository name: ${repository_name} \nRepository link: ${repository_url}`)
    }
    else{
        console.log("response not in json format")
    }
})
.catch(error =>{
    console.log(error)
});

// Set the API endpoint for Open Issues Number
const endpointOpenIssues:string = `https://api.github.com/repos/${owner}/${repo}/issues?state=open&per_page=200`
axios.get(endpointOpenIssues)
.then(response =>{
    if(response.headers['content-type'].indexOf('application/json') !== -1){
        const issuesOpen = response.data
        let issue_countOpen = 0
        for (const issue of issuesOpen) {
            if (!('pull_request' in issue)) {
                issue_countOpen += 1
            }
        }
        console.log(`Number of Open Issues: ${issue_countOpen}`)
    }
    else{
        console.log("response not in json format")
    }
})
.catch(error =>{
    console.log(error)
}); */
