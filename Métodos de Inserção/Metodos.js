function clear(){
    while(!empty()){
        pop()
    }
}
function pop(){
    if(!empty()){
        x=pop()
        push(x)
    }
    return x
}
