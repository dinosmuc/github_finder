class GitHub{
    constructor(){
        this.client_id = "da057c9f72c01e047644";
        this.client_secret = "eaed174d76c6366eab8f7358786226b3178cdf5f"
    }

    async getUser(user){

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret} `);
        
        const profile = await profileResponse.json();

        return{
            profile
        }
    }
}