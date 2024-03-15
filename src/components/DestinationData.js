import './DestinationStyle.css';
import { Component } from 'react';

class DestinationData extends Component{
    render(){
        return(
            <div data-aos='fade-up' className={this.props.cName}>
            <div className="des-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
            </div>

            <div data-aos='fade-up' className="image">
                <img src={this.props.img1} alt="img1" />
                <img src={this.props.img2} alt="img2" />
            </div>
        </div>
        )
    }
}
export default DestinationData;