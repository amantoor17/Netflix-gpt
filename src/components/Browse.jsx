import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import GptSearch from './GptSearch';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const location = useLocation();

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();

  // 👇 Only show background (MainContainer) on /browse
  const showBackground = location.pathname === "/browse";

  return (
    <div>
      <Header />
      {
        showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            {showBackground && <MainContainer />} {/* ✅ Fix */}
            <SecondaryContainer />
          </>
        )
      }
    </div>
  );
};

export default Browse;
