import React from 'react';
import Modal from '../Modal/Modal';


const SingleGun = (props) => {
    const {gun, countIncrease }= props;
    const { action, bullet, category, img, name, price } = props.gun;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className="h-48 w-48" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <div className="badge badge-outline">{action}</div>
                        <div className="badge badge-outline">{bullet}</div>
                        <div className="mt-4 ">
                            <button className="btn btn-sm btn-primary mr-2" onClick={()=>countIncrease()}>Add To Cart</button>
                            {/* <button className="btn btn-sm btn-success">Details</button> */}
                            <label htmlFor="my-modal-3" className="btn modal-button btn-sm btn-success">open modal
                            </label>
                        </div>
                    </div>

                </div>
               
            </div>
            <Modal></Modal>
        </div>
    );
};

export default SingleGun;