import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import { filterData, apiUrl } from './data';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';

const App = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      //Output -> data
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Somthing went Wrong");
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  },[]);

  return (
    <div className="App">
      <div>
        <Navbar></Navbar>
      </div>

      <div className='filter-container'>
        <Filter filterData = {filterData} 
          category={category}
          setCategory={setCategory}
        />
      </div>
      
      <div className='cards-container'>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category} />)
        }
      </div>
    </div>
  );
};

export default App;
