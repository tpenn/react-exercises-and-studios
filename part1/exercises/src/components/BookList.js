import style from './BookList.module.css';

export default function BookList() {
   let pageTitle = "Book in Celebration of Sapphic Love and Internation Faerie Day! :D";
   let book1 = "https://iheartsapphfic.com/WP/wp-content/uploads/2022/09/The-Faerie-Queen.jpg";
   let book2 = "https://iheartsapphfic.com/WP/wp-content/uploads/2022/11/Diamond-Rough.jpg";
   let book3 = "https://iheartsapphfic.com/WP/wp-content/uploads/2023/05/The-Fae-Queens-Captive.jpg";

   return (
      <div className={style.books}>
         <h3 className={style.booksHeader}>{pageTitle}</h3>
         <img className={style.booksImage} height="340" width="240" src={book1} alt="The Faerie Queen by Lucy True" />
         <img className={style.booksImage} height="340" width="240" src={book2} alt="Diamond Rough by Serenity Snow" />
         <img className={style.booksImage} height="340" width="240" src={book3} alt="The Fae Queen's Captive by Sierra Simone" />
      </div>      
   );
}