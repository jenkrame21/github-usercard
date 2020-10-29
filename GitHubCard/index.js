import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// axios
//   .get('https://api.github.com/users/jenkrame21')
//   .then((userData) => {
//     console.log(userData.data);
//   })
//   .catch((boo) => {
//     console.log(boo);
//   })
//   .finally(() => {
//     console.log('Done!')
//   });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

const fullOfCards = document.querySelector('.cards');

function cardMaker(data){

  // Elements Created
  const cardBox = document.createElement('div');
  const avatar = document.createElement('img');
  const info = document.createElement('div');
  const userName = document.createElement('h3');
  const userUserName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userGitHubURL = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  // Classes Named
  cardBox.classList.add('card');
  avatar.classList.add('me-img');
  info.classList.add('card-info');
  userName.classList.add('name');
  userUserName.classList.add('username');

  // Sources Linked
  avatar.src = data.avatar_url;
  userGitHubURL.src = data.html_url;

  // Appends Applied
  cardBox.appendChild(avatar);
  cardBox.appendChild(info);
  info.appendChild(userName);
  info.appendChild(userUserName);
  info.appendChild(userLocation);
  info.appendChild(userProfile);
  info.appendChild(userGitHubURL);
  info.appendChild(userFollowers);
  info.appendChild(userFollowing);
  info.appendChild(userBio);

  // Content Applied
  userName.textContent = data.name;
  userUserName.textContent = data.login;
  userLocation.textContent = `Location: ${data.location}`;
  userProfile.textContent = `Profile: `;
  userGitHubURL.textContent = data.html_url;
  userGitHubURL.href = data.html_url;
  userFollowers.textContent = `Followers:  ${data.followers}`;
  userFollowing.textContent = `Following: ${data.following}`;
  userBio.textContent = `Bio: ${data.bio}`;

  return fullOfCards.appendChild(cardBox);

}

axios.get('https://api.github.com/users/jenkrame21')
  .then(res => {
    const data = res.data;
    // debugger
    cardMaker(data)
  })
  .catch(drama => {
    console.log(drama)
  })

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// Followers
axios
  .get('https://api.github.com/users/jenkrame21/followers')
  .then((res) => {
    console.log(res.data)
    const followerData = res.data
    followerData.forEach(data => {
      const followerContainer = cardMaker(data);
      fullOfCards.append(followerContainer);
      
    })
  })
  .catch((boo) => {
    console.log(boo)
  })
  .finally(() => {
    console.log('Got Follower data~')
  });

// const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
