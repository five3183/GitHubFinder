// This is used to get the KEYs from the keys.json file to keep them secret. keys.json is in the gitignore file.  Users will need to input their own keys in order for this program to work. 

class Keys {
   async getKeys() {
      const response = await fetch('keys.json')
      const key = await response.json()
      return {
         key
      }
   }
}