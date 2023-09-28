import React from 'react';
import './home.css';
import List from './list';
const Info = [
  {
      img : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      name : " Yashasvi kag", birthday : "2002-08-18"
  },
  {
      img : "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      name : "Yashika kag", birthday : "2004-07-18"
  },
  {
      img : "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      name : "Vinay kag", birthday : "1996-09-16"
  },
  {
    img : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      name : "Vishal kag", birthday : "2005-10-21"
  },
  {
    img : "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      name : "Brianna Baker", birthday : "1994-07-05"
  },
  {
    img : "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      name : "Brad Myers", birthday : "1997-01-28"
  }
]

export default function board() {
return (
    <main id='site-main'>
        <h1 className="text-dark title">Birthday Remainder</h1>

        <div className="board">
              <List info={Today(Info)}></List>
              <h2 className='upcoming text-dark'>Upcoming</h2>
              <List info={Upcoming(Info, 2)} upcoming={true}></List>
        </div>
    </main>
);
}

function Today(person){
  let currentDay = new Date().getDate();
  let currentMonth = new Date().getMonth();

  let filter = person.filter(data => {
      let day = new Date(data.birthday).getDate();
      let month = new Date(data.birthday).getMonth();

      return currentDay === day && currentMonth === month;
  })
  return filter;
}


// upcoming birthdays
function Upcoming(person, toMonth) {
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();

  let filter = person.filter(data => {
    let month = new Date(data.birthday).getMonth();
    let day = new Date(data.birthday).getDate();

    if (currentDay === day) {
      return false; // Return false to exclude the person from the upcoming list
    }

    return month >= currentMonth && month <= currentMonth + toMonth;
  });

  return filter;
}
