const Genre = (props) => {
    let myColorVariable;
    switch (props.genre.name) {
        case 'Action':
            myColorVariable = 'red'
            break
        case 'Crime':
            myColorVariable = 'darkblue'
            break
        case 'Thriller':
            myColorVariable = 'black'
            break
        case 'Science Fiction':
            myColorVariable = 'darkgreen'
            break
        case 'Fantasy':
            myColorVariable = 'blue'
            break
        case 'Comedy':
            myColorVariable = 'orange'
            break
        case 'Drama':
            myColorVariable = 'purple'
            break
        case 'Adventure':
            myColorVariable = 'yellowgreen'
            break
        case 'Animation':
            myColorVariable = 'darkred'
            break
        case 'Family':
            myColorVariable = 'lightblue'
            break
        case 'Horror':
            myColorVariable = 'silver'
            break
        case 'History':
            myColorVariable = 'grey'
            break
        case 'Mystery':
            myColorVariable = 'pink'
            break
        case 'Romance':
            myColorVariable = 'aquamarine'
            break
        default:
            myColorVariable = 'red'
    }
    
    
    
    return (
        <div>
            <p style={{ backgroundColor: myColorVariable, color: '#ffffff'}} >
                { props.genre.name }
            </p>
        </div>
    )
}

export default Genre