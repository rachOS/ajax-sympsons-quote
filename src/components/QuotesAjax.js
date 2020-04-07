import React, {Component} from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'
import './QuoteAjax.css'

class QuotesAjax extends Component{

    constructor(props){
        super(props);
        this.state = {url: 'https://simpsons-quotes-api.herokuapp.com/quotes'}
        this.fetchSympsonsJSON = this.fetchSympsonsJSON.bind(this)
    }

    fetchSympsonsJSON() {
        const characterID = 0 ;
        const url = this.state.url;

        axios.get(url)

            .then(response => response.data[0])
            .then(sympsons => {console.log('data decoded from JSON:', sympsons);
  
            // Build a block of HTML
            const sympsonsHtml = `
                <div class="charachter">
                    <blockquote>
                    ${sympsons.quote}
                    </blockquote>
                    <div class="avatar">
                        <img  src="${sympsons.image}" />
                    </div>
                    <p class="characName">${sympsons.character}</p>
                </div>
            `;
            document.querySelector('#sympsons').innerHTML = sympsonsHtml;
        });
    }

    render(){
        return(
                <div class="container">
                    <h1 class="title">Sympsons Quotes</h1>
                    <div class="content" id="sympsons">
                        {this.fetchSympsonsJSON()}
                    </div>
                    <button onClick={this.fetchSympsonsJSON}>Eat my shoes!</button>
                </div>
        )
    }
}

export default QuotesAjax