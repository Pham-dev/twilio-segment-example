import {Theme} from '@twilio-paste/core/theme';
import Identity from './components/Identity';
import SurveyForm from './components/SurveyForm';

import './App.css';


function App() {
  return (
    <Theme.Provider theme="default">
      <Identity/>
      <SurveyForm/>
    </Theme.Provider>
  );
}

export default App;
