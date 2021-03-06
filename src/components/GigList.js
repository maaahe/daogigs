import React from 'react'
import Gig from './Gig'

export default function GigList({gigs}) {
    return (
        <div>
            {gigs.map(gig => 
                    <Gig
                        key={gig.id}
                        {...gig}
                    />
                )}
        </div>
    )
}
