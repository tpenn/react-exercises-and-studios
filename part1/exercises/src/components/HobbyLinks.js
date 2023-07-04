import style from './HobbyLinks.module.css';

export default function HobbyLinks() {
    let hobbyTitle = "Hobbies";
    let hobbyLinks = {
        "Travel" : "https://www.hobsess.com/5-reasons-to-make-travel-your-hobby/",
        "Reading": "https://lifestyle.allwomenstalk.com/reasons-why-reading-is-the-best-hobby/",
        "Gaming" : "https://ourculturemag.com/2023/05/17/is-gaming-now-a-mainstream-hobby/",
    };
    
    let hobbiesList = Object.keys(hobbyLinks)
        .map(prop => <p key={prop} className={style.hobbiesText}><a href={hobbyLinks[prop]}>{prop}</a></p>
    );

    return (
        <div>
            <h3 className={style.hobbiesHeading}>{hobbyTitle}</h3>
            {hobbiesList}
        </div>      
    );
}