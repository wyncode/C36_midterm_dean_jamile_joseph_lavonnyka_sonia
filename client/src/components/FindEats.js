import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import RestaurantDetail from './RestaurantDetail';
import { parseStringifiedJSON } from '../helpers';
import Loader from 'react-loader-spinner';

function FindEats(props) {
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState('food');
  const [search, setSearch] = useState('');

  useEffect(() => {
    //    if (query === '') return;
    const getApiData = async () => {
      const result = await axios.get(
        `/api/restaurants/search/:wynwood/${query}`
      );
      setApiData(result.data);
    };
    getApiData();
  }, [query]);

  const handleChange = event => {
    setSearch(event.target.value);
    console.log(search);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setQuery(search);
    console.log(query);
  };

  const addFavorite = restaurant => {
    const favoriteRestaurants = localStorage.getItem('FAVORITE_RESTAURANTS');
    const parsedFavorites = parseStringifiedJSON(favoriteRestaurants, []) || [];
    const newFavorites = [...parsedFavorites, restaurant];
    localStorage.setItem('FAVORITE_RESTAURANTS', JSON.stringify(newFavorites));
  };

  return (
    <>
      <div className="search">
        <form className="find-form" onSubmit={handleSubmit}>
          <input
            className="find-input"
            type="text"
            placeholder="Get Eats!"
            onChange={handleChange}
          />
          <Button type="submit" className="search-button">
            Find Eats!
          </Button>
        </form>
      </div>
      {apiData.length > 0 ? (
        <div className="cards">
          {apiData &&
            apiData.reduce((acc, restaurant) => {
              if (
                !(
                  restaurant.image_url &&
                  restaurant.location.zip_code === '33127'
                )
              )
                return acc;
              acc.push(
                <RestaurantDetail
                  key={restaurant.id}
                  restaurant={restaurant}
                  addFavorite={addFavorite}
                />
              );
              return acc;
            }, [])}
        </div>
      ) : (
        <div className="spinner">
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      )}
    </>
  );
}

export default FindEats;
