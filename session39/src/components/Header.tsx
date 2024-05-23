import React, { memo } from 'react'
interface Props {
    count: number
}
function Header(props: Props) {
    console.log(props.count);
    return (
        <div>

        </div>
    )
}
export default memo(Header);
