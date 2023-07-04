import style from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div>
         <h3 className={style.choresHeading}>To Do List</h3>
         <ol>
            <li className={style.choresText}>Feed Cats</li>
            <li className={style.choresText}>Clean</li>
            <li className={style.choresText}>Water Plants</li>
         </ol>
      </div>
   );
}