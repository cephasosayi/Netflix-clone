import './App.css';
import Row from './components/Row';
import request from './api/request';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
        
    {/* Navbar  */}
    <Navbar />

    {/* Banner  */}
    <Banner />

    {/* contents in Rows  */}
    <Row fetchUrl={request.fetchTrending} isLargeRow title='Trending Now'/>
    <Row fetchUrl={request.fetchTopRated} title='Top Rated'/>
    <Row fetchUrl={request.fetchNetflixOriginals} title='Netflix Original'/>
    <Row fetchUrl={request.fetchActionMovies} title='Action Movies'/>
    <Row fetchUrl={request.fetchComedyMovies} title='Comedy Movies'/>
    <Row fetchUrl={request.fetchHorrorMovies} title='Horror Movies'/>
    <Row fetchUrl={request.fetchRomanceMovies} title='Romantic Movies'/>
    <Row fetchUrl={request.fetchDocumentries} title='Documentries'/>


    </div>
  );
}

export default App;
