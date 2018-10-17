// INIT GITHUB
const github = new GitHub
// INIT UI
const ui = new UI 

// Search input
const searchUser = document.getElementById('search-user')

// Event listners
searchUser.addEventListener('keyup', (e) => {
   // GET input text
   const userText = e.target.value
   if(userText !== '') {
      // make http call
      github.getUser(userText)
         .then(data => {
           if(data.profile.message === 'NOT FOUND') {
              // SHOW ALRET that user is not found

           } else {
              // SHOW PROFILE
              ui.showProfile(data.profile)
           }
         })
   } else {
      // CLEAR PROFILE
      ui.clearProfile()
   }
})