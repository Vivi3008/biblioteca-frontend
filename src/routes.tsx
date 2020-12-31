import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Header from './components/Header'
import AddLivro from './pages/AddLivro'


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/header" component={Header}/>
                <Route path="/add" component={AddLivro}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes