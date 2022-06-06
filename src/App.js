import './App.css';
{
  /* import the zodiac array */
}
import Header from './Header/Header.js';
import Main from './Main/Main';
import Footer from './Footer/Footer.js';
import './App.css';
import './Main/Main.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
      {/* import and use the Header. Main, and Footer components here */}

      {/* the Header component needs a string passed in as the `name` prop */}
      {/* the Footer component needs a year passed in as the `year` prop */}
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
    </div>
  );
}

export default App;
