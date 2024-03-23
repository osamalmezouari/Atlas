import {User} from "./user.ts";

export interface Adoption extends User{
    id :string
    posted_date: string;
    adopted: boolean;
    animal_name: string;
    animal_race: string ;
    animal_age: number;
    animal_gender: string;
    animal_class: string;
    description: string;
    weight: number;
    health: string;
    longitude: number;
    latitude: number;
    castrate: boolean;
    Vaccinated : boolean
    user: User
    image: [{
        id:string
        Cloudurl:string
    }];
}




