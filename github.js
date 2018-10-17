// INIT keys
const keys = new Keys

class GitHub {
   constructor() {
      keys.getKeys()
         .then(data => {
            this.client_id = data.key.ClientID
            this.client_secret = data.key.ClientSecret
         })
    
   }
   async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

      const profile = await profileResponse.json()
      return {
         profile
      }
   }
}