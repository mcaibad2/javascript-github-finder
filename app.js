const github = new Github();

document.getElementById('searchUser').addEventListener('keyup', searchUser)

function searchUser(e) {
    console.log('Search');
    const userText = e.target.value;
    console.log(`Text to search: ${userText}`);
    if (userText !== null) {
        return github.getUser(userText).then(res => {
            if (res.profile.message === 'Not Found') {
                // Show alert
                console.log(`User ${userText} not found`);
            } else {
                // Show profile
                console.log(res.profile);
                const profile = document.getElementById('profile');
                const user = res.profile;
                profile.innerHTML = `
                <div class="card card-body mb-3">
                    <div class="row">
                        <div class="col-md-3">
                            <img class="img-fluid mb-2" src="${user.avatar_url}">
                            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                        </div>
                        <div class="col-md-9">
                            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                            <span class="badge badge-success">Followers: ${user.followers}</span>
                            <span class="badge badge-info">Following: ${user.following}</span>
                            <br><br>
                            <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h3 class="page-heading mb-3">Latest Repos</h3>
                <div id="repos"></div>
                `;   
            }
        })
    } else {
        // Clear profile
    }
    e.preventDefault();
}