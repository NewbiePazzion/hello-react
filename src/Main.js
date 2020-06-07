import React, { Component } from 'react';
import namaMakanan from './components/home/lib/Food';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Menu Makanan',
      title2: 'Menu Minuman',
      inputValue: 'Aufa Billah',
      inputKota: ''
    }
    this.rubahData = this.rubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  rubahData() {
    this.setState((state, props) => {
     return {
      title: state.title2,
      title2: state.title,
     };
    });
  }
  // handleChange(e) {
  //   this.setState({
  //     inputValue: e.target.value,
  //   });
  // }
  handleChange(value, e) {
    this.setState({
      [value]: e.target.value,
    });
  }
  componentDidMount() {
    console.log('Jalan: componentDidMount');
  }
render() {
  return(
    <div>
      <h3>{ this.state.title }</h3>
      <h2>{ this.state.title2 }</h2>
      <button onClick={() => this.rubahData()}>Ubah Makanan</button><br/><br/>
      <input type='text' value={ this.state.inputValue || ''  } placeholder='makanan' onChange={ (e) => this.handleChange('inputValue', e) } />
      <input type='text' value={ this.state.inputKota || ''  } placeholder='kota' onChange={ (e) => this.handleChange('inputKota', e) } />
    
      {/* {this.state.namaMakanan.map((value, index) => { */}
      {/* {this.props.namaMakanan.map((value, index) => { */}
      {namaMakanan.map((value, index) => {
        return (
          <div key = {index+1}>
            <p>No {index}</p>
            <p>Nama {value.nama}</p>
            <p>Harga {value.harga}</p>
          </div>
        );
      })};
    </div>
  );
 };
}
export default Main;