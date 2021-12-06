import React from 'react'
import telegram from "../media/telegram.svg"

export default function Header() {
    return (
        <header class="bg-gray-100 pt-8 pb-8">
            <div class="w-3/4 m-auto flex flex-row justify-between items-center">
                <div>
                    <h1 class="font-bold text-xl">DAOGigs</h1>
                    <p class="text-sm">Remote Web3 gigs you can work on right now</p>
                </div>

                <a href="#"><img src={telegram} alt="telegram logo"/></a>
            </div>
        </header>
    )
}
