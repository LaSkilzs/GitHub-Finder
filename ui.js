class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Create / Show Profile
  showProfile(user) {
    // console.log(user);
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3>
            <img class="img-fluid mb-2" src=${user.avatar_url}>
            <a href=${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-sucess">Followers: ${user.followers}</span>
          <span class="badge badge-primary">Following: ${user.following}</span>
          <br><br>
          <ul class="list-group">
          <li class="list-group-item">${user.company}</li>
          <li class="list-group-item">${user.blog}</li>
          <li class="list-group-item">${user.location}</li>
          <li class="list-group-item">${user.created_at}</li>
          </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }
  // Show alert Message
  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // Create div
    const div = document.createElement('div');
    // Add Class Nme
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get Parent
    const container = document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert alert
    container.insertBefore(div, search);

    // Timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }


  // Clear the Profile
  clearProfile() {
    this.profile.innerHTML = " ";
  }
}

