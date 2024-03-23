export class CreateAdoptionDto {
  posted_date: Date;
  adopted: boolean;
  animal_name: string;
  animal_race: string;
  animal_age: number;
  animal_gender: string;
  animal_class: string;
  description: string;
  weight: number;
  health: string;
  castrate: boolean;
  user: string;
  Vaccinated: boolean;

  image: string[];
}
