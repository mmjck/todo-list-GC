function logger(type){
    if(type === "tiny"){
        return (req, res) => {
            console.log("emulation of a short LOG")
        }
    }

    if(type === "detailed"){
        return (req, res) => {
            console.log("emulation of a long LOG")
        }
    }

}

export default logger