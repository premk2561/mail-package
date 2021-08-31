
import './App.css';
import TopNavBar from './Components/TopNavBar';
import Folders from './Components/Folders';
import Inbox from './Components/Inbox';
import SideNavBar from './Components/SideNavBar';
import { mails } from './Components/Folders';
import Todo2 from './Components/Todo2';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <div className='col-2 m-0 p-0 '>
          <SideNavBar />
        </div>
        <div className='col-10 m-0 p-0'>
          <div className='row'>
            <TopNavBar />
            <div className='col-3'>
              <Folders />
            </div>
            <div className='col-9'>
              <Inbox mails={mails} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Todo2 />
      </div>
    </div>
  );
}

export default App;
