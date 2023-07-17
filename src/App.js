import './App.css';
import Nav from './components/Nav';
import { styled } from 'styled-components';
import Banner from './components/Banner';
import Category from './components/Category';
import Row from './components/Row';
import requests from './api/request';

function App() {
  return (
    <Contanier>
      <Nav />
      <Banner />
      <Category />
      <Row
        title="Tranding Now"
        id="TN"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="Top Rated"
        id="TR"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
    </Contanier>
  );
}

export default App;

const Contanier = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc( 3.5vw + 5px );

  &:after {
    content:"";
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;