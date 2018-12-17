//  Init Github
const github = new GitHub;

// Init UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make HTTP Call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          ui.showAlert('User not found', 'alert alert-danger')
        } else {
          // Show profile -- from UI
          ui.showProfile(data.profile);
        }
      })
  } else {
    // Clear profile -- from UI
    ui.clearProfile();
  }
});