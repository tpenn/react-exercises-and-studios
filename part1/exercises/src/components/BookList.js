import style from './BookList.module.css';

export default function BookList() {
   let pageTitle = "Books in Celebration of Sapphic Love and Internation Faerie Day! :D";
   let books = {
      "The Faerie Queen by Lucy True": "https://iheartsapphfic.com/WP/wp-content/uploads/2022/09/The-Faerie-Queen.jpg",
      "Diamond Rough by Serenity Snow": "https://iheartsapphfic.com/WP/wp-content/uploads/2022/11/Diamond-Rough.jpg",
      "The Fae Queen's Captive by Sierra Simone": "https://iheartsapphfic.com/WP/wp-content/uploads/2023/05/The-Fae-Queens-Captive.jpg",
   }

   let booksList = Object.keys(books).map(name =>
      <img key={name} className={style.booksImage} height="340" width="240" src={books[name]} alt={name} />
   );

   return (
      <div className={style.books}>
         <h3 className={style.booksHeader}>{pageTitle}</h3>
         {booksList}
      </div>      
   );
}