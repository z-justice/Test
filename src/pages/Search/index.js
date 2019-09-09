import React,{Component} from 'react'


class Search extends Component{

    back(){
        this.props.history.goBack()    
    }

    render(){
        return(
            <div>Search
                <button onClick={this.back.bind(this)}>返回</button>
            </div>
        )
    }    
}

export default Search