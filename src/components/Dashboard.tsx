import * as React from 'react';
import LayoutPage from "./Layout";

class Dashboard extends React.Component {
  render() {
    const content =(<div> <h2>Dashboard</h2> </div>)  

    return <LayoutPage content={content} activedIndex="2"/>;
  }
}

export default Dashboard;