import logo from './logo.svg';
import "./App.css"


function App() {
  return (
        <div>
          <h1>hello world...</h1>
          



<div class="wholeBody">
  {/* <!-- <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container-fluid d-flex justify-content-between">
      <div>
        <a class="navbar-brand" href="javascript:void(0)">
          <img src="./assets/images/mainLogo.png" alt="logo Image"
            class="m-4" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div>
        <div class="collapse navbar-collapse d-flex justify-content-around" id="mynavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link mx-5" href="javascript:void(0)"><b class="mainitems">Home</b> </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-5" href="javascript:void(0)"> <b> Product</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-5" href="javascript:void(0)"><b>Faq</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-5" href="javascript:void(0)"><b>Contact</b></a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </nav> --> */}

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="./assets/images/mainLogo.png" alt="logo Image" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
         
         
        </ul>
        <form class="d-flex">
          <ul class="">
          <li class="nav-item listdots">
            <a class="nav-link mx-5" href="javascript:void(0)"><b class="mainitems">Home</b> </a>
          </li>
          <li class="nav-item listdots">
            <a class="nav-link mx-5" href="javascript:void(0)"> <b> Product</b></a>
          </li>
          <li class="nav-item listdots">
            <a class="nav-link mx-5" href="javascript:void(0)"><b>Faq</b></a>
          </li>
          <li class="nav-item listdots">
            <a class="nav-link mx-5" href="javascript:void(0)"><b>Contact</b></a>
          </li>
        </ul>
        </form>
      </div>
    </div>
  </nav>

  <section>
    <div class="homeimage">
      <h5 class="text-white d-flex justify-content-center p-5">Food App</h5>
      <div class="p-5">
        <h1 class="text-white d-flex justify-content-center"><b>Why stay hungry when</b></h1>
        <h1 class="text-white d-flex justify-content-center"><b>you can oeder from Bella Ononjie </b></h1>
      </div>
      <span class="text-white d-flex justify-content-center ">download the Bella Ononjie's food app now on</span>

      <div class="text-white d-flex justify-content-center p-5">
        <button type="button" class="btn playstoreButton m-3">Playstore</button>
        <button type="button" class="btn appstoreButton m-3">Appstore</button>
      </div>
    </div>
    <div class="d-flex justify-content-center w-100 imgdiv">
      <img src="./assets/images/phone1.png" alt="mobileImg" class="demophones"/>
      <img src="./assets/images/phoneIMG2.png" alt="mobileImg" class="demophones2"/>
    </div>
    <div>
      <h1 class="d-flex justify-content-center textareastart p-5"><b> How the app works</b></h1>
    </div>
    <div class="row d-flex flex-wrap-wrap">
      <div class="col-lg-6  w-50">
        <img src="./assets/images/phoneIMG1.png" alt="mobileImg" width="100%" class="smallimgs"/>

      </div>
      <div class="col-lg-6 col-sm-12 createAccountText p-5">
        <h3 class="orangeText">Create an account</h3>
        <h1><b> Create/login at an<br /> exiting account to get started.</b></h1>
        <br />
        <h4 class="allh4">
          An account is credited with your mail <br /> and a desired password.
        </h4>
      </div>
    </div>




    <div class="row d-flex flex-wrap-wrap">
      <div class="col-lg-6 col-sm-12 createAccountText2 p-5">
        <h3 class="orangeText">Expore Varieties</h3>
        <h1><b> Shop for your favorites<br /> as e dye hot.</b></h1>
        <br />
        <h4 class="allh4">
          Shop for your favorite meals or drinks <br /> and enjoy while doing it.
        </h4>
      </div>

      <div class="col-lg-6  w-50">
        <img src="./assets/images/phone2.png" alt="mobileImg" width="100%" class="smallimgs"/>
      </div>
    </div>


    <div class="row d-flex flex-wrap-wrap">
      <div class="col-lg-6  w-50">
        <img src="./assets/images/phone3.png" alt="mobileImg" width="100%" class="smallimgs"/>

      </div>
      <div class="col-lg-6 col-sm-12 createAccountText p-5">
        <h3 class="orangeText">Check out </h3>
        <h1><b>When you done check out <br />and get it delivered.</b></h1>
        <br />
        <h4 class="allh4">
          When you done check out <br />and get it delivered with ease.
        </h4>
      </div>
    </div>


    <div class="homeimagefooter">
      <div class="p-5">
        <h1 class="text-white d-flex justify-content-center"><b>Download the app now.</b></h1>
      </div>
      <span class="text-white d-flex justify-content-center ">Available on your favorite store. Start your premium
        experiance now</span>

      <div class="text-white d-flex justify-content-center p-5">
        <button type="button" class="btn playstoreButtonfooter m-4">Playstore</button>
        <button type="button" class="btn appstoreButtonfooter m-4">Appstore</button>
      </div>
    </div>

    <div class="row lastfooter d-flex justify-content-between my-5">

      <div class="col-lg-3 col-sm-12  "> <img src="./assets/images/mainLogo.png" alt="" class="sm-"/></div>
      <div class="col-lg-3 col-sm-12 d-flex justify-content-center my-5">
        <ion-icon name="logo-twitter" class="orangelogo"></ion-icon>
        <ion-icon name="logo-facebook" class="orangelogo"></ion-icon>
        <ion-icon name="logo-instagram" class="orangelogo"></ion-icon>
      </div>
      <div class="col-lg-3 col-sm-12 d-flex justify-content-center my-5">
        <p>copywright 2020 Bella Ononjie.com</p>
      </div>

    </div>


  </section>

</div>

        </div>
  );
}

export default App;
