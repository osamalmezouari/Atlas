import {Adoption} from "./Adoption";

export interface StoreState {
    Adoptions : {
        Adoptions : {
            data : Adoption []
            loading : boolean
            Error : string
        }
        OneAdoption : {
            data : Adoption
            loading : boolean,
            Error : string
        }
        FilteredAdoptions: {
            data : Adoption []
            loading : boolean
            Error : string
        }
        AllLocations : string []
    }
}