import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NewRoom } from './pages/NewRoom';
import { Home } from '../src/pages/Home';
import { Room } from '../src/pages/Room';

import { AuthContextProvider } from '../src/contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/room/new" component={NewRoom} />
          <Route path="/room/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
export default App;
//Toda funçao assincrona devolver uma promisse Promise<>
