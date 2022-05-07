
export class Author {
    name?: String;
    wikipedia?: String;
    website?: String;

    /**
     * Constructor used for converting the API data to fit the model
     * @param searchAuthor 
     */
    constructor(searchAuthor: any) {
        this.name = searchAuthor.name;
        this.wikipedia = searchAuthor.wikipedia;
        this.website = searchAuthor.links ? 
                        searchAuthor.links[0]?.url : null;

    }
}