class Github {
    constructor() {
        this.clientId = '65b9ba5c24a213afe617';
        this.clientSecret = '4e68fcd127cffc5d380d1e1109c5aafdaf328060';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const profile = await profileResponse.json();
        return {
            profile
        };
    }
}