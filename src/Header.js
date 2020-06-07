import React, { Component } from "react";
import './components/home/header.css';
const judul = {
  color: 'red',
  backgroundColor: 'blue',
  marginTop: '10px',
};
// Class Component Header
class Header extends Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      judul: 'Ini judul dari state',
      dataMakanan: this.props.list,
      statusRendering: false
    };
    this.handlePesan = this.handlePesan.bind(this);
  }
  // function
  handlePesan(pesan, e) {
    e.preventDefault();
    alert(pesan);
    alert('Hai');
  };
  handleElement() {
    this.setState((state, props) => {
      return { statusRendering: !state.statusRendering };
    });
   }
  render() {
    // return (
    //   <div>
    //     { this.state.statusRendering === true ? (<h1>Selamat Datang</h1>) : (<h1>Selamat Tinggal</h1>) }
    //     <h2>Component dari Class Header</h2>
    //     <h3>{ this.state.judul }</h3>
    //     <p>Mengakses props dari App secara langsung: { this.props.list } </p>
    //     <p>Mengakses props dari State: { this.state.dataMakanan } </p>
    //     <a href='/' onClick={(e)=>this.handlePesan('Pesan dari Parameter', e)} >Halaman Header</a>
    //   </div>
    // );
    return(
      <div>
        { this.state.statusRendering === true ? (
            <div>
              <h1 style={{color: 'DodgerBlue', backgroundColor: 'green'}} >Selamat Datang</h1>
              <h2 style={judul} >Hai Aufa</h2>
              <h2 id='judulH2' >Hai Aufa</h2>
              <h2 className='subJudul' >Hai Aufa</h2>
            </div>
          ) : (
            <div>
              <h1>Selamat Tinggal</h1>
              <h2>Semoga Bertemu Kembali Aufa</h2>
            </div>
          )
        }
        <button onClick={ () => this.handleElement() }>Change</button>
      </div>
    );
  }
}
export default Header;