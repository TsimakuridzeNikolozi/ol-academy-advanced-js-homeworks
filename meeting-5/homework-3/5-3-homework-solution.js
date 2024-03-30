console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

const loginUser = (email, password) =>
  new Promise((resolve, reject) => {
    const hasUserWithEmail = usersDB[email] !== undefined;

    if (hasUserWithEmail) {
      setTimeout(() => {
        console.log("Now we have the data of user: " + email);
        resolve({ userEmail: email });
      }, 3 * 1000);
      return;
    }

    setTimeout(() => {
      reject("User not found");
    }, 3 * 1000);
  });

const getUserVideos = (email) =>
  new Promise((resolve, reject) => {
    const userHasVideos = usersDB[email].length > 0;

    if (userHasVideos) {
      setTimeout(() => {
        resolve(usersDB[email]);
      }, 2 * 1000);
      return;
    }

    setTimeout(() => {
      reject("Videos not found");
    }, 2 * 1000);
  });

const videoDetails = (video) =>
  new Promise((resolve, reject) => {
    const videoHasTitleAttribute = video.title !== undefined;

    if (videoHasTitleAttribute) {
      setTimeout(() => {
        resolve(video.title);
      }, 2 * 1000);
      return;
    }

    setTimeout(() => {
      reject("Video title not found");
    }, 2 * 1000);
  });

const getPassedUsersFirstVideoTitle = (user) => {
  loginUser(user, 1234)
    .then((user) => {
      console.log("user:", user);
      return getUserVideos(user.userEmail);
    })
    .then((videos) => {
      console.log("videos:", videos);
      return videoDetails(videos[0]);
    })
    .then((title) => {
      console.log("title:", title);
    })
    .catch((error) => {
      displayError(error);
    });
};

getPassedUsersFirstVideoTitle("user1@hw.js");

console.log("Finish");
