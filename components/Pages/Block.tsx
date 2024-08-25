import { relative } from "path"

export const Block = props =>
   
    {
      let book = props.book
      if(!props.state.faves)
        {
            props.state.faves= []
        }
      return <f-x style={{height:150,width:200,minWidth:150,flex:1,position:"relative"}}>
       <img
      className={global.styles.hover}
       src={book.imagelink}
       style={{height:150,width:200,objectFit:"fill",minWidth:150,flex:1}}
       onClick={()=>{
        props.state.form = "bookspecs"
        props.state.book = book
        props.refresh( )
       
       }}/>

       
        {props.state.faves.includes(props.book.title)?
        <img src="https://irmapserver.ir/research/15/heart.png" 
        style={{height:30, width:30,objectFit:"contain",position:"absolute",bottom:3,right:5}}/> :null}
       </f-x>
    }