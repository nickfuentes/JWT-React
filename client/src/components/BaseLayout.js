import Reat from 'react'

function BaseLayout(props) {

    return (
        <div>
            <h1>Menu</h1>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default BaseLayout