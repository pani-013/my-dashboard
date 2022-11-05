import React from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'
import {UilEstate} from "@iconscout/react-unicons"
import {UilUsersAlt} from "@iconscout/react-unicons"
import { SidebarData } from '../../Data/Data'

const Sidebar = () => {
    const myFunc = ()=>{
        // alert("whatsup");
        if(document.getElementById("dropdown1").style.display === "block")
            document.getElementById("dropdown1").style.display = "none"; 
        else
        document.getElementById("dropdown1").style.display = "block";
    }

    const myFunc2 = ()=>{
        if(document.getElementById("sub2").style.display === "flex")
        document.getElementById("sub2").style.display = "none"; 
        else
        document.getElementById("sub2").style.display = "flex";    
    }
  return (
    <div className="Sidebar">
        <div className="logo">
            <img src={Logo} alt="" />
            <div className="logoText">
                <h3>Sweet <span>Life</span></h3>
            </div>
        </div>

        <div className="menu">
            <div className="menuItems">
                <UilEstate/>
                <a href="Dashboard">
                Dashboard
                </a>
            </div>

            {/* <button onClick={myFunc}>Click Me</button> */}
            <div className="drop">
                <div className="specialItem">
                    <UilUsersAlt/>
                    Profile
                </div>
                <i class='fas fa-angle-down' onClick={myFunc}></i>
            </div>


            <div className="dropdown1" id="dropdown1">
                <div className="sub1" id="sub1">
                    <i class='fas fa-user-tie'></i>
                    My Profile
                    <i class='fas fa-angle-down' onClick={myFunc2} id="myProfIcon"></i>
                </div>
                <div className="sub2" id="sub2">
                    <i class='far fa-address-card'></i>
                    Edit Profile 
                </div>
            </div> 
           


            {SidebarData.map((item, index)=>
            {
                return(
                    <div className="menuItems">
                        <item.icon/>
                        <a href={item.heading}>
                        {item.heading}
                        </a>
                    </div>
                )
            })}


        </div>
    </div>
  )
}

export default Sidebar
