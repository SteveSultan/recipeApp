export  interface Ingredient{
    ingredient: string;
    measure: string;
}

export interface Instruction{
    instruction: string;
    photo: string;
}

export class Recipe{
    public title: string;
    public description: string;
    public feed_this_many: number;
    public preparation_time: number;
    public ingredients: Ingredient[];
    public instructions: Instruction[];
    public cover_photo: string;

    /**
     *
     */
    constructor(t:string, d:string, ftm:number, pt:number, ing:Ingredient[], ins:Instruction[], cp:string) {
        this.title = t;
        this.description = d;
        this.feed_this_many = ftm;
        this.preparation_time = pt;
        this.ingredients = ing;
        this.instructions = ins;
        this.cover_photo = cp;
        
    }

    public static createBlank():Recipe{
        return new Recipe('', '',0, 0,[ ], [], " ")
    }
}