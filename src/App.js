import LogIn from './login';
import {Switch, Route} from 'react-router-dom';
import ManagerDash from './ManagerDash';
import SalesExecDash from './SalesExecDash'

function App() {
  return (
    <div>
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="/manager" exact component={ManagerDash} />
          <Route path="/salesExecutive" exact component={SalesExecDash} />
          <Route render={() => {
            return(
              <div className="text-center">
                <h1>Sorry That Page is not Found!</h1>
              </div>
            );
          }}
          />
        </Switch>
    </div>
  );
}

export default App;
