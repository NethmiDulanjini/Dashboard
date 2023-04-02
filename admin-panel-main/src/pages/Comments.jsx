import React from 'react';
import { FaRegBell, FaRegEnvelope, FaUserCircle, FaRegComment, FaRegMoneyBillAlt, FaDatabase } from 'react-icons/fa'

const comments = () => {
    return (
        
        <div>
            <nav class="navbar navbar-light bg-info">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Admin Dashboard</span>
                    <div class="my-2 my-lg-0"><a href=""><span class="navbar-brand mb-4 nav-icons "><FaRegEnvelope /></span></a>
                        <a href=""><span class="navbar-brand mb-4 nav-icons "><FaRegBell /></span></a></div>
                </div>
            </nav>
            <div>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div class="card w-50">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Reviews</th>
                                <th scope="co1">Product Code number</th>
                                <th scope="co1"></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>U00001</td>
                                <td>Dulanjini</td>
                                <td>Superb</td>
                                <td>00005</td>
                                <td><button type="button" class="btn btn-primary">View</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>U00002</td>
                                <td>Thornton</td>
                                <td>Good item</td>
                                <td>00016</td>
                                <td><button type="button" class="btn btn-primary">View</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>U00003</td>
                                <td>Inoka</td>
                                <td>Woow</td>
                                <td>00118</td>
                                <td><button type="button" class="btn btn-primary">View</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>U00004</td>
                                <td>Hasitha</td>
                                <td>Good</td>
                                <td>00431</td>
                                <td><button type="button" class="btn btn-primary">View</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
            
    );
};

export default comments;