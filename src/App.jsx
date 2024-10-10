import Header from './components/shared/header';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/routes/home';
import NotFound from './components/routes/notFount';
import Footer from './components/shared/footer';
import Accordian from './projects/accordian';
import RandomColor from './projects/randomColor';
import Rating from './projects/rating';
import Slider from './projects/slider';
import LoadMoreData from './projects/loadMoreData';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accordian" element={<Accordian />} />
            <Route path="/random-color" element={<RandomColor />} />
            <Route path="/rating" element={<Rating noOfStars={5} />} />
            <Route path="/slider" element={<Slider url={'https://picsum.photos/v2/list'} limit={10} page={22} />} />
            <Route path="/load-more-data" element={<LoadMoreData />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;