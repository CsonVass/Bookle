
export class Author {
    name?: String;
    wikipedia?: String;
    website?: String;

    constructor(searchAuthor: any) {
        this.name = searchAuthor.name;
        this.wikipedia = searchAuthor.wikipedia;
        this.website = searchAuthor.links ? 
                        searchAuthor.links[0]?.url : null;

    }
}