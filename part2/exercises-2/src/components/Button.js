import './styles.css';

function Button() {
   const onLearnMore = _ => alert('Splish Splash');
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;