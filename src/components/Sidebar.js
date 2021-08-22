import React from 'react'

const Sidebar = ({selectedTab, setSelectedTab}) => {
    const side ={
        width :"30%",
        dipplay :"flex",
        justifyContent :"center",
        padding:"3%"

    }
    const menu ={
        height :"45px",
        cursor:"pointer",
        paddingLeft :"35px"

    }
    const text ={
        display :"flex",
        margin :"0 auto",
        fontWeight :"normal"
    }
    return (
        <div style= {side}>
            <div style ={menu} onClick ={() => setSelectedTab("Inbox")}>
                <h3 style ={text}>Inbox</h3>
            </div>
            <div style ={menu} onClick ={() => setSelectedTab("Today")}>
                <h3 style ={text}>Today</h3>
            </div>
            <div style ={menu} onClick ={() => setSelectedTab("Next  Week")}>
                <h3 style ={text}>Next Week</h3>
            </div>
            
        </div>
    )
}

export default Sidebar
