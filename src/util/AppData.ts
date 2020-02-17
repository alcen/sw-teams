import Activity from "./Activity";
import Person from "./Person";
import Team from "./Team";

export default interface AppData {
  teams: Team[],
  activities: Activity[],
  currentUser: Person
}