
import data from './assets/data.json'

import { Intro } from './components/intro'
import { About } from './components/about'

import { FloatingInfo } from './components/info'

function App() {
  return (
    <div className="App">
      <FloatingInfo />
      <Intro {...data.intro} />
      <About {...data.about} />
    </div>
  );
}

export default App;
