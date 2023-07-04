import style from './HobbyLinks.module.css';

export default function HobbyLinks() {
    let hobbyTitle = "Hobbies";
    let hobbyLinks = [
        "https://www.hobsess.com/5-reasons-to-make-travel-your-hobby/",
        "https://lifestyle.allwomenstalk.com/reasons-why-reading-is-the-best-hobby/",
        "https://ourculturemag.com/2023/05/17/is-gaming-now-a-mainstream-hobby/",
    ];

    return (
        <div>
            <h3 className={style.hobbiesHeading}>{hobbyTitle}</h3>
            <p className={style.hobbiesText}><a href={hobbyLinks[0]}>Travel</a></p>
            <p className={style.hobbiesText}><a href={hobbyLinks[1]}>Reading</a></p>
            <p className={style.hobbiesText}><a href={hobbyLinks[2]}>Gaming</a></p>
        </div>      
    );
}