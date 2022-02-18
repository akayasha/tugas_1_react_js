import React , {Component} from 'react';
import MenuKontak from "./Page/MenuKontak"
import MenuUtama from "./Page/MenuUtama"
import MenuProduct from "./Page/MenuProduct"
import MenuTentangKami from "./Page/MenuTentangKami"

const Header = () => {
  return (
    <div>
    <h1>Ini halaman untuk Header </h1>
    </div>
  );
};

const Footer = () => {
  return(
    <div>
    <h1> ini Halaman Footer</h1>
    </div>
  );
};

class App extends Component{
  render(){
    return (
      <div>
      <Header />
      <MenuUtama />
      <MenuProduct />
      <MenuKontak />
      <MenuTentangKami />
      <Footer />
      </div>
    )
  };


}


export default App;
