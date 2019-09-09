import React,{Component} from 'react'
import './index.css'

class Index extends Component{
 

    goPath(item){
        this.props.history.push(item)
    }

    render(){
        
        return(
            <div>
                Index<br/>
                <button onClick={this.goPath.bind(this,'/search')}>Search</button>
                {this.props.children}
                <ul className='nav'>
                    <li onClick={this.goPath.bind(this,'/index/a')}>AAA</li>
                    <li onClick={this.goPath.bind(this,'/index/b')}>BBB</li>
                    <li onClick={this.goPath.bind(this,'/index/c')}>CCC</li>
                    <li onClick={this.goPath.bind(this,'/index/d')}>DDD</li>
                </ul>
            </div>
        )
    }    
}

export default Index