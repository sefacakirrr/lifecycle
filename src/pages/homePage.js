import React, {Component} from "react";
class HomePage extends Component{
    //  https://randomuser.me/api/
    
  constructor(props){
   super(props)
   this.state = {
     count:15,
     checkSystem:false,
   }
   console.log("CONSTRUCTOR------>SEFA3")
  }
    
  //  static getDerivedStateFromProps(props,state){
  //   console.log("getDerivedStateFromProps--------->")
  //   if(props.name === state.text){
  //         return {
  //           checkSystem:true
  //         }
  //   }
  //   return null
  //  }

  // shouldComponentUpdate(nextProps,nextState){
  //   console.log("NEXT-PROPS---->",nextProps)
  //    return nextProps.number < nextState.count
  // }

   
 
  handleClick=()=>{
    this.setState({
      countTwo: this.state.count + 1
    })
  }  

   componentDidMount() {
    console.log("didmount---------------->HELLO")
   }
   
    render() {
      window.onload = function(){
        console.log("SAYFA TAMAMEN YÜKLENDİ")
      }
        console.log("RENDER-------->HELLO THEREEEE")
        console.log("countTwo",this.state.count)
        console.log("RENDER--------MUSTAFA SEFA ÇAKIR")
        return (
            <div> 
                <b>LİFECYCLE METHODLARINI ÖĞRENİYORUZ</b>
                <div>
                  {
                    this.state.count 
                  }
                </div>
                <button onClick={this.handleClick}>Tıkla</button>
            </div>
        );
    }
}

export default HomePage;