import React from 'react'

function card({username = " dakshit ",  warfare= " cyber ", myArr}){
    // console.log(props);
    return(
        <div class="flex flex-col items-center p-7 rounded-2xl">
            <div>
                <img class="size-48 shadow-xl" alt="" src="/naruto-uzumaki-3840x2160-25560.png" />
            </div>
            <div class="flex">
                
                <span>{warfare} </span>
                <span>{username, myArr}</span>
                <span class="flex">
                <span>No. 4</span>
                <span>·</span>
                <span>2025</span>
                </span>
            </div>
        </div>
    )
}

export default card