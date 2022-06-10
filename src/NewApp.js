import React from 'react';
import axios from 'axios';
import Dust from "./Dust";

class NewApp extends React.Component{
  state = {
    isLoading: true,
    data: {},
  };
  getDust(){
    const API_KEY = process.env.REACT_APP_EV_KEY;
    const url = '/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?year=2020&pageNo=1&numOfRows=10&returnType=json&serviceKey='+{API_KEY}
    axios.get(url).then((response)=>{
      const data = response.data;//막히는 곳
      console.log(data);

      this.setState({
        isLoading: false,
        data: data,
      });
    });
  }
  componentDidMount(){
    this.getDust();
  }

  render(){
    const {isLoading, data} = this.state;
    if(isLoading === false){
      return(
        <section className='container'>
          <div className='loader'>
            <span className='loader_text'>Loading..</span>
          </div>
        </section>
        );
    } else{
      console.log(data);
      return(
      <div className='dustInfo'>
        <div>
          <p>발령 날짜 : {data.dataDate}</p>
        </div>
      {/* <Dust
        date={data.dataDate}
        location={data.districtName}
        gbn={data.issueGbn}
        code={data.itemCode}
      /> */}
      </div>
      );
    }
    // return(
    //   <section className='container'>

    //     {isLoading ? (
    //       <div className='loader'>
    //         <span className='loader_text'>Loading..</span>
    //       </div>
    //     ):(
    //       <div className='dustInfo'>
    //         <Dust
    //           dataDate={data.dataDate}
    //           districtName={data.districtName}
    //           issueGbn={data.issueGbn}
    //           itemCode={data.itemCode}
    //         />
    //       </div>
    //     )}
    //   </section>
    // )
  }
}

export default NewApp;
