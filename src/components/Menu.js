import React, {useState} from 'react'

export default function Menu({setGigs}) {

    function getTag(e) {
        let tag = e.currentTarget.getAttribute("tag")
        console.log(tag)
        e.preventDefault()
    }
    
    return (
        <div class="bg-gray-50 pt-4 pb-4">
            <ul class="flex flex-row w-3/4 m-auto">
                <li class="mr-6 text-sm"><a href="" tag="all" onClick={(e) => getTag(e)}>All</a></li>
                <li class="mr-6 text-sm" tag="development"><a href="" tag="development" onClick={(e) => getTag(e)}>Development</a></li>
                <li class="mr-6 text-sm" tag="design"><a href="" tag="design" onClick={(e) => getTag(e)}>Design</a></li>
                <li class="mr-6 text-sm" tag="community"><a href="" tag="community" onClick={(e) => getTag(e)}>Community</a></li>
            </ul>
        </div>
    )

    
}
