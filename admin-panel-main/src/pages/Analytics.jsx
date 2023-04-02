import React from 'react';
import { FaRegBell, FaRegEnvelope, FaMedal, FaRegComment, FaRegMoneyBillAlt, FaDatabase, FaShoppingCart } from 'react-icons/fa'

const analytics = () => {
    
    return (
        <div>
            <nav class="navbar navbar-light bg-info">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Admin Dashboard</span>
                    <div class="my-2 my-lg-0"><a href=""><span class="navbar-brand mb-4 nav-icons "><FaRegEnvelope /></span></a>
                        <a href=""><span class="navbar-brand mb-4 nav-icons "><FaRegBell /></span></a></div>
                </div>
            </nav>
            <div class="alert alert-success bg-blue" role="alert">
                <span class="navbar-brand mb-0 nav-icons"><FaShoppingCart /></span>
                <h4 class="alert-heading">Total Orders</h4>
                <p > <h1>200</h1></p>
            </div>
            <div style={{
                width: '300px',
                height: '400px',
                backgroundColor: 'green',
                borderRadius: '10px',
                boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
                margin: 'auto',
                marginTop: '50px'
            }}>
                <h1 style={{ color: 'white', textAlign: 'center' }}>Medal Orders</h1>

                <h3 style={{ color: 'white', textAlign: 'center' }}> <span class="navbar-brand mb-0 nav-icons"><FaMedal /></span>Platinum Orders</h3>
                    <h5>12</h5>
                <h3 style={{ color: 'white', textAlign: 'center' }}> <span class="navbar-brand mb-0 nav-icons"><FaMedal /></span>Gold Orders</h3>
                <h5>12</h5>
                <h3 style={{ color: 'white', textAlign: 'center' }}> <span class="navbar-brand mb-0 nav-icons"><FaMedal /></span>Silver Orders</h3>
                <h5>12</h5>
            </div>
            <div style={{
                width: '300px',
                height: '400px',
                backgroundColor: 'green',
                borderRadius: '10px',
                boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
                margin: 'auto',
                marginTop: '50px'
            }}>
                <h1 style={{ color: 'white', textAlign: 'center' }}>Direct Orders</h1>
            </div>
            



        </div>
    );
};

export default analytics;