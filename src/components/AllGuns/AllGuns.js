import React, { useEffect, useState } from 'react';
import "./AllGuns.css"

const AllGuns = () => {
    const [guns, setGuns] = useState([]);
    console.log(guns);
    const datas = async()=>{
        const res = await fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`);
        const data =await res.json();
        setGuns(data);
    }
    useEffect(()=>{
        // fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
        // .then(res=>res.json())
        // .then(data=>setGuns(data))
        datas();
    },[])
    return (
        <div>
            <h2>all guns</h2>
        </div>
    );
};

export default AllGuns;