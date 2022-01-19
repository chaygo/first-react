import React from 'react'
import PropTypes from 'prop-types'
const Button = ({color,text,onShow})=>{
   // const onClick = () =>{
    //    console.log("uraaaa")
    //}
    return(
        <div>
             <button onClick={onShow} style={{backgroundColor:color }} className="btn">{text}</button> 
        </div>
    )
}

Button.defaultProps = {
    color:'blue',
}

Button.propTypes = {
    color:PropTypes.string,
    text:PropTypes.string,
    onShow:PropTypes.func,

}

export default Button