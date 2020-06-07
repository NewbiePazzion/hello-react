import React from 'react';
function Footer (props) {
  var nama = 'Aufa';
  return (
    <div>
      <h3>Halaman Footer</h3>
      <h3>Component ini dibuat menggunakan Function bukan Class</h3>
      <p>Nama saya: { nama } </p>
      <p>Nilai ini ditampilkan dari props: { props.judul } </p>
      <p>Nama Saya dari props: { props.nama } </p>
    </div>
  );
}
export default Footer;
