import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="12300"
          title="The Lean Startup: Hardback"
          price={11.99}
          rating={5}
          image="https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg"
        />
        <Product
          id="12301"
          title="The Lean Startup: Softback"
          price={10.99}
          rating={5}
          image="https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12302"
          title="The Lean Startup: Hardback"
          price={11.99}
          rating={5}
          image="https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg"
        />
        <Product
          id="12303"
          title="The Lean Startup: Softback"
          price={10.99}
          rating={5}
          image="https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg"
        />
        <Product
          id="12304"
          title="The Lean Startup: Softback"
          price={10.99}
          rating={5}
          image="https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12305"
          title="The Lean Startup: Hardback"
          price={11.99}
          rating={5}
          image="https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg"
        />
        <Product
          id="12306"
          title="The Lean Startup: Softback"
          price={10.99}
          rating={5}
          image="https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg"
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
