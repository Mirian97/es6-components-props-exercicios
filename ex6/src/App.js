import "./App.css"
import UserCard from "./components/UsersCards";
import kelvin from "./assets/kelvin-costa.png";
import charles from "./assets/charles-santos.png";
import anna from "./assets/anna-bia.png";
import mario from "./assets/mario-hisashi.png";

const people = [
  {
    id: 1,
    avatar: kelvin,
    name: "Kelvin Costa",
    user: "@costa",
    followers: 140,
    following: 207
  },
  {
    id: 2,
    avatar: charles,
    name: "Charles Santos",
    user: "@charles.santos",
    followers: 302,
    following: 419
  },
  {
    id: 3,
    avatar: anna,
    name: "Anna Bia",
    user: "@anab",
    followers: 842,
    following: 150
  },
  {
    id: 4,
    avatar: mario,
    name: "Mário Hisashi",
    user: "@hisashi",
    followers: 28,
    following: 17
  }
]

export default function App() {
  return (
    <div className="container">
      {people.map((person) =>
        <UserCard
          key={person.id}
          avatar={person.avatar}
          name={person.name}
          user={person.user}
          followers={person.followers}
          following={person.following}
        />
      )}
    </div>
  );
}