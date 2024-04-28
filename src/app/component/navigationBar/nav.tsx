'use client';

import './style.css'
// import { useRouter } from 'next/router';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
    // const router_ = useRouter()
    const pathName = usePathname()
    const NavData = [
        {
            slug: '/',
            name: 'Home'
        },
        {
            slug:'/about',
            name: 'About',
        },
        {
            slug:'/service',
            name: 'Service',
        },
        {
            slug:'#',
            name: 'Pages',
            subMenu: [
                {
                    slug: '/bookus',
                    name: 'Book Us'
                },
                {
                    slug: '/blog',
                    name: 'Blog'
                },
            ]
        },
        {
            slug:'/contact',
            name: 'Contact',
        },
    ]
    return(
        <div className="container-fluid nav-bar">
            <div className="container">
                <nav className="navbar navbar-light navbar-expand-lg py-4">
                    <a href="/" className="navbar-brand">
                        <h1 className="text-primary_orange   fw-bold mb-0"><span className="text-dark">
                            <img className="logo-taju" src="./image/logo.png" />
                        </span> </h1>
                    </a>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        {/* <span className="fa fa-bars text-primary_orange"></span> */}
                        <svg className='svg nav-bars' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            {NavData && 
                                NavData.map(data => (
                                    (data.name == "Pages") ? 
                                    <div className="nav-item dropdown">
                                        <Link href={data.slug} className={`nav-link dropdown-toggle ${pathName == data.slug ? 'active': ''}`} data-bs-toggle="dropdown">{data.name}</Link>
                                        <div className="dropdown-menu ">
                                            {data.subMenu?.length && 
                                                data.subMenu.map(subData => (
                                                        <a href={subData.slug} className="dropdown-item">{subData.name}</a>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    : <Link href={data.slug} className={`nav-item nav-link ${pathName == data.slug ? 'active': ''}`}>{data.name}</Link>
                                    
                                    
                                ))
                            }
                            
                        </div>
                        <button className="btn-search btn-primary-orange  top-primary_orange visible btn btn-primary_orange btn-md-square me-4 rounded-circle d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#searchModal"><svg className='svg search ml-4 svg-top_orange' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>
                        <a href="" className="btn btn-primary_orange visible py-2 px-4 d-none d-xl-inline-block rounded-pill">Book Now</a>
                    </div>
                </nav>
            </div>
        </div>
    )
}