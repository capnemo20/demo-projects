import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';
import "./AllGuns.css";

const AllGuns = () => {
    const [guns, setGuns] = useState([]);
    console.log(guns);
    // const datas = async()=>{
    //     const res = await fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`);
    //     const data =await res.json();
    //     setGuns(data);
    // }
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
        .then(res=>res.json())
        .then(data=>setGuns(data))
        // datas();
    },[])
    return (
        <div>
            <h1 className="text-4xl text-center font-bold mt-4" >Welcome to Kopa Samsu store</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis error corrupti consequuntur aperiam dolores dolor et praesentium officia, molestiae dolorum consequatur placeat numquam obcaecati architecto, cumque facere maxime sequi.

            </p>
            {
                guns.map((gun)=><SingleGun gun ={gun} />)
            }
        </div>
    );
};

export default AllGuns;