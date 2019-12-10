import React from "react"
function Footer(){
    const styles ={
        backgroundColor:"red",
        height: 100 ,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        marginTop: "50px"
    }
    return(
        <footer style={styles}>This is a footer</footer>
    )
}
export default Footer