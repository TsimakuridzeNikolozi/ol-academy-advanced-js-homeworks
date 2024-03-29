console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

function loginUser(email, password, callback, errorCallback) {
  const hasUserWithEmail = usersDB[email] !== undefined;

  if (hasUserWithEmail) {
    setTimeout(() => {
      console.log("Now we have the data of user: " + email);
      callback({ userEmail: email });
    }, 3 * 1000);
    return;
  }

  setTimeout(() => {
    errorCallback("User not found");
  }, 3 * 1000);
}

function getUserVideos(email, callback, errorCallback) {
  const userHasVideos = usersDB[email].length > 0;

  if (userHasVideos) {
    setTimeout(() => {
      callback(usersDB[email]);
    }, 2 * 1000);
    return;
  }

  setTimeout(() => {
    errorCallback("Videos not found");
  }, 2 * 1000);
}

function videoDetails(video, callback, errorCallback) {
  const videoHasTitleAttribute = video.title !== undefined;

  if (videoHasTitleAttribute) {
    setTimeout(() => {
      callback(video.title);
    }, 2 * 1000);
    return;
  }

  setTimeout(() => {
    errorCallback("Video title not found");
  }, 2 * 1000);
}

const getPassedUsersFirstVideoTitle = (user) => {
  loginUser(
    user,
    1234,
    (userArg) => {
      console.log("user:", userArg);
      getUserVideos(
        userArg.userEmail,
        (videos) => {
          console.log("videos:", videos);
          videoDetails(
            videos[0],
            (title) => {
              console.log("title:", title);
            },
            (errorMessage) => {
              displayError(errorMessage);
            }
          );
        },
        (errorMessage) => {
          displayError(errorMessage);
        }
      );
    },
    (errorMessage) => {
      displayError(errorMessage);
    }
  );
};

getPassedUsersFirstVideoTitle("user1@hw.js");

console.log("Finish");
