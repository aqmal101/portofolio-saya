import React from "react";
import './App.css';

const PORTOFOLIO_DATA = {
    nama_lengkap: "Aqmal Miftahul Husna",
    pekerjaan: "Front-end Developer",
    photo_profile: "/assets/images/photo_profile.png",
    tentang_saya : "Halo!, Nama Saya Aqmal Miftahul Husna, saya berasal dari Cilacap. Saat ini saya sedang belajar Web Developing dan sekarang saya sedang belajar ReactJS untuk membangun tampilan web lebih menarik ...",
    portofolio: [
      {
        Image:'/assets/images/img-1.png', 
        judul:'Website Pembelian Diamond Mobile Lagend',
        deskripsi:'Top-up Diamond Mobile Lagend Murah',
      },

      {
        Image:'/assets/images/img-1.png', 
        judul:'Website Pendaftaran SMP Negeri 3 Karangklesem',
        deskripsi:'Jadilah Bagian dari Kami!, Daftar Sekarang!',
      },

      {
        Image:'/assets/images/img-1.png', 
        judul:'Website Pemesanan Donat Madu',
        deskripsi:'Donat-donat Aneka Rasa',
      },

      {
        Image:'/assets/images/img-1.png', 
        judul:'Website Penyewaan Alat-alat Camping',
        deskripsi:'Menyewakan Peralatan Camp Lengkap',
      },
    ],
}

const MyPortofolio = () => {
  return (
    <div className="body">
      <div style={{minHeight: "100vh"}}>
      <div 
          className="halDepan"
          style={{height:'100vh', 
                  display:'flex', 
                  justifyContent:'center', 
                  alignItems: 'center',
                  flexDirection:'column',
                  backgroundColor:'purple',
          }}>
        <img 
            src= {PORTOFOLIO_DATA.photo_profile}
            style={{width: '6rem', 
                    height:'6rem',
                  }}
            alt="foto_profile"
        />    

        <h2 style={{color:'yellow'}}>
          {PORTOFOLIO_DATA.nama_lengkap}
        </h2>
        <code style={{color:'yellow'}}>
          {PORTOFOLIO_DATA.pekerjaan}
        </code>

      </div>  {/*portofolio halaman 1 */}

    {/* awal halaman Tentang Saya */}
    <div  className="halSaya"
          style={{height:'100vh',
                  backgroundColor:'whitesmoke',
                  paddingTop:'2rem',
                  paddingLeft:'4rem',
                  paddingRight:'4rem'
                }}
    >

      <h2 style={{color:'purple'}}>Tentang Saya</h2>
      <p style={{textAlign:'jusify'}}>
               {PORTOFOLIO_DATA.tentang_saya}
      </p>

        <details>
          <summary>Riwayat Pendidikan</summary>
          <p style={{textAlign:'justify'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, praesentium harum. At tempora repellat excepturi libero eos nisi non, nobis adipisci voluptas ad quaerat eum temporibus nam nemo ipsam. Ut dolore esse necessitatibus autem tenetur incidunt accusamus dolorem numquam deserunt! Accusamus hic deleniti nobis quaerat consequuntur velit fugit delectus qui neque laboriosam molestiae, odio quae voluptatem, impedit, ea illo suscipit obcaecati. Animi tempora sunt accusantium illum debitis. Laborum totam doloribus quisquam non nobis ad temporibus error eveniet dolorum consequuntur, repellendus accusamus consequatur reiciendis aliquid voluptate. 
          </p>
        </details>

        <details>
          <summary>Cita-cita</summary>
          <p style={{textAlign:'justify'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, praesentium harum. At tempora repellat excepturi libero eos nisi non, nobis adipisci voluptas ad quaerat eum temporibus nam nemo ipsam. Ut dolore esse necessitatibus autem tenetur incidunt accusamus dolorem numquam deserunt! Accusamus hic deleniti nobis quaerat consequuntur velit fugit delectus qui neque laboriosam molestiae, odio quae voluptatem, impedit, ea illo suscipit obcaecati. Animi tempora sunt accusantium illum debitis. Laborum totam doloribus quisquam non nobis ad temporibus error eveniet dolorum consequuntur, repellendus accusamus consequatur reiciendis aliquid voluptate. 
          </p>
        </details>

        <details>
          <summary>Harapan di Masa Depan</summary>
          <p style={{textAlign:'justify'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, praesentium harum. At tempora repellat excepturi libero eos nisi non, nobis adipisci voluptas ad quaerat eum temporibus nam nemo ipsam. Ut dolore esse necessitatibus autem tenetur incidunt accusamus dolorem numquam deserunt! Accusamus hic deleniti nobis quaerat consequuntur velit fugit delectus qui neque laboriosam molestiae, odio quae voluptatem, impedit, ea illo suscipit obcaecati. Animi tempora sunt accusantium illum debitis. Laborum totam doloribus quisquam non nobis ad temporibus error eveniet dolorum consequuntur, repellendus accusamus consequatur reiciendis aliquid voluptate. 
          </p>
        </details>

    </div>
    {/* akhir halaman Tentang Saya */}

    {/* awal halaman Portofolio Saya */}
    <div  style={{height:'100vh',
                  backgroundColor:'purple',
                  paddingTop:'2rem',
                  paddingLeft:'4rem',
                  paddingRight:'4rem'
                }}>

      <h2 style={{color:'yellow'}}>Portofolio Saya</h2>

      {/* Membuat kartu */}
      <div
        className="card"
        style={{
          display: "flex",
          paddingTop:"20px",
          flexDirection: "row",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>

        {PORTOFOLIO_DATA.portofolio.map((item, index) => (
          <div
            key={`portofolio-${6}`}
            style={{
                border: "1px solid #666",
                borderRadius: "12px",
                padding: "12px",
                width: "16rem",
                minHeight: "24rem",
                maxHeight:"100%",
                backgroundColor: "whitesmoke",
            }}
          >
            <img
              src={item.Image}
              style={{
                  width: "100%",
                  height: "12rem",
                  objectFit:"contain",}}
              alt="photo_profile"
            />

            <h4>{item.judul}</h4>
            <p>{item.deskripsi}</p>
          </div>

        ))}
        </div> {/*akhir Kartu Portofolio*/}

      </div>  {/*akhir Halaman Kartu*/}

        {/* awal footer */}
        <div style={{display:'flex',
                     height:'5px',
                     justifyContent:'center', 
                     padding:'4rem',
                     wordSpacing:'1px'}}>
          build with <span style={{color:'purple'}}>❤</span>
          by &nbsp;
          <a href="https://www.instagram.com/malenee.90/"
             style={{textDecoration:'none',
                     color:'purple',
                     fontWeight:'700',
          }}>
            malenee.90
          </a>
        </div>
        {/* akhir footer */}
      </div> 

    </div>   
  );
}

export default MyPortofolio;
