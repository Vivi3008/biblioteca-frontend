import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Main from './pages/Main'
import AddLivro from './pages/AddLivro'


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path='/add' exact  component={AddLivro}/>
                <Route path='/header' exact component={Header}/>
                   
                    
            </Switch>
        </BrowserRouter>
    )
}

export default Routes