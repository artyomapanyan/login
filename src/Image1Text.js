

function Image1Text({text, handleInitUpdate, handleDelete}) {
    


    return (
        <div className='hashiv-div-1'>
             <label className="hashiv-1"> 
                <div className="span1">
                    <div>
                        {text.coment}{'  '}
                        {text.date}{" "}
                        <button onClick={()=>handleInitUpdate(text)}>update</button> {"   "}
                        <button onClick={()=>handleDelete(text)}>x</button>
                    </div>    
                        

                </div>
            </label> 
        </div>
    )

}

export default Image1Text;