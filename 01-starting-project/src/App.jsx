import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';

function App() {

  function handleSelect(){
    console.log("Hell065456446o")
}
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
            <ul>
                <CoreConcepts
                  {...CORE_CONCEPTS[0]}
                />
                <CoreConcepts
                  {...CORE_CONCEPTS[1]}
                />
                <CoreConcepts
                  {...CORE_CONCEPTS[2]}
                />
                <CoreConcepts
                  {...CORE_CONCEPTS[3]}
                />
            </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
