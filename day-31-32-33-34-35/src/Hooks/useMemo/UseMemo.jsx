import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

const UseMemo = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setData(res.data)
      })
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log('this was computed');
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data])

  return (
    <div>
      useMemo hook
      <div>
        {getLongestName}
      </div>
      <button
      onClick={() => {setToggle(!toggle)}}
      >Toggle</button>
      {toggle&& <span>Toggled</span>}
    </div>
  )
}

export default UseMemo
