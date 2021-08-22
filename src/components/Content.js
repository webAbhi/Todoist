import React from 'react'
import Sidebar from './Sidebar';
import Tasks from './Tasks';
import { useState } from 'react';

const Content = () => {
    const [selectedTab, setSelectedTab] = useState("Inbox"); 
    const content = {
        width :"50%",
        margin :"auto",
        display :"flex",
        height :"100vh",
        backgroundColor :"#F0D9FF"
    }

    return (
        
        <section style ={content}>

          <Sidebar selectedTab ={selectedTab} setSelectedTab ={setSelectedTab}  />
          <Tasks   selectedTab ={selectedTab} setSelectedTab ={setSelectedTab}  />  
        </section>
    )
}

export default Content
