import React, { memo } from 'react'
interface Props {
    count: number
}
function Main(props: Props) {
    console.log(props.count);
    console.log("Components main duoc re-render theo app");
    return (
        <div>

        </div>
    )
}
export default memo(Main)