import React from 'react'

export default function Bai5() {
    return (
        <div>B5
            <div className="relative ...">
                <p className='bg-cyan-500 w-40 h-20'>Relative parent</p>
                <div className="absolute bottom-0 left-0 ...">
                    <p className='bg-cyan-600 w-28 h-15'>Absolute child</p>
                </div>
            </div>
        </div>
    )
}