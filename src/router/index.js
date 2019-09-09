import React, { Component } from 'react';
import  { Route , Switch } from 'react-router-dom'

import Index from '../pages/Index'
import Search from '../pages/Search'
import B from '../components/B'
import A from '../components/A'

import C from '../components/C'
import D from '../components/D'
import App from '../App'
import{ BrowserRouter as RouterBox} from 'react-router-dom'

class Router extends Component{

    render(){
        return (
            <RouterBox>
            <App>
                <Switch>
                    <Route exact path='/' component={Index}></Route>
                    <Route  path='/index' render={(props)=>{
                        return (
                        <Index {...props}>
                            <Switch>
                                <Route path='/index/a' component={A}></Route>
                                <Route path='/index/b' component={B}></Route>
                                <Route path='/index/c' component={C}></Route>
                                <Route path='/index/d' component={D}></Route>
                            </Switch> 
                        </Index>
                        )
                    }}>

                    </Route>
                    <Route  path='/Search' component={Search}></Route>
                </Switch>
            </App>
            </RouterBox>
        );
    }
}

export default Router