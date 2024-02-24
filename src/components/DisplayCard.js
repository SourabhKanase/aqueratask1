
import React, { useEffect, useState } from 'react';

const DisplayCard = ({ page, setPage }) => {
  let [loading, setLoading] = useState(true);
  let [data, setData] = useState();
  let [residents, setResidents] = useState([]);

  async function fetchResidentData(residentUrl) {
    try {
      let res = await fetch(residentUrl);
      let residentData = await res.json();
      return residentData;
    } catch (error) {
      console.error('Error fetching resident data:', error);
      return null;
    }
  }

  async function fetchData() {
    try {
      console.log("Fetching data...");
      let endPoint = `https://swapi.dev/api/planets/${page}`;
      let res = await fetch(endPoint);
      let dataFetched = await res.json();
      setData(dataFetched);

      // Fetch data for each resident
      let residentDataPromises = dataFetched.residents.map((residentUrl) => fetchResidentData(residentUrl));
      console.log(residentDataPromises);
      let residentData = await Promise.all(residentDataPromises);
      setResidents(residentData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div className='display'>
        <div className='shadow'></div>
        {data ? <h1 style={{  marginTop: '60px' ,color:'white',fontSize:'30px',textAlign:'center'}}>{data.name}</h1> : <h1>Loading...</h1>}
      </div>
      <div className='second'>
        <div className='discard' style={{display:'flex',justifyContent:'center',alignItems:'center' 
        }}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          data && (
            <div className='carddiv'>
              <h1>{data.name}</h1>
              <p>Rotation Period: {data.rotation_period}</p>
              <p>Orbital Period: {data.orbital_period}</p>
              <p>Diameter: {data.diameter}</p>
              <p>Climate: {data.climate}</p>
              <p>Gravity: {data.gravity}</p>
              <p>Terrain: {data.terrain}</p>
              <p>Surface Water: {data.surface_water}</p>
              <p>Population: {data.population}</p>
            </div>
          )
        )}

        <div className='residents' style={{marginLeft:'20px', color:'white' ,height:"400px", width:'400px', overflowX:'scroll'}}>
          { residents.length > 0 ?(  residents.map((resident, index) => (
            <div key={index} className='residentData' style={{ margin: '10px' }}>
              <h2>Resident {index + 1}</h2>
              {resident ? (
                <>
                  <p>Name: {resident.name}</p>
                  <p>Height: {resident.height}</p>
                </>
              ) : (
                <p>Error loading resident data</p>
              )}
            </div>
          ))):(<h1>No residents</h1>)}
        </div>

        </div>
        
        <div>
        <button className='button' onClick={() => { if (page > 1 && page < 60) { setPage(page - 1) } else { setPage(1) } }}>Prev</button>
          <button style={{marginLeft:'20px'}} className='button' onClick={() => { if (page >= 1 && page < 60) { setPage(page + 1) } else { setPage(1) } }}>Next</button>
          
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;




