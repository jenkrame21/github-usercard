import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios
  .get('https://api.github.com/users/jenkrame21')
  .then((myData) => {
    console.log(myData.data);
  })
  .catch((boo) => {
    console.log(boo);
  })
  .finally(() => {
    console.log('Done!')
  });

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
  const myName = document.createElement('h3');
  const myUserName = document.createElement('p');
  const myLocation = document.createElement('p');
  const myProfile = document.createElement('p');
  const myGitHubURL = document.createElement('a');
  const myFollowers = document.createElement('p');
  const myFollowing = document.createElement('p');
  const aboutMe = document.createElement('p');

  // Classes Named
  cardBox.classList.add('card');
  avatar.classList.add('me-img');
  info.classList.add('card-info');
  myName.classList.add('name');
  myUserName.classList.add('username');

  // Sources Linked
  avatar.src = data.avatar_url;
  myGitHubURL.src = data.html_url;
  console.log(myGitHubURL)

  // Appends Applied
  cardBox.appendChild(avatar);
  cardBox.appendChild(info);
  info.appendChild(myName);
  info.appendChild(myUserName);
  info.appendChild(myLocation);
  info.appendChild(myProfile);
  myProfile.appendChild(myGitHubURL);
  info.appendChild(myFollowers);
  info.appendChild(myFollowing);
  info.appendChild(aboutMe);

  // Content Applied
  myName.textContent = data.name;
  myUserName.textContent = data.login;
  myLocation.textContent = data.location;
  myProfile.textContent = 'Profile: ';
  myGitHubURL.textContent = `My GitHub Link: ${data.html_url}`
  myFollowers.textContent = `My Followers:  ${data.followers}`
  aboutMe.textContent = data.bio;

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

const followersArray = [];

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
