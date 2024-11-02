import { Component } from "react";



// class Todo extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             data: "",
//             list: []
//         }
//     }
//     data = (event) => {
//         this.setState({
//             data: event.target.value
//         })


//     }
//     sub = (event) => {
//         event.preventDefault();
//         this.setState({
//             list: [...this.state.list, this.state.data]
//         })


//     }
//     edi = (value, index) => {
//         var c = prompt("enter a name")
//         this.state.list.splice(index, 1, c)
//         this.setState({
//             list: this.state.list
//         })

//     }
//     del = (value, index) => {
//         var b = this.state.list.filter((val, ind) => {
//             return (val !== value)

//         })
//         this.setState({
//             list: b
//         })
//     }
//     render() {
//         var a = this.state.list.map((val, ind) => {
//             return (
//                 <>
//                     <tr key={ind}>
//                         <td>
//                             {val}

//                         </td>
//                         <td><button onClick={() => { this.edi(val, ind) }}>edit</button></td>
//                         <td><button onClick={() => { this.del(val, ind) }}>delete</button></td>
//                     </tr>
//                 </>
//             )

//         })
//         return (
//             <>
//                 <h1>todo list</h1>
//                 <form action="" onSubmit={this.sub}>
//                     <input type="text" onChange={this.data} />
//                     <input type="submit" value="submit" />
//                 </form>
//                 <table>{a}</table>
//             </>
//         )
//     }
// }
// export default Todo;




class Todo extends  Component {
    constructor(props){
        super(props);
        this.state={
            data:"",
            list:[]
        }
    }
    dat=(event)=>{
        this.setState({
            data: event.target.value
        })
    }
    
    sub=(event)=>{
        event.preventDefault();
        this.setState({
            
        list:[...this.state.list,this.state.data]
        })
        

    }
    edi=(value,index)=>{
        var c=prompt("edit the name")
        this.state.list.splice(index,1,c)
        this.setState({
            list:this.state.list
        })

    }
     
    del=(value,index)=>{
        var b=this.state.list.filter((val,ind)=>{
            return(val!==value)
        })
        this.setState({
            list:b
        })

    }
    render(){
        var a=this.state.list.map((val,ind)=>{
            return(
                <>
                <tr key={ind}>
                <td>{val}</td>
                <td><button onClick={()=>{this.edi(val,ind)}}>edit</button></td>
                <td><button onClick={()=>{this.del(val,ind)}}>delete</button></td>
                </tr>
                </>
            )
        })
        
        return(
            <>
            <h1>To do list</h1>
            <form action="" onSubmit={this.sub}>
                <input type="text" onChange={this.dat}/>
                <input type="submit"  value="submit"/>
            </form>
            <table>{a}</table>
            
            </>
        )
    }

}
export default Todo;