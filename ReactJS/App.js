import React, { Component } from 'react';
import PropTypes from 'prop-types';
class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            header: "Header from sate...",
            content: "Content from state!"
        }
    }
    render(){
        let i = 1;
        var myStyle = {
            fontSize: 100,
            color: '#FF0000'
        }
        return(
            <div>
                <Header/>
                <Content/>
                <h1>{ this.state.header }</h1>
                <p>{ this.state.content }</p>                
                <h1>{ this.props.header }</h1>
                <p>{ this.props.content }</p>
                <h3 style={myStyle}>{i == 2 ? 'True' : 'False'}</h3>
                <p data-meuatributo="teste">teste adicional</p>
                
                <h3>Array: {this.props.propArray}</h3>
                <h3>Bool: {this.props.propBool ? "True" : "False"}</h3>
                <h3>Func: {this.props.propFunc(3)}</h3>
                <h3>Number: {this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>
                <h3>Object: {this.props.propObject.objectName1}</h3>
                <h3>Object: {this.props.propObject.objectName2}</h3>
                <h3>Object: {this.props.propObject.objectName3}</h3>
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return(
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}

class Content extends React.Component {
    render(){
        return(
            <div>
                <h2>Content</h2>
            </div>
        );
    }
}

App.defaultProps = {
    header: "Header from props!",
    content: "Header from props!"
}

App.propTypes = {
	propArray: PropTypes.array.isRequired,
	propBool: PropTypes.bool.isRequired,
	propFunc: PropTypes.func,
	propNumber: PropTypes.number,
	propString: PropTypes.string,
	propObject: PropTypes.object
}

App.defaultProps={
	propArray: [1,2,3,4,5],
	propBool: true,
	propFunc: function(e){return e},
	propNumber: 1,
	propString:"String value",
	
	propObject: {
		objectName1: "objectValue1",
		objectName2: "objectValue2",
		objectName3: "objectValue3"
	}
}
export default App;