import * as React from 'react';
import List from "./List";
import Form from "./Form";
import LayoutPage from "./Layout";

class Home extends React.Component {
  render() {
      const content =(<div>
            <h2>Add a new article</h2>
            <Form />
            <h2>Articles</h2>
            <List />
        </div>)  

        return <LayoutPage content={content} activedIndex="1"/>;
  }
}

export default Home