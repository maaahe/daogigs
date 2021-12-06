import React from 'react'

export default function Gig({
    title,
    dao,
    url
}) {
    return (
        <div>
            <div class="w-3/4 m-auto pt-4 pb-4 border-b">
                <a href={url}>
                    <h3 class="text-lg font-semibold">{title}</h3>
                    <p>{dao}</p>
                </a>
            </div>
            
        </div>
    )
}
