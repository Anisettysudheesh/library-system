import React, { useState , useRef } from 'react';
import logo from "../pictures/logo.jpg"
import "../library.css"
function Library() {

  
    
    const [data,setData]=useState({
        1:{
            Branch:"",
            Titles:"",
            Volumes:"",
            NatPrintJournals:"",
            IntPrintJournals:""
        },
        2:{
            Branch:"",
            Titles:"",
            Volumes:"",
            NatPrintJournals:"",
            IntPrintJournals:""
        },
        3:{
            Branch:"",
            Titles:"",
            Volumes:"",
            NatPrintJournals:"",
            IntPrintJournals:""
        },
        4:{
            Branch:"",
            Titles:"",
            Volumes:"",
            NatPrintJournals:"",
            IntPrintJournals:""
        },
        5:{
            Branch:"",
            Titles:"",
            Volumes:"",
            NatPrintJournals:"",
            IntPrintJournals:""
        }, 
        6:{
            Branch:"",
            Titles:"",
            Volumes:"",
            NatPrintJournals:"",
            IntPrintJournals:""
        },
        7:{
            Branch:"",
            Titles:"",
            Volumes:"",
            NatPrintJournals:"",
            IntPrintJournals:""
        },
    })
    const general = useRef("")
    const branch1ref = useRef("")
    const branch2ref = useRef("")
    const titles1ref = useRef("")
    const titles2ref = useRef("")
    const vol1 = useRef("")
    const vol2 = useRef("")
    const nat1 = useRef("")
    const nat2 = useRef("")
    const int1 = useRef("")
    const int2 = useRef("")
    const branch3ref = useRef("")
    const branch4ref = useRef("")
    const titles3ref = useRef("")
    const titles4ref = useRef("")
    const vol3 = useRef("")
    const vol4 = useRef("")
    const nat3 = useRef("")
    const nat4 = useRef("")
    const int3 = useRef("")
    const int4 = useRef("")
    const branch5ref = useRef("")
    const branch6ref = useRef("")
    const titles5ref = useRef("")
    const titles6ref = useRef("")
    const vol5 = useRef("")
    const vol6 = useRef("")
    const nat5 = useRef("")
    const nat6 = useRef("")
    const int5 = useRef("")
    const int6 = useRef("")
    const branch7ref = useRef("")
    const titles7ref = useRef("")
    const vol7 = useRef("")
    const nat7 = useRef("")
    const int7 = useRef("")
    const scrollref = useRef("")




    const Editable= (sno,ref,colname)=>{
        const oldvalue = ref.current.innerHTML;
        console.log(oldvalue)
        const newvalue = prompt("Enter new value", oldvalue);
        if(newvalue !== null){
        setData((prevdata) => {
            return {
                ...prevdata,
                [sno]: {
                    ...prevdata[sno],
                    [colname]: newvalue
                }
            }
        })
    }

    }
 
    

       let totalv = 0;
       let totalt = 0;
       let totalnat = 0;
       let totalint = 0;
       for(let i=1; i<=7; i++)
        {
              totalv = totalv + parseInt(data[i].Volumes || 0)
       }
       for(let i=1; i<=7; i++)
        {
              totalt = totalt + parseInt(data[i].Titles || 0)
       }
       for(let i=1; i<=7; i++)
       {
              totalnat = totalnat + parseInt(data[i].NatPrintJournals || 0)
       }
       for(let i=1; i<=7; i++)
        {
              totalint = totalint + parseInt(data[i].IntPrintJournals || 0)
       }


    return ( 
        <div>
             <header>
        <img src={logo} width="130px" height="130px"></img> <span contenteditable="true">GEETHANJALI INSTITUTE OF SCIENCE AND TECHNOLOGY: NELLORE, AP.</span>
       </header>
        <h2>CENTRAL LIBRARY</h2>
        <h3>LIBRARY AT A GLANCE</h3>
    
    <marquee class="scrolling" contenteditable="true" scrollamount="5" ref={scrollref} onClick={scrollEditable}>{scrollData || "Library updates scrolling text here..."}</marquee> 

    <table>
        <thead>
            <tr style={{color: "rgb(169, 14, 53)" }}>
                <th>S.No</th>
                <th>Branch</th>
                <th>Titles</th>
                <th>Volumes</th>
                <th>Nat Print Journals</th>
                <th>Int Print Journals</th>
               
            </tr>
           
        </thead>
        <tbody>
        <tr>
                 <td  onClick={Editable}>1</td>
                <td ref={branch1ref} onClick={()=>Editable(1,branch1ref,"Branch")}>{data[1].Branch}</td>
                 <td ref={titles1ref} onClick={()=>Editable(1,titles1ref,"Titles")}>{data[1].Titles}</td>
                <td ref={vol1} onClick={()=>Editable(1,vol1,"Volumes")}>{data[1].Volumes}</td>
                <td ref={nat1} onClick={()=>Editable(1,nat1 ,"NatPrintJournals")}>{data[1].NatPrintJournals}</td>
                <td ref={int1} onClick={()=>Editable(1,int1 ,"IntPrintJournals")}>{data[1].IntPrintJournals}</td>
                

            </tr>
            <tr>
                 <td  onClick={Editable}>2</td>
                <td ref={branch2ref} onClick={()=>Editable(2,branch2ref,"Branch")}>{data[2].Branch}</td>
                 <td ref={titles2ref} onClick={()=>Editable(2,titles2ref,"Titles")}>{data[2].Titles}</td>
                <td ref={vol2} onClick={()=>Editable(2,vol2,"Volumes")}>{data[2].Volumes}</td>
                <td ref={nat2} onClick={()=>Editable(2,nat2 ,"NatPrintJournals")}>{data[2].NatPrintJournals}</td>
                <td ref={int2} onClick={()=>Editable(2,int2 ,"IntPrintJournals")}>{data[2].IntPrintJournals}</td>
                

            </tr>
            <tr>
                 <td  onClick={Editable}>3</td>
                <td ref={branch3ref} onClick={()=>Editable(3,branch3ref,"Branch")}>{data[3].Branch}</td>
                 <td ref={titles3ref} onClick={()=>Editable(3,titles3ref,"Titles")}>{data[3].Titles}</td>
                <td ref={vol3} onClick={()=>Editable(3,vol3,"Volumes")}>{data[3].Volumes}</td>
                <td ref={nat3} onClick={()=>Editable(3,nat3 ,"NatPrintJournals")}>{data[3].NatPrintJournals}</td>
                <td ref={int3} onClick={()=>Editable(3,int3 ,"IntPrintJournals")}>{data[3].IntPrintJournals}</td>
                

            </tr>
            <tr>
                 <td  onClick={Editable}>4</td>
                <td ref={branch4ref} onClick={()=>Editable(4,branch4ref,"Branch")}>{data[4].Branch}</td>
                 <td ref={titles4ref} onClick={()=>Editable(4,titles4ref,"Titles")}>{data[4].Titles}</td>
                <td ref={vol4} onClick={()=>Editable(4,vol4,"Volumes")}>{data[4].Volumes}</td>
                <td ref={nat4} onClick={()=>Editable(4,nat4 ,"NatPrintJournals")}>{data[4].NatPrintJournals}</td>
                <td ref={int4} onClick={()=>Editable(4,int4 ,"IntPrintJournals")}>{data[4].IntPrintJournals}</td>
            

            </tr>
            <tr>
                 <td  onClick={Editable}>5</td>
                <td ref={branch5ref} onClick={()=>Editable(5,branch5ref,"Branch")}>{data[5].Branch}</td>
                 <td ref={titles5ref} onClick={()=>Editable(5,titles5ref,"Titles")}>{data[5].Titles}</td>
                <td ref={vol5} onClick={()=>Editable(5,vol5,"Volumes")}>{data[5].Volumes}</td>
                <td ref={nat5} onClick={()=>Editable(5,nat5 ,"NatPrintJournals")}>{data[5].NatPrintJournals}</td>
                <td ref={int5} onClick={()=>Editable(5,int5 ,"IntPrintJournals")}>{data[5].IntPrintJournals}</td>
                

            </tr>
            
            <tr>
                 <td  onClick={Editable}>6</td>
                <td ref={branch6ref} onClick={()=>Editable(6,branch6ref,"Branch")}>{data[6].Branch}</td>
                 <td ref={titles6ref} onClick={()=>Editable(6,titles6ref,"Titles")}>{data[6].Titles}</td>
                <td ref={vol6} onClick={()=>Editable(6,vol6,"Volumes")}>{data[6].Volumes}</td>
                <td ref={nat6} onClick={()=>Editable(6,nat6 ,"NatPrintJournals")}>{data[6].NatPrintJournals}</td>
                <td ref={int6} onClick={()=>Editable(6,int6 ,"IntPrintJournals")}>{data[6].IntPrintJournals}</td>
                

            </tr>
            
            <tr>
                 <td  onClick={Editable}>7</td>
                <td ref={branch7ref} onClick={()=>Editable(7,branch7ref,"Branch")}>{data[7].Branch}</td>
                 <td ref={titles7ref} onClick={()=>Editable(7,titles7ref,"Titles")}>{data[7].Titles}</td>
                <td ref={vol7} onClick={()=>Editable(7,vol7,"Volumes")}>{data[7].Volumes}</td>
                <td ref={nat7} onClick={()=>Editable(7,nat7 ,"NatPrintJournals")}>{data[7].NatPrintJournals}</td>
                <td ref={int7} onClick={()=>Editable(7,int7 ,"IntPrintJournals")}>{data[7].IntPrintJournals}</td>
                

            </tr>
            <tr>
                <td></td>
                <td>Total</td>
                <td>{totalt}</td>
                <td>{totalv}</td>
                <td>{totalnat}</td>
                <td>{totalint}</td>

            </tr>

            
        </tbody>
        </table>

        </div>
     );
}

export default Library;
