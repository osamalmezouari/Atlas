import {Adoption} from "./Adoption";
import {Reviews} from "./Reviews.ts";

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
        FindAdoptionNewStatistics : {
            data : string[]
            loading : boolean
            Error :string
        }
        FindAdoptionAdoptedStatistics : {
            data : string[]
            loading : boolean
            Error :string
        },
        FindAllReviews  : {
            loading : boolean,
            data : [],
            Error : ""
        }
        AllLocations : string []
    }
    Users : {
        FindUserStatistics : {
            data : string[]
            loading : boolean
            Error :string
        }
    }
    Reviews : {
        FindReviewsStatistics : {
            loading : boolean,
            data : string[],
            Error : string
        }
        FindAllReviews  : {
            loading : boolean,
            data : Reviews[],
            Error : string
        }
    }
}