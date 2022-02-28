import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import useAxios from "./useAxios";





const App = () => {
  const {loading, error, data, refetch} = useAxios({url: "https://yts.mx/api/v2/list_movies.json"});
  console.log(loading, error, data)
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading" }</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  )
}

export default App;
