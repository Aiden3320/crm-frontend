import './App.css';
import { Button } from 'react-bootstrap';
import { Entry } from './page/entry/Entry.page';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './page/entry/dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      {/*<Entry></Entry>*/}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
