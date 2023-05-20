import React from "react";

const PORTOFOLIO_DATA = {
  nama_lengkap: "Aqmal Miftahul Husna",
  pekerjaan: "Front-end Developer",
  photo_profile: "/assets/images/photo_profile.jpg",
  tentang_saya : "Halo..Nama Saya Aqmal Miftahul Husna, saya berasal dari Cilacap",
  portofolio: [
    {Image:'/assets.images.img-1.png', 
     judul:'Website Pembelian Diamond Mobile Lagend',
     desktripsi:'Top-up Diamond Mobile Lagend Murah',
    },

    {Image:'/assets.images.img-1.png', 
     judul:'Website Pembelian Diamond Mobile Lagend',
     desktripsi:'Top-up Diamond Mobile Lagend Murah',
    }
  ]
}

const MyPortofolio = () => {
  return (
    <div style={{minHeight: "100vh"}}>
     <div 
        style={{height:'100vh', 
                 display:'flex', 
                 justifyContent:'center', 
                 alignItems: 'center',
                 flexDirection:'column',
                 backgroundColor:'skyblue',
        }}
      >
      <img src= {PORTOFOLIO_DATA.photo_profile}
            style={{width: '6rem', height:'6rem'}}
            alt="foto_profile"
      />    

      <h2>{PORTOFOLIO_DATA.nama_lengkap}</h2>
      <code>{PORTOFOLIO_DATA.pekerjaan}</code>


    </div>

    <div style={{height:'100vh',
                backgroundColor:'whitesmoke',
                paddingTop:'2rem',
                paddingLeft:'4rem',
                paddingRight:'4rem'
                }}>

      <h3>Tentang Saya</h3>
      <p style={{textAlign:'jusify'}}>
        {PORTOFOLIO_DATA.tentang_saya}
      </p>
    </div>

    <div style={{height:'100vh',
                backgroundColor:'skyblue',
                paddingTop:'2rem',
                paddingLeft:'4rem',
                paddingRight:'4rem'
                }}>

<h3>Portfolio Saya</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>

          {PORTOFOLIO_DATA.portofolio.map((item, index) => (
            <div
              key={`portfolio-${index}`}
              style={{
                border: "1px solid #666666",
                borderRadius: "12px",
                padding: "12px",
                width: "16rem",
                minHeight: "24rem",
                backgroundColor: "whitesmoke",
              }}
            >
              <img
                src={item.image}
                style={{
                  width: "100%",
                  height: "12rem",
                  objectFit: "contain",
                }}
                alt="photo_profile"
              />
              <h4>{item.judul}</h4>
              <p>{item.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
        <img src="" alt="" />
        <h4>ini kartu pokemon</h4>
        <p>Ini Deskripsi</p>
      </div>

}
export default MyPortofolio;











/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

