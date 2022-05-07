import { Book } from "./models/Book"

export const MockBooks: Book[] = [
    {
        title: "testbook1",
        authorName: "Test Elek",
        published: 2022,
        languages: [
            { id: "eng", name: "English" },
             {id: "spa", name: "Spanish"}
            ],
        coverId: 1
    },
    {
        title: "test book2",
        authorName: "T. E.",
        published: 2001,
        languages: [
            { id: "eng", name: "English" },
            ],
        coverId: 2
    },
    {
        title: "testbook3",
        authorName: "Ekvivalen Cica",
        published: 2000,
        languages: [
            { id: "spa", name: "Spanish" },
             {id: "fre", name: "French"}
            ],
        coverId: 3
    },
]
