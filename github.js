


class GitHub {
  constructor() {
    this.client_id = '3a30f58d6a788fdbcb7f';
    this.client_secret = 'e55567902364ca6532de4b88737018ee0a629e39';
  }

  async getUser(user) {
    // fetch profile data from github, using oauth
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);

    // waiting on the promise to get the response
    const profileData = await profileResponse.json();

    // returning promise response 
    return {
      profile: profileData,  // first promise response saved

    }
  }
}