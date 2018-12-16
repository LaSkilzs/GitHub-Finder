//  Init Github
const github = new GitHub;

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
        console.log(data);
      });
  };
});