import style from './ChoresList.module.css';

export default function ChoresList () {
   const chores = ["Feed Cats", "Water Plants", "Clean"];
   const choresList = chores.map(chore =>
      <li key={chore} className={style.choresText}>{chore}</li>
   );

   return (
      <div>
         <h3 className={style.choresHeading}>To Do List</h3>
         <ol>
            {choresList}
         </ol>
      </div>
   );
}