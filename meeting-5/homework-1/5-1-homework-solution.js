console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("Now we have the data of user: " + email);
    callback({ userEmail: email });
  }, 3 * 1000);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(usersDB[email]);
  }, 2 * 1000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback(video.title);
  }, 2 * 1000);
}

const getPassedUsersFirstVideoTitle = (user) => {
  loginUser(user, 1234, (userArg) => {
    console.log("user:", userArg);
    getUserVideos(userArg.userEmail, (videos) => {
      console.log("videos:", videos);
      videoDetails(videos[0], (title) => {
        console.log("title:", title);
      });
    });
  });
};

getPassedUsersFirstVideoTitle("user1@hw.js");

console.log("Finish");
