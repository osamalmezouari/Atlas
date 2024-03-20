export class CreateAdoptionDto {
  posted_date: Date;
  adopted: Boolean;
  animal_name: String;
  animal_race: String;
  animal_age: Number;
  animal_gender: String;
  animal_class: String;
  description: String;
  weight: Number;
  health: String;
  castrate: Boolean;
  user: String;
  image: String[];
}
