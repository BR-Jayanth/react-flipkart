

export const NamingConvention : React.FC<{}>=()=>{
    console.log(AskQuestion())
    console.log(A())
    return <div> 
        <h1>heading</h1>
        hello all im tsx function
        {AskQuestion()}
        {A()}
        
        {undefined==null?<h2>hello im h2</h2>:"something"}
        {/* {if(undefined==null){<h2>hello im h2</h2>}else{"something"}} */}
        {/* <AskQuestion/> */}
        
    </div>
}



function AskQuestion(){
    return "how are you"
}

let A =()=>{
    return "how are you"
}

AskQuestion()
A()