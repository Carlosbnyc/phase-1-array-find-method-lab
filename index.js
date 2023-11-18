// code your solution here

function superbowlWin (record){
    let obj =  record.find(obj=>{
        if (obj.result === "W") {
            return (obj)
        }
    })

    if (obj){
        return (obj.year)
    }
}