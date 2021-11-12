
import data from './assets/data.json'

import { Intro } from './components/intro'
import { FloatingInfo } from './components/info'

function App() {
  return (
    <div className="App">
      <FloatingInfo />
      <Intro {...data.intro} />
    </div>
  );
}

export default App;
