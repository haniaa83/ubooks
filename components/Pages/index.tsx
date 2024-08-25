import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import css from './css.module.css'
import './css.module.css' 
import WindowFloat from '../Libs/WindowFloat';
import { start } from 'repl';
import {Block} from './Block';





export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "خوش آمدید"


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      {state.form == "bookspecs"?<WindowFloat title="مشخصات کتاب" onclose={()=>{
        delete state.form
        refresh()
      }}>
         {/* <pre>{JSON.stringify(state.book,null,2)}</pre> */}
         <f-c>
          <f-15>نام کتاب:</f-15>
          <sp-2/>
          <f-15>{state.book.title}</f-15>
         </f-c>

         <f-c>
          <f-15>نویسنده:</f-15>
          <sp-2/>
          <f-15>{state.book.author}</f-15>
         </f-c>

         <f-c>
          <f-15>کشور:</f-15>
          <sp-2/>
          <f-15>{state.book.country}</f-15>
         </f-c>

         <f-c>
          <f-15>زبان:</f-15>
          <sp-2/>
          <f-15>{state.book.language}</f-15>
         </f-c>

         <f-c>
          <f-15>تعداد صفحات:</f-15>
          <sp-2/>
          <f-15>{state.book.pages}</f-15>
         </f-c>

         <f-c>
          <f-15>سال انتشار:</f-15>
          <sp-2/>
          <f-15>{state.book.year}</f-15>
         </f-c>

         <f-c>
          <f-15>قیمت:</f-15>
          <sp-2/>
          <f-15>{state.book.price}</f-15>
         </f-c>

         <g-b style={{height:30,width:"calc(100%-20px)",margin:"0 10px",backgroundColor:"#09220F",color:"#fff",borderRadius:"10px"}} onClick={()=>{
          if(!state.faves)
          {
            state.faves = []
          }
          state.faves.push(state.book.title)
          state.form = null
          refresh()
         }}>
          <f-13>
            علاقه مندی
          </f-13>
         </g-b>


      </WindowFloat>:null}
      <Window title={name} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>
        {/* <pre style={{ direction: "ltr" }}>{JSON.stringify(props, null, 2)}</pre> */}
        
        <c-c style={{ backgroundColor: "#000", height: 500, width: "100%" }}>
        
          <w-cse style={{}}>
           {props.books.map(book=> {
            return <Block 
            book={book}
            state={state}
            refresh={refresh}/>
              
           })}

          </w-cse>
        </c-c>
        
      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

   let books =await global.db.collection("books").find({}).toArray()
   for(let book of books){
    book.imagelink = "https://irmapserver.ir/research/ex/books/"+ book.imageLink
   }
   console.log(books)
  return {
    props: {
      data: global.QSON.stringify({
        session,
        books,
        // nlangs,
      })
    },
  }
}