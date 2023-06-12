import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const HostVans = () => {
    const [hostVans, setHostVans] = useState([]);

    useEffect(() => {
        fetch('/api/host/vans')
            .then(res => res.json())
            .then(data => setHostVans(data.vans));
    }, []);

    const hostVanElements = hostVans.map(hostVan => (
        <Link
            key={hostVan.id}
            to={hostVan.id}
        >
            <div className="host-van-card" key={hostVan.id}>
                <img src={hostVan.imageUrl} alt="host-van-img" />
                <div className='info'>
                    <h3>{hostVan.name}</h3>
                    <p>${hostVan.price}<span>/day</span></p>
                </div>
            </div>
        </Link>
    ))

    return (
        <div className='host-van-container'>
            {
                hostVans.length > 0 ? (
                    <>
                        <h3>Your listed vans</h3>
                        {hostVanElements}
                        <button className="btn add-van">Add a new van</button>
                    </>
                ) : (
                    <h3>Loading ...</h3>
                )
            }
        </div>
    )
}

export default HostVans
