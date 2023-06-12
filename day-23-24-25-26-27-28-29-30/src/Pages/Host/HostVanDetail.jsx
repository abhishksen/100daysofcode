import React, { useEffect, useState } from 'react'
import { useParams, Link, Outlet, NavLink } from 'react-router-dom';

const HostVanDetail = () => {
    const params = useParams()

    const [van, setVan] = useState({})

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setVan(data.vans)
            })
    }, []);



    // const currVanEl = van.map(van => (
    //     <div key={van.id} className="van-detail-shared-ui">
    //         <img src={van.imageUrl} />
    //         <div className='shared-info'>
    //             <i className={`van-type details ${van.type} selected`}>{van.type}</i>
    //             <h2>{van.name}</h2>
    //             <p className="van-price"><span>${van.price}</span>/day</p>
    //         </div>
    //     </div>
    // ));

    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#ff8c38"
    }

    return (
        <div className='host-van-detail'>
            <Link
                to=".."
                relative='path'
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="van-detail-shared-ui">
                <img src={van.imageUrl} />
                <div className='shared-info'>
                    <i className={`van-type details ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                </div>
            </div>

            <nav className='host-nav'>
                <NavLink
                    end
                    style={({ isActive }) => isActive ? styles : null}
                    to={'.'} >Details</NavLink>
                <NavLink
                    style={({ isActive }) => isActive ? styles : null}
                    to={'pricing'} >Pricing</NavLink>
                <NavLink
                    style={({ isActive }) => isActive ? styles : null}
                    to={'photos'} >Photos</NavLink>
            </nav>
            <Outlet context={{ van }} />
        </div>
    )
}

export default HostVanDetail
