class User {
    constructor(apiData) {
        this.name = apiData.name
        this.username = apiData.username
        this.email = apiData.email
    }

    get userInfo() {
        return `${this.name}, ${this.username}, ${this.email}`
    }
}

export default User
