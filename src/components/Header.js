import React from 'react'

const Header = () => {
    const headStyle = {
        backgroundColor:"#7F7C82",
        margin :"0 ",
        height:"45px",
        display :"flex",
        justifyContent :"center",
        alignItems:"center"
    }
    const heading ={
        margin :"0 auto",
        color :"white"
    }

    return (
        <div style ={headStyle}>

            <h3 style ={heading}>Todo's App</h3>
            
        </div>
    )
}

export default Header
