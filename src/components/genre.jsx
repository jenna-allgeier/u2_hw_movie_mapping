const Genre = (props) => {
    let myColorVariable;
    switch(props.genre) {
        case 'action':
            // myColorVariable = red.action
            break
        default:
            myColorVariable = 'red'
    }
    switch(props.genre) {
        case 'romance':
            // myColorVariable = blue.romance
            break
        default:
            myColorVariable = 'blue'
    }
    switch(props.genre) {
        case 'comedy':
            // myColorVariable = yellow.comedy
            break
        default:
            myColorVariable = 'yellow'
    }
    switch(props.genre) {
        case 'drama':
            // myColorVariable = purple.drama
            break
        default:
            myColorVariable = 'purple'
    }
    switch(props.genre) {
        case 'animated':
            // myColorVariable = orange.animated
            break
        default:
            myColorVariable = 'orange'
    }
    
    
    return (
        <div>
            <p style={{backgroundColor: myColorVariable, color: 'red'}} >{ props.genre }</p>
            <p style={{backgroundColor: myColorVariable, color: 'blue'}} >{ props.genre }</p>
            <p style={{backgroundColor: myColorVariable, color: 'yellow'}} >{ props.genre }</p>
            <p style={{backgroundColor: myColorVariable, color: 'purple'}} >{ props.genre }</p>
            <p style={{backgroundColor: myColorVariable, color: 'orange'}} >{ props.genre }</p>
        </div>
    )
}

export default Genre