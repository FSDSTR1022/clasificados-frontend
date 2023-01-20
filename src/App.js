import './assets/css/App.css';

//Componentes importados
import Articulos from './components/articulos';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Header />

      <Slider />

      

      <div className="center">
        <section id="content">
          

          <section className='componentes'>

            
            <Articulos />

          </section>
        </section>

        <Sidebar/>
        <div className='clearfix'></div>

      </div>

      <Footer/>

    </div>
  );
}

export default App;
