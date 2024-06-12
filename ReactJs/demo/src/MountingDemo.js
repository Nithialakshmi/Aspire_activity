import React,{Component} from 'react'

export class MountingDemo extends Component{
    constructor(props){
        super(props)

        this.state ={
            name:'Dharani'
        }
    }
    render(){
        return(
            <div>MountingDemo
                <h1> Welcome {this.state.name}</h1>
            </div>
        )
    }
    static getDerivedStateFromProps(props, state){
        return{
            name:"Nithia"
        }
    }
    componentDidMount(){
        console.log("Component is mounted in the DOM");
    }
}

export default MountingDemo