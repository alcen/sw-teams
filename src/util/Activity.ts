import Action from "./Action";
import Person from "./Person";

export default interface Activity {
  action: Action,
  createdAt?: string,
  id: number,
  team: string,
  user: Person
}