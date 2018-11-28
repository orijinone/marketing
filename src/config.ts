class Config {
    public serverUrl: string

    constructor() {
        if (process.env.NODE_ENV === 'production') {
            this.serverUrl = 'https://service.com'
            return
        }

        this.serverUrl = 'http://localhost:3030'
    }
}

const config = new Config()

export default config
