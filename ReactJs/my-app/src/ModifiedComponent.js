// import React, { Component } from 'react';

// const HOC = (OriginalComponent) => {
//     return class ModifiedComponent extends Component {
//         constructor(props) {
//             super(props);

//             this.state = {
//                 count: 0
//             };

//             this.incrementCounter = this.incrementCounter.bind(this);
//         }

//         incrementCounter() {
//             this.setState({
//                 count: this.state.count + 1
//             });
//         }

//         render() {
//             return (
//                 <div>
//                     <OriginalComponent 
//                         count={this.state.count} 
//                         incrementCounter={this.incrementCounter} 
//                         {...this.props}
//                     />
//                 </div>
//             );
//         }
//     };
// };

// export default HOC;






import React, {Component} from 'react'


const HoC=(OriginalComponent)=>{
    return class ModifiesComponent extends Component{
        constructor(props){
            super(props)
            
            this.state={
                count:0
            }
        }
        incrementCounter(){
            this.setState({
                count:this.state.count + 1
            })
        }
        render(){
            return (
                <div>
                    <OriginalComponent count={this.state.count} incrementCounter={(event)=>this.incrementCounter(event)}></OriginalComponent>
                </div>
            )
        }
    }
}

export default HoC;