import React from 'react'
import { asset } from '../../../utils/utils';
import Container from './AppLoader.styles'

const AppLoader = (props: any) => {
    const {show} = props;
    return (
        show ? <Container>
            <img src={asset('icons', 'rolling-loader.svg')} alt="page-loader"/>

            <div className="text">{show}</div>
        </Container> : <></>
    )
}

export default AppLoader
