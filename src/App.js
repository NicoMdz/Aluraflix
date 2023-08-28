import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import Footer from "./componentes/Footer";
import DefaultPage from "./componentes/DefaultPage";
import MultipleItems from "./componentes/HomeCarousel/Carousel"

function App() {
  return (
    <div className="App">
        <Header />
        <Banner />
        <MultipleItems />
        <Footer />
        {/* <DefaultPage /> */}
    </div>
  );
}

export default App;
