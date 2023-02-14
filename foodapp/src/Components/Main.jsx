import React from "react";
import { Link } from "react-router-dom";


function Main(){
    return(
        <div>
               <div >
      <div className="wholeBody">


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="./assets/images/mainLogo.png" alt="logo Image" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">


              </ul>
              <form className="d-flex">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ">
                  <li className="nav-item listdots">
                    <a className="nav-link mx-5" href="#" to="home">
                      <Link to="home">
                      <b className="mainitems" >Home</b></Link> </a>
                  </li>
                  <li className="nav-item listdots">
                    <a className="nav-link mx-5" href="#" > <Link to="products"> <b> Product</b></Link></a>
                  </li>
                  <li className="nav-item listdots">
                    <a className="nav-link mx-5" href="#"><b>Faq</b></a>
                  </li>
                  <li className="nav-item listdots">
                    <a className="nav-link mx-5" href="footer">  <Link to="footer" ><b>Contact</b></Link></a>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </nav>

        <section>
          <div className="homeimage">
            <h5 className="text-white d-flex justify-content-center p-5">Food App</h5>
            <div className="p-5">
              <h1 className="text-white d-flex justify-content-center"><b>Why stay hungry when</b></h1>
              <h1 className="text-white d-flex justify-content-center"><b>you can oeder from Bella Ononjie </b></h1>
            </div>
            <span className="text-white d-flex justify-content-center ">download the Bella Ononjie's food app now on</span>

            <div className="text-white d-flex justify-content-center p-5">
              <button type="button" className="btn playstoreButton m-3">Playstore</button>
              <button type="button" className="btn appstoreButton m-3">Appstore</button>
            </div>
          </div>
          <div className="d-flex justify-content-center w-100 imgdiv">
            <img src="./assets/images/phone1.png" alt="mobileImg" className="demophones" />
            <img src="./assets/images/phoneIMG2.png" alt="mobileImg" className="demophones2" />
          </div>
          <div>
            <h1 className="d-flex justify-content-center textareastart p-5"><b> How the app works</b></h1>
          </div>
          <div className="row d-flex flex-wrap-wrap">
            <div className="col-lg-6  w-50">
              <img src="./assets/images/phoneIMG1.png" alt="mobileImg" width="100%" className="smallimgs" />

            </div>
            <div className="col-lg-6 col-sm-12 createAccountText p-5">
              <h3 className="orangeText">Create an account</h3>
              <h1><b> Create/login at an<br /> exiting account to get started.</b></h1>
              <br />
              <h4 className="allh4">
                An account is credited with your mail <br /> and a desired password.
              </h4>
            </div>
          </div>




          <div className="row d-flex flex-wrap-wrap">
            <div className="col-lg-6 col-sm-12 createAccountText2 p-5">
              <h3 className="orangeText">Expore Varieties</h3>
              <h1><b> Shop for your favorites<br /> as e dye hot.</b></h1>
              <br />
              <h4 className="allh4">
                Shop for your favorite meals or drinks <br /> and enjoy while doing it.
              </h4>
            </div>

            <div className="col-lg-6  w-50">
              <img src="./assets/images/phone2.png" alt="mobileImg" width="100%" className="smallimgs" />
            </div>
          </div>


          <div className="row d-flex flex-wrap-wrap">
            <div className="col-lg-6  w-50">
              <img src="./assets/images/phone3.png" alt="mobileImg" width="100%" className="smallimgs" />

            </div>
            <div className="col-lg-6 col-sm-12 createAccountText p-5">
              <h3 className="orangeText">Check out </h3>
              <h1><b>When you done check out <br />and get it delivered.</b></h1>
              <br />
              <h4 className="allh4">
                When you done check out <br />and get it delivered with ease.
              </h4>
            </div>
          </div>


          <div className="homeimagefooter">
            <div className="p-5">
              <h1 className="text-white d-flex justify-content-center"><b>Download the app now.</b></h1>
            </div>
            <span className="text-white d-flex justify-content-center ">Available on your favorite store. Start your premium
              experiance now</span>

            <div className="text-white d-flex justify-content-center p-5">
              <button type="button" className="btn playstoreButtonfooter m-4">Playstore</button>
              <button type="button" className="btn appstoreButtonfooter m-4">Appstore</button>
            </div>
          </div>

          <div className="row lastfooter d-flex justify-content-between my-5">

            <div className="col-lg-3 col-sm-12  "> <img src="./assets/images/mainLogo.png" alt="" className="sm-" /></div>
            <div className="col-lg-3 col-sm-12 d-flex justify-content-center my-5">
              <svg className="orangelogo" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path className="orangelogo" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                <path className="orangelogo" d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </div>
            <div className="col-lg-3 col-sm-12 d-flex justify-content-center my-5">
              <p>Copywright 2020 Bella Ononjie.com</p>
            </div>

          </div>


        </section>

      </div>

    </div>
        </div>
    )
}

export default Main;