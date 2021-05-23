export class User {
    constructor(
        public public_repos: number,
        public login: string,
        public avatar_url: string,
        public created_at: Date,
        public hireable: boolean,
        public html_url:string
    ) { }
}
