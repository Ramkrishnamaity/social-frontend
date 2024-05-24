
import React from 'react';
import { LoginProps } from '../../lib/DataSet/Auth';
import { Link } from 'react-router-dom';
import { ProjectName } from '../../lib/Config';



const Home: React.FC<LoginProps> = () => {
    return (
        <div className="container-fluid">
            {/* start page title */}
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item">
                                    <Link to="#">{ProjectName}</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="#">Home</Link>
                                </li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Dashboard 2</h4>
                    </div>
                </div>
            </div>
            {/* end page title */}
            <div className="row">
                <div className="col-md-6 col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <div className="avatar-sm bg-blue rounded">
                                        <i className="fe-aperture avatar-title font-22 text-white" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="text-end">
                                        <h3 className="text-dark my-1">
                                            $<span data-plugin="counterup">12,145</span>
                                        </h3>
                                        <p className="text-muted mb-1 text-truncate">Income status</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h6 className="text-uppercase">
                                    Target <span className="float-end">60%</span>
                                </h6>
                                <div className="progress progress-sm m-0">
                                    <div
                                        className="progress-bar bg-blue"
                                        role="progressbar"
                                        aria-valuenow={60}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: "60%" }}
                                    >
                                        <span className="visually-hidden">60% Complete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end card*/}
                </div>
                {/* end col */}
                <div className="col-md-6 col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <div className="avatar-sm bg-success rounded">
                                        <i className="fe-shopping-cart avatar-title font-22 text-white" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="text-end">
                                        <h3 className="text-dark my-1">
                                            <span data-plugin="counterup">1576</span>
                                        </h3>
                                        <p className="text-muted mb-1 text-truncate">January's Sales</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h6 className="text-uppercase">
                                    Target <span className="float-end">49%</span>
                                </h6>
                                <div className="progress progress-sm m-0">
                                    <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        aria-valuenow={49}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: "49%" }}
                                    >
                                        <span className="visually-hidden">49% Complete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end card*/}
                </div>
                {/* end col */}
                <div className="col-md-6 col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <div className="avatar-sm bg-warning rounded">
                                        <i className="fe-bar-chart-2 avatar-title font-22 text-white" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="text-end">
                                        <h3 className="text-dark my-1">
                                            $<span data-plugin="counterup">8947</span>
                                        </h3>
                                        <p className="text-muted mb-1 text-truncate">Payouts</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h6 className="text-uppercase">
                                    Target <span className="float-end">18%</span>
                                </h6>
                                <div className="progress progress-sm m-0">
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        aria-valuenow={18}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: "18%" }}
                                    >
                                        <span className="visually-hidden">18% Complete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end card*/}
                </div>
                {/* end col */}
                <div className="col-md-6 col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <div className="avatar-sm bg-info rounded">
                                        <i className="fe-cpu avatar-title font-22 text-white" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="text-end">
                                        <h3 className="text-dark my-1">
                                            <span data-plugin="counterup">178</span>
                                        </h3>
                                        <p className="text-muted mb-1 text-truncate">
                                            Available Stores
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h6 className="text-uppercase">
                                    Target <span className="float-end">74%</span>
                                </h6>
                                <div className="progress progress-sm m-0">
                                    <div
                                        className="progress-bar bg-info"
                                        role="progressbar"
                                        aria-valuenow={74}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: "74%" }}
                                    >
                                        <span className="visually-hidden">74% Complete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end card*/}
                </div>
                {/* end col */}
            </div>
            {/* end row */}
            <div className="row">
                <div className="col-xl-4 col-md-12">
                    {/* Portlet card */}
                    <div className="card">
                        <div className="card-body">
                            <div className="card-widgets">
                                <Link to="#" data-bs-toggle="reload">
                                    <i className="mdi mdi-refresh" />
                                </Link>
                                <Link
                                    data-bs-toggle="collapse"
                                    to="#cardCollpase1"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="cardCollpase1"
                                >
                                    <i className="mdi mdi-minus" />
                                </Link>
                                <Link to="#" data-bs-toggle="remove">
                                    <i className="mdi mdi-close" />
                                </Link>
                            </div>
                            <h4 className="header-title mb-0">Lifetime Sales</h4>
                            <div id="cardCollpase1" className="collapse show">
                                <div className="text-center pt-3">
                                    <div id="lifetime-sales" data-colors="#00acc1,#f1556c" />
                                    <div className="row mt-3">
                                        <div className="col-4">
                                            <p className="text-muted font-15 mb-1 text-truncate">
                                                Target
                                            </p>
                                            <h4>
                                                <i className="fe-arrow-down text-danger me-1" />
                                                $7.8k
                                            </h4>
                                        </div>
                                        <div className="col-4">
                                            <p className="text-muted font-15 mb-1 text-truncate">
                                                Last week
                                            </p>
                                            <h4>
                                                <i className="fe-arrow-up text-success me-1" />
                                                $1.4k
                                            </h4>
                                        </div>
                                        <div className="col-4">
                                            <p className="text-muted font-15 mb-1 text-truncate">
                                                Last Month
                                            </p>
                                            <h4>
                                                <i className="fe-arrow-down text-danger me-1" />
                                                $9.8k
                                            </h4>
                                        </div>
                                    </div>
                                    {/* end row */}
                                </div>
                            </div>
                            {/* collapsed end */}
                        </div>
                        {/* end card-body */}
                    </div>
                    {/* end card*/}
                </div>
                {/* end col*/}
                <div className="col-xl-4 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-widgets">
                                <Link to="#" data-bs-toggle="reload">
                                    <i className="mdi mdi-refresh" />
                                </Link>
                                <Link
                                    data-bs-toggle="collapse"
                                    to="#cardCollpase2"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="cardCollpase2"
                                >
                                    <i className="mdi mdi-minus" />
                                </Link>
                                <Link to="#" data-bs-toggle="remove">
                                    <i className="mdi mdi-close" />
                                </Link>
                            </div>
                            <h4 className="header-title mb-0">Income Amounts</h4>
                            <div id="cardCollpase2" className="collapse show">
                                <div className="text-center pt-3">
                                    <div id="income-amounts" data-colors="#00acc1" />
                                    <div className="row mt-3">
                                        <div className="col-4">
                                            <p className="text-muted font-15 mb-1 text-truncate">
                                                Target
                                            </p>
                                            <h4>
                                                <i className="fe-arrow-up text-success me-1" />
                                                641
                                            </h4>
                                        </div>
                                        <div className="col-4">
                                            <p className="text-muted font-15 mb-1 text-truncate">
                                                Last week
                                            </p>
                                            <h4>
                                                <i className="fe-arrow-down text-danger me-1" />
                                                234
                                            </h4>
                                        </div>
                                        <div className="col-4">
                                            <p className="text-muted font-15 mb-1 text-truncate">
                                                Last Month
                                            </p>
                                            <h4>
                                                <i className="fe-arrow-up text-success me-1" />
                                                3201
                                            </h4>
                                        </div>
                                    </div>
                                    {/* end row */}
                                </div>
                            </div>
                            {/* collapsed end */}
                        </div>
                        {/* end card-body */}
                    </div>
                    {/* end card*/}
                </div>
                {/* end col*/}
                <div className="col-xl-4 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-widgets">
                                <Link to="#" data-bs-toggle="reload">
                                    <i className="mdi mdi-refresh" />
                                </Link>
                                <Link
                                    data-bs-toggle="collapse"
                                    to="#cardCollpase3"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="cardCollpase3"
                                >
                                    <i className="mdi mdi-minus" />
                                </Link>
                                <Link to="#" data-bs-toggle="remove">
                                    <i className="mdi mdi-close" />
                                </Link>
                            </div>
                            <h4 className="header-title mb-0">Total Users</h4>
                            <div id="cardCollpase3" className="collapse show">
                                <div className="text-center pt-3">
                                    <div
                                        id="total-users"
                                        data-colors="#00acc1,#4b88e4,#e3eaef,#fd7e14"
                                    />
                                    <div className="row mt-3">
                                        <div className="col-4">
                                            <p className="text-muted font-15 mb-1 text-truncate">
                                                Target
                                            </p>
                                            <h4>
                                                <i className="fe-arrow-down text-danger me-1" />
                                                18k
                                            </h4>
                                        </div>
                                        <div className="col-4">
                                            <p className="text-muted font-15 mb-1 text-truncate">
                                                Last week
                                            </p>
                                            <h4>
                                                <i className="fe-arrow-up text-success me-1" />
                                                3.25k
                                            </h4>
                                        </div>
                                        <div className="col-4">
                                            <p className="text-muted font-15 mb-1 text-truncate">
                                                Last Month
                                            </p>
                                            <h4>
                                                <i className="fe-arrow-up text-success me-1" />
                                                28k
                                            </h4>
                                        </div>
                                    </div>
                                    {/* end row */}
                                </div>
                            </div>
                            {/* collapsed end */}
                        </div>
                        {/* end card-body */}
                    </div>
                    {/* end card*/}
                </div>
                {/* end col*/}
            </div>
            {/* end row */}
            <div className="row">
                <div className="col-xl-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-widgets">
                                <Link to="#" data-bs-toggle="reload">
                                    <i className="mdi mdi-refresh" />
                                </Link>
                                <Link
                                    data-bs-toggle="collapse"
                                    to="#cardCollpase4"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="cardCollpase4"
                                >
                                    <i className="mdi mdi-minus" />
                                </Link>
                                <Link to="#" data-bs-toggle="remove">
                                    <i className="mdi mdi-close" />
                                </Link>
                            </div>
                            <h4 className="header-title mb-0">Revenue By Location</h4>
                            <div id="cardCollpase4" className="collapse show">
                                <div className="pt-3">
                                    <div id="world-map-markers" style={{ height: 433 }} />
                                </div>
                            </div>
                            {/* collapsed end */}
                        </div>
                        {/* end card-body */}
                    </div>
                    {/* end card*/}
                </div>
                {/* end col */}
                <div className="col-xl-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-widgets">
                                <Link to="#" data-bs-toggle="reload">
                                    <i className="mdi mdi-refresh" />
                                </Link>
                                <Link
                                    data-bs-toggle="collapse"
                                    to="#cardCollpase5"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="cardCollpase5"
                                >
                                    <i className="mdi mdi-minus" />
                                </Link>
                                <Link to="#" data-bs-toggle="remove">
                                    <i className="mdi mdi-close" />
                                </Link>
                            </div>
                            <h4 className="header-title mb-0">Top Selling Products</h4>
                            <div id="cardCollpase5" className="collapse show">
                                <div className="table-responsive pt-3">
                                    <table className="table table-hover table-centered mb-0">
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>ASOS Ridley High Waist</td>
                                                <td>$79.49</td>
                                                <td>82</td>
                                                <td>$6,518.18</td>
                                            </tr>
                                            <tr>
                                                <td>Marco Lightweight Shirt</td>
                                                <td>$128.50</td>
                                                <td>37</td>
                                                <td>$4,754.50</td>
                                            </tr>
                                            <tr>
                                                <td>Half Sleeve Shirt</td>
                                                <td>$39.99</td>
                                                <td>64</td>
                                                <td>$2,559.36</td>
                                            </tr>
                                            <tr>
                                                <td>Lightweight Jacket</td>
                                                <td>$20.00</td>
                                                <td>184</td>
                                                <td>$3,680.00</td>
                                            </tr>
                                            <tr>
                                                <td>Marco Shoes</td>
                                                <td>$28.49</td>
                                                <td>69</td>
                                                <td>$1,965.81</td>
                                            </tr>
                                            <tr>
                                                <td>ASOS Ridley High Waist</td>
                                                <td>$79.49</td>
                                                <td>82</td>
                                                <td>$6,518.18</td>
                                            </tr>
                                            <tr>
                                                <td>Half Sleeve Shirt</td>
                                                <td>$39.99</td>
                                                <td>64</td>
                                                <td>$2,559.36</td>
                                            </tr>
                                            <tr>
                                                <td>Lightweight Jacket</td>
                                                <td>$20.00</td>
                                                <td>184</td>
                                                <td>$3,680.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* end table responsive*/}
                            </div>
                            {/* collapsed end */}
                        </div>
                        {/* end card-body */}
                    </div>
                    {/* end card*/}
                </div>
                {/* end col */}
            </div>
            {/* end row */}
        </div>
    );
};

export default Home;
