import React from 'react';
import './Card.css';

class Card extends React.Component {

    constructor(props, animation) {
        super(props)
        this.animation = animation;
    }

    render() {
        const showButton = this.props.showButton;
        if(showButton) {
            return (
                <div class="card">
                    <div>
                        <img class="centered" src="https://images.ygoprodeck.com/images/cards/11398059.jpg" alt="King of the Feral Imps"></img>
                        {/* <img src="{this.props.image_url}" alt="{this.props.name}"></img> */}
                    </div>
                    <div>
                        <button class="centered" id="activate_btn" onClick={this.test}>Activate</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div class="card">
                    <div>
                        <img class="centered" src="https://images.ygoprodeck.com/images/cards/11398059.jpg" alt="King of the Feral Imps"></img>
                        {/* <img src="{this.props.image_url}" alt="{this.props.name}"></img> */}
                    </div>
                </div>
            );
        }
    }

    test() {
        console.log("test");
    }

    animate() {
        this.animation.animate();
    }
}

export default Card;