import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';
import "./AllGuns.css";

const AllGuns = ({countIncrease}) => {
    const [guns, setGuns] = useState([]);
    console.log(guns);
    // const datas = async()=>{
    //     const res = await fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`);
    //     const data =await res.json();
    //     setGuns(data);
    // }
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data))
        // datas();
    }, [])
    return (
        <div className="mt-5">

            <div className="my-4">
                <h1 className="text-4xl text-center text-bold mt-4">
                    Welcome to Kopa Samsu store
                </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, modi. Magnam odio nobis repellat accusamus eos distinctio ea eius aliquid quibusdam cupiditate dignissimos similique, porro blanditiis temporibus consequuntur a. Quaerat.</p>
            </div>

            <div className="w-[90%] mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {
                    guns.map((gun) => <SingleGun gun={gun} countIncrease={countIncrease} />)
                }
            </div>
        </div>
    );
};

export default AllGuns;