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
           if(data.profile.message === 'Not Found') {
              // SHOW ALRET that user is not found
              ui.showAlert('User not found', 'alert alert-danger')
           } else {
              // SHOW PROFILE
              ui.showProfile(data.profile)
              ui.showRepos(data.repos)
           }
         })
   } else {
      // CLEAR PROFILE
      ui.clearProfile()
   }
})