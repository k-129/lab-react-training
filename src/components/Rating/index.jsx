const Rating = ({ children }) => {
    const round = Math.round(children)
    switch (round) {
        case 1:
            return <p>★☆☆☆☆</p>
            
        case 2:
            return <p>★★☆☆☆</p>

        case 3:
            return <p>★★★☆☆</p>

        case 4:
            return <p>★★★★☆</p>

        case 5:
            return <p>★★★★★</p>
    }
}
export default Rating