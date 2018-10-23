import React, { Component } from 'react';
import shoes from './Shoes.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: 0,
    }
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickSub = this.handleClickSub.bind(this);
  }
  handleClickAdd() {
    this.setState({
      inventory: ++this.state.inventory
    })
  }

  handleClickSub() {
    if (this.state.inventory > 0) {
      this.setState({
        inventory: --this.state.inventory
      })
    }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="head-logo" src="https://stockx-assets.imgix.net/logo/stockx-homepage-logo-dark.svg?auto=compress,format" alt="StockX Logo"/>
          <div className="inv-container">
            <h1 className="head-title">SHOE INVENTORY</h1>
            <p className="inventory-id">SELECTED INVENTORY  {this.state.inventory}</p>
            <div className="inv-wrap">

            {shoes ? (shoes.map(shoe => (
              <Items key={shoe.id}  add={() => (this.handleClickAdd())} sub={() => (this.handleClickSub())} info={shoe}/>
              ))
            ) : (
              <div> Loading... </div>
            )}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

class Items extends Component {
  constructor(props) {
    super(props);
    const p = this.props.info;
    this.state = {
      name: p.name,
      brand: p.brand,
      imgUrl: p.img,
      style: p.style,
      size: p.size,
      id: p.id,
      click: false,
      edit: false,
      stock: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(x) {
    console.log(x);
    if (x === "add") {
      this.setState({
        stock: ++this.state.stock
      });
      return this.props.add();
    }
    if (x === "sub") {
      if (this.state.stock === 0) {
        return ;
      }
      this.setState({
        stock: --this.state.stock
      });
      return this.props.sub();
    }
    if(x==="edit") {
      this.setState({
        edit: true
      });
      return "";
    } else {
      this.setState({
        edit: false
      });
    }
    const y = !this.state.click;
    this.setState({
      click: y
    });
  }

  handleChange(event) {
    if (event.target.name === "brand") {
      this.setState({brand: event.target.value});
    } else if (event.target.name === "style") {
      this.setState({style: event.target.value});
    } else if (event.target.name === "size") {
      this.setState({size: event.target.value});
    } else if (event.target.name === "id") {
      this.setState({id: event.target.value});
    }
  }

  editItem() {
    if (this.state.edit === true) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Brand:
            <input type="text" name="brand" value={this.state.brand} onChange={this.handleChange}/>
          </label>
          <label>
            Style:
            <input type="text" name="style" value={this.state.style} onChange={this.handleChange}/>
          </label>
          <label>
            Size:
            <input type="text" name="size" value={this.state.size} onChange={this.handleChange}/>
          </label>
          <label>
            UPC ID:
            <input type="text" name="id" value={this.state.id} onChange={this.handleChange}/>
          </label>
        </form>
      );
    }
    return "";
  }

  shoeDetails() {
    return (
      <span>
        <h4 className="shoe-name"> {this.state.name.toUpperCase()} </h4>
        <h5 className="shoe-brand shoe-details"><span className="shoe-details-id">BRAND:</span> {this.state.brand.toUpperCase()} </h5>
        <h5 className="shoe-style shoe-details"><span className="shoe-details-id">STYLE:</span> {this.state.style.toUpperCase()} </h5>
        <h5 className="shoe-size shoe-details"><span className="shoe-details-id">SIZE:</span> {this.state.size.toUpperCase()} </h5>
        <h5 className="shoe-id shoe-details"><span className="shoe-details-id">UPC ID:</span> {this.state.id} </h5>
        <h5 className="shoe-id shoe-details"><span className="shoe-details-id">IN INVENTORY:</span> {this.state.stock} </h5>
      </span>
    )
  }

  render() {
    const p = this.props;
    const imgUrl = p.info.img;
    if (this.state.click === true) {
      return (
        <div key={p.info.id} className="shoe-container">

          <div className="shoe-name-div" onClick={() => (this.handleClick(p))}>
            <img className="shoe-img" src={p.info.img} alt={p.info.name}/>
            {this.shoeDetails()}
          </div>

          <div className="modal">
            <button className="remove-btn btn" onClick={() => (this.handleClick())}>DONE</button>
            <img className="shoe-img" src={p.info.img} alt={p.info.name}/>
            <h2 className="modal-title">{this.state.name.toUpperCase()}</h2>
            <div className="btn-container">
              <button className="add-btn btn" onClick={() => (this.handleClick("add"))}>ADD</button>
              <button className="edit-btn btn" onClick={() => (this.handleClick("edit"))}>EDIT</button>
              <button className="remove-btn btn" onClick={() => (this.handleClick("sub"))}>REMOVE</button>
            </div>
            {this.editItem()}
          </div>
          <div className="modal-outter" onClick={() => (this.handleClick(p))}>
          </div>
        </div>
      );
    }

    return (
      <div key={this.state.id} className="shoe-container" onClick={() => (this.handleClick(p))}>
        <div className="shoe-wrap">
          <img className="shoe-img" src={this.state.imgUrl} alt={p.info.name}/>
        </div>
        {this.shoeDetails()}
      </div>
    );

  }
}

export default App;
