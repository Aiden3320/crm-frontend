import './App.css';
import { Button } from 'react-bootstrap';
import { Entry } from './page/entry/Entry.page';
import { DefaultLayout } from './layout/DefaultLayout';
function App() {
  return (
    <div className="App">
      {/*<Entry></Entry>*/}
      <DefaultLayout>
        main page
      </DefaultLayout>
    </div>
  );
}

export default App;
