import React from "react";

class AddContact extends React.Component
{
  state= {
    name:"",
    email:"",
    mobile:""
  };

  add = (e) => {
    e.preventDefault();
    if(this.state.name==="" || this.state.email==="" || this.state.mobile=== ""){
      alert("All the fields are mandatory")
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" ,mobile:""});
   };
    render() {

        return(
            <div className="ui main" style={{ border: '1px solid #000' }}>
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={this.add}>
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value = {this.state.name}
                  onChange={(e)=>this.setState({name:e.target.value})}
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  value = {this.state.email}
                  onChange={(e)=>this.setState({email:e.target.value})}
                />
              </div>
              <div className="field">
                <label>Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="mobile"
                  value = {this.state.mobile}
                  onChange={(e)=>this.setState({mobile:e.target.value})}
                />
              </div>
              <button className="ui button black">Add</button>
            </form>
          </div>
         );
      }
}

export default AddContact