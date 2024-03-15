import DestinationData from './DestinationData';
import './DestinationStyle.css';
import Banner4 from '../img/banner4.jpg';
import Banner3 from '../img/banner3.jpg';
import Banner2 from '../img/banner2.jpeg';
import Banner1 from '../img/banner1.jpg';


const Destination = () => {
    return ( 
        <div className="destination" id='destination'>
            <h1>Miért válasszon minket?</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <DestinationData
            cName="first-des"
            heading="Lorem ipsum dolor sit."
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vitae quaerat sequi, officia odio omnis, quis minus voluptate a ratione dolore. Ipsam aliquam vero tempora delectus blanditiis tenetur debitis dolorem officia laborum id iusto, consequatur sed. Labore, delectus quae natus debitis eos animi odit quod numquam asperiores accusamus iusto nisi!"
            img1={Banner2}
            img2={Banner3}
            />
            <DestinationData
            cName="first-des-reverse"
            heading="Lorem ipsum dolor sit."
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vitae quaerat sequi, officia odio omnis, quis minus voluptate a ratione dolore. Ipsam aliquam vero tempora delectus blanditiis tenetur debitis dolorem officia laborum id iusto, consequatur sed. Labore, delectus quae natus debitis eos animi odit quod numquam asperiores accusamus iusto nisi!"
            img1={Banner1}
            img2={Banner4}
            />
        </div>
     );
}
 
export default Destination;