import Header from './Components/Header'
import Nav from './Components/Nav'
import Body from './Components/Body'
import './App.css';

function App() {
  return (
    <div>
      <section className='page-one'>
          <div className="App">
            <Header />
            <Nav />
          </div>

          <section>
            <Body />
          </section>
      </section>

    <section className='page-two'>
      <h1 className='services'>SERVICES</h1>
      <p className='lorem'>Lorem ipsum dolor sit amet consectetur.</p>
    </section> 

    </div>
  );
}

export default App;
