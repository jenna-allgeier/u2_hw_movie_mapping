const Genre = (props) => {
    let myColorVariable;
    switch(props.genre) {
        case 'action':
            myColorVariable = 'red'
            break
        default:
            myColorVariable = 'red'
    }
    switch(props.genre) {
        case 'romance':
            myColorVariable = 'blue'
            break
        default:
            myColorVariable = 'blue'
    }
    switch(props.genre) {
        case 'comedy':
            myColorVariable = 'yellow'
            break
        default:
            myColorVariable = 'yellow'
    }
    switch(props.genre) {
        case 'drama':
            myColorVariable = 'purple'
            break
        default:
            myColorVariable = 'purple'
    }
    switch(props.genre) {
        case 'animated':
            myColorVariable = 'orange'
            break
        default:
            myColorVariable = 'orange'
    }
    
    
    return (
        <div>
            <p style={{backgroundColor: myColorVariable, color: 'red'}} >{ props.genre }action</p>
            <p style={{backgroundColor: myColorVariable, color: 'blue'}} >{ props.genre }</p>
            <p style={{backgroundColor: myColorVariable, color: 'yellow'}} >{ props.genre }</p>
            <p style={{backgroundColor: myColorVariable, color: 'purple'}} >{ props.genre }</p>
            <p style={{backgroundColor: myColorVariable, color: 'orange'}} >{ props.genre }</p>
        </div>
    )
}

export default Genre