import { Book } from "./Book";
import { Language } from "./Language";

export interface SearchParameters{
    title : String | null,
    author : String | null,
    subject : String | null,
    limit : number | null,
    language: Language,
    offset: number
  }

  export interface SearcResults{
    books: Book[],
    numFound: number
  }