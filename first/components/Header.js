import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'

const Header = ({title , onShow , showAdd }) => {
    return( 
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green' } text={ showAdd ? 'Close' : 'Open' } onShow={onShow}/>
        </header >


    )
}
Header.defaultProps={
    title : 'React Lessons',
}
Header.propTypes ={
    title :PropTypes.string,
}
export default Header