import Banner from 'componentes/Banner';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const PaginaPadrao = () => {
    return (
        <Fragment>
            <Banner />
            
            <Outlet />
        </Fragment>
    )
}

export default PaginaPadrao;