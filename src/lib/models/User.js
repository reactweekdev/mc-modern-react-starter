class User {
    constructor(apiData) {
        this.id = apiData.id
        this.name = apiData.name
        this.username = apiData.username
        this.email = apiData.email
        this.address = apiData.address
    }

    get userInfo() {
        return `${this.name}, ${this.username}, ${this.email}`
    }
}

export default User
