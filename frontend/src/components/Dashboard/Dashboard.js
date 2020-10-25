import React, { useState } from 'react';
import { API } from '../../config';
import { css } from "@emotion/core";
import ClockLoader from "react-spinners/ClockLoader";


// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
 
  render() {
    return (
      <div className="sweet-loading">
          {/*https://www.davidhu.io/react-spinners/*/}
          <br />
          <br />
          <br />
          <br />
          <center>Aguarde um momento estamos analisando as suas credenciais de acesso</center>
          <br />
          <br />
        <ClockLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

const Dashboard = () => {
    const [status, setStatus] = useState(0);
    if(JSON.parse(localStorage.getItem('token_jwt')) !== null){
        fetch(`${API}/secret/${JSON.parse(localStorage.getItem('token_jwt')).user._id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token_jwt')).token}`
        },
        //body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(res => {             
            if(res.status === 403) {   
                setStatus(403);
                //.removeItem('token_jwt');
            }else{
                setStatus(200);
            }
        })
    }

    function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    }

    if(status === 0){
        return <AwesomeComponent />
    }
    sleep(4000)
    if(status === 403) {  
        return (
            <div>
                <br /><br /><br />
                <img style={{marginLeft: '35%',}}  src="https://www.wpblog.com/wp-content/uploads/2018/02/4-580x318.jpg" alt="403 - Forbidden" />
            </div>
        );
    }else{
        return <h1>Dashboard</h1>;
    }
}

export default Dashboard;