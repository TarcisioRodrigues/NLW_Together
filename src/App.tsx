import { BrowserRouter, Route } from 'react-router-dom';
import { NewRoom } from './pages/NewRoom';
import { Home } from '../src/pages/Home';

import { AuthContextProvider } from '../src/contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" component={Home} exact={true} />
        <Route path="/room/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}
export default App;
//Toda funçao assincrona devolver uma promisse Promise<>
