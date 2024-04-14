import React, { SetStateAction } from 'react'
import {  Filter, PencilLine, Search } from "lucide-react";


// interface ContactLayoutProps {
//     setContactClicked: 
// }

const Contacts= () => {
    return (
        <div id="#userCard" className="flex items-center justify-start p-3 w-full h[12%] bg-white rounded-md space-x-2 relative">
            <div className="w-[20%] h-fit absolute">
                <div className="rounded-full bg-gray-300 h-[56px] w-[56px] ">

                </div>
            </div>
            <div className="flex flex-col w-[100%] h-full pl-[56px] pr-[10px] overflow-hidden text-[14px]">
                <div className="flex justify-between items-start w-full h-full">
                    <div>User</div>
                    <div>Date</div>
                </div>
                <div className="flex justify-between items-start w-full h-full">
                    <div>Message</div>
                    <div>Count</div>
                </div>
            </div>
        </div>
    )
}

const ContactLayout = () => {
    return (
        <div className="w-[25%] h-[95vh] bg-blue-500 max-lg:hidden overflow-y-auto overflow-x-hidden rounded-r-3xl pt-4 px-6 flex flex-col space-y-4">
            <nav className="flex justify-between items-center">
                <span className="text-2xl">Chats</span>
                <div className="flex space-x-6 items-center">
                    <Filter style={{ strokeWidth: "1.5" }} />
                    <PencilLine style={{ strokeWidth: "1.5" }} />
                </div>
            </nav>
            <div className="flex justify-center items-center px-2 relative w-full h-[4%]">
                <div className="absolute left-0 p-4">
                    <Search style={{ strokeWidth: "1.5" }} />
                </div>
                <input type="search" placeholder="Search or start a new chat" className="w-full rounded-3xl text-[14px] outline-none pl-[36px] py-3 bg-blue-300 placeholder:text-blue-900" />
            </div>
            <div className="flex flex-col overflow-y-auto w-full h-full space-y-1">
                <Contacts />
            </div>
        </div>
    )
}

export default ContactLayout