import React,{Component} from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrapperComponent,Axios)=>{
  return class extends Component{
    state={
      error:null
    }
    componentWillMount(){
      this.reqInterceptor = Axios.interceptors.request.use(req=>{
        this.setState({error:null})
        return req;
      })
      this.resInterceptor =Axios.interceptors.response.use(response=>response,error=>{
        this.setState({error:error});
      })
    }

    componentWillUnmount(){
      Axios.interceptors.request.eject(this.reqInterceptor);
      Axios.interceptors.response.eject(this.resInterceptor)
    }

    errorConfirmedHandler=()=>{
      this.setState({error:null})
    }

    render(){
      return (
        <>
        <Modal show={this.state.error} showHideBackdrop={this.errorConfirmedHandler}>{this.state.error?this.state.error.message:null}</Modal>
        <WrapperComponent {...this.props}/>
        </>
      )
    }
  }

  }



export default withErrorHandler;