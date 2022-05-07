export class Language {
    id?: String;
    name?: String;

    /**
     * Constructor used for converting the API data to fit the model
     * @param id 
     */
    constructor(id: String){
        this.id = id;
        this.name = getNameById(id);
            
    }

}

/**
 * Handles the mapping between the id-s and names. Returns the corresponding name for the given id 
 * @param id 
 * @returns 
 */
function getNameById (id:String): String {
    switch (id) {
        case "any":
            return "Any";
        case "eng":
            return "English";
        case "ita":
            return "Italian";
        case "dut":
            return "Dutch";
        case "spa":
            return "Spanish";
        case "rus":
            return "Russian";
        case "ger":
            return "German";
        case "jpn":
            return "Japanese";
        case "fre":
            return "French";
        case "bul":
            return "Bulgarian";
        case "slo":
            return "Slovak";
        case "cze":
            return "Czech";
        case "swe":
            return "Swedish";
        case "pol":
            return "Polish";
        case "hun":
            return "Hungarian";
    
        default:
            return "Other";
    }
}