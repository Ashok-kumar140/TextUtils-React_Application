import React from 'react'

function Alert(props) {
    const capatilize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)

    }
    return (
        <div style={{ height: '50px' }}>
            {
                props.alert && <div>
                    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                        <strong>{capatilize(props.alert.type)}</strong>: {props.alert.msg}

                    </div>
                </div>
            }
        </div>
    )
}

export default Alert
