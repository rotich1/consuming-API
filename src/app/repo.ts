export class Repo {
    constructor(
        public name:string,
        public description:string,
        public updated_at:Date,
        public clone_link: string,
        public language:string
    ) { }
}
