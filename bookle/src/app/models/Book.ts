import { Language } from "./Language";

export class Book {
    title?: String;
    authorKey?: String;
    authorName?: String;
    published?: number;
    languages?: Language[];
    coverId?: number;

    constructor(searchBook: any) {
        this.title = searchBook?.title;
        this.authorKey = searchBook?.author_key[0];
        this.authorName = searchBook?.author_name[0];
        this.published = searchBook?.first_publish_year;
        this.languages = createLanguageList(searchBook?.language);
        this.coverId = searchBook.cover_i;
    }
}

function createLanguageList(langs: String[]): Language[] {
    var languageList: Language[] = [];
    var otherAppears: number = 0;
    if (langs)
        langs.forEach(lanId => {
            var newLan = new Language(lanId);
            if (newLan.name != "Other") {
                languageList.push(newLan);
            } else {
                otherAppears++;
            }
        });
    if (otherAppears) {
        languageList.push(new Language(otherAppears.toString()));
    }
    return languageList;

}

export interface SearchReply {
    docs: any[],
    numFound: number
}