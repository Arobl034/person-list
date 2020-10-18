import React from "react";
import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: "yemil",
      job: "RE1",
    },
    {
      img: 19,
      name: "rob",
      job: "RE1",
    },
    {
      img: 22,
      name: "anthony",
      job: "RE2",
    },
    {
      img: 25,
      name: "keith",
      job: "RE2",
    },
    {
      img: 14,
      name: "maria",
      job: "RE2",
    },
    {
      img: 8,
      name: "jessy",
      job: "RE2",
    },
    {
      img: 20,
      name: "serio",
      job: "Specialist",
    },
    {
      img: 15,
      name: "michael",
      job: "Supervisor",
    },
  ];
  return (
    <section>
      <Person person={people[7]}/>
      <Person person={people[6]}/>
      <Person person={people[5]}/>
      <Person person={people[4]}/>
      <Person person={people[3]}/>
      <Person person={people[2]}/>
      <Person person={people[1]}/>
      <Person person={people[0]}/>
    </section>
  );
};

const Person = (props) => {
  const {img,name,job} = props.person;
  const {children} = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
      </div>
    </div>
  );
};

export default App;
