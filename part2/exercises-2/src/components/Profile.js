import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

function Profile() {
   let listItems = oceans.map(ocean =>
      <div id={ocean.id} className={`${ocean.fishCheck === 'true' ? 'isAFish' : 'profile'}`}>
         <h1>{ocean.name}</h1>
         <img className='img' src={ocean.image} alt={ocean.name} />
         <h3>Fun Facts:</h3>
         <ul>
            <li>{ocean.fact1}</li>
            <li>{ocean.fact2}</li>
            <li>{ocean.fact3}</li>
         </ul>
         <Button />
      </div>
   );

   return (
      <ul>
         {listItems}
      </ul>
   );
}

export default Profile;