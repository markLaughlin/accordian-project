import React from 'react'

class Accordian extends React.Component {
    static defaultProps = { sections: [] };

    state = {
        message: "This is the message"
    }

    handleButtonClick(index){
        console.log("A button was clicked");
        console.log({index});
        const currentMessage = this.props.sections[index].content;
        console.log({currentMessage});
        this.setState({message: currentMessage})
    }

    renderButtons(){
        const arrayOfLis = this.props.sections.map((item, index) =>
         <li key={index}>
             <button key={index} onClick={() => this.handleButtonClick(index)}>            
             {item.title}
            </button>
        </li>
        )

        return (
        <ul>
         {arrayOfLis}
        </ul>
         )
    }

    renderContent(){
        return (
        <div>
            {this.state.message}
        </div>
        )
    }

    render(){
        return(
        <div className = "mainDiv">
        {this.renderButtons()}
        {/* {this.renderContent()} */}
        {!!this.props.sections.length && this.renderContent()}
        </div>
        )
    }       
}

export default Accordian