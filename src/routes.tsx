import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from './pages/Main'
import AddLivro from './pages/AddLivro'
import Nova from './pages/Nova'


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path='add'  component={AddLivro}/>
                   
                <Route path='nova' component={Nova}/>
                    
            </Switch>
        </BrowserRouter>
    )
}

export default Routes