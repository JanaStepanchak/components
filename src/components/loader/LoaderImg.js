import React, { Component } from 'react'

class LoaderImg extends Component {
   
    state = {
            srct:"3",
            loaded: false
         }

componentDidMount= () => {
   let img = new Image();

    img.onload = () => {      
        console.log(`Image loaded, ${img.width}x${img.height}`); 
        this.setState({
            srct : img.src,              
            loaded: true
        });
        console.log(" setState" ,   this.state);
     };
    img.onerror = function () {     
        console.log("An error occurred while loading image");      
    };
    img.src = "http://img.lenagold.ru/tc/tcvet/gelkr/gelkr_tcvet045.png";
}

render = () => {
    const { srct , loaded } = this.state;
    if( !loaded ){
        console.log("render 1" );
        return( <h1> Loading... </h1> );
    } else {
        console.log("render 2" );
        return(
            <>
                <img
                src = {srct }  
                alt=""          
                width={200}
                height={200}                   
                > 
                </img>
            </>
        );
    }
}}

export default LoaderImg;