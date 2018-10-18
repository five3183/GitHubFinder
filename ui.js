class UI {
   constructor() {
      this.profile = document.getElementById('profile')
   }
   showProfile(user) {
      if(user.created_at === undefined) {
         user.created_at = ''
      } else {
         let formatDate = user.created_at.slice(0, 10)
         let formatedDate = new Date(formatDate).toDateString()
         let displayDate = formatedDate.slice(4,15)
         this.profile.innerHTML = `
            <div class="card card-body mb-3">
               <div class="row">
               <div class="col-md-3">
                  <img class="img-fluid mb-2" src="${user.avatar_url}">
                  <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
               </div>
               <div class="col-md-9">
                  <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                  <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                  <span class="badge badge-success">Followers: ${user.followers}</span>
                  <span class="badge badge-info">Following: ${user.following}</span>
                  <br><br>
                  <ul class="list-group">
                     <li class="list-group-item">Company: ${user.company}</li>
                     <li class="list-group-item">Website/Blog: <a href="http://${user.blog}" target="_blank">${user.blog}</a></li>
                     <li class="list-group-item">Location: ${user.location}</li>
                     <li class="list-group-item">Member Since: ${displayDate}</li>
                  </ul>
               </div>
               </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
         `
      }
      
   }
   // SHOW USER REPOS
   showRepos(repos) {
      //  INIT empty variable to append to
      let output = ''
      // LOOP through the repos return from the call
      repos.forEach(repo => {
         output += `
            <div class="card card-body mb-2">
               <div class="row">
                  <div class="col-md-6">
                     <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                  </div>
                  <div class="col-md-6">
                     <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                     <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                     <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                  </div>
               </div>
            </div>
         `
      })

      // OUTPUT REPOS
      document.getElementById('repos').innerHTML = output
   }
   // SHOW ALERT MESSAGE 
   showAlert(message, className) {
      // CLEAR ANY REMANING ALERTS to prevent more than 1 alert
      this.clearAlert()

      // CREATE DIV for the message
      const div = document.createElement('div')
      // ADD CLASS NAME 
      div.className = className
      // ADD a text node for the message
      div.appendChild(document.createTextNode(message))
      // GET PARENT for where to insert the alert
      const container = document.getElementById('search-container')
      // GET SEARCH BOX for where to insert before
      const search = document.getElementById('search-card')
      // INSERT ALERT get parent element first variable is what second is be for what
      container.insertBefore(div, search)

      // TIMEOUT alert after 3 seconds
      setTimeout(() => {
         this.clearAlert()
      }, 3 * 1000)
   }
   // CLEAR ALERT
   clearAlert() {
      // GET THE CURRENT ALERT
      const currentAlert = document.querySelector('.alert')
      //FIRST CHECK to see if an alert
      if(currentAlert) {
         currentAlert.remove()
      }

   }
   // CLEAR PROFILE DATA
   clearProfile() {
      this.profile.innerHTML = ''
      this.clearAlert()
   }
}