import * as React from 'react';
import { Button,Input } from 'antd';
import { connect } from "react-redux";
import * as uuidv1 from "uuid";
import './app.scss';
import { addArticle } from "../actions/index";
const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};
interface FormStateIF {
    title:string;
}
interface FormPropsIF {
    addArticle:((article) => void);
}

class ConnectedForm extends React.Component<FormPropsIF, FormStateIF> {
  constructor(props: FormPropsIF, state: FormStateIF) {
    super(props,state);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const  {title} = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }
  render() {
    //const Search = Input.Search;
    const {title}  = this.state;
    return (
      <form onSubmit={this.handleSubmit}  className="form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Input id="title" placeholder="Basic usage" value={title} onChange={this.handleChange} />
          
        </div>
        <Button size="large" type="primary" htmlType="submit">SAVE</Button>
      </form>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form