import React from 'react';

import Title from './title/title';
import Data from './title/data';


class Category extends React.Component{
    render(){
        return(
            <>
            <Title/>
            <Data/>
            </>
        )
    }
}

export default Category;