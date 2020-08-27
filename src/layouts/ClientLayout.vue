<template>
  <q-layout>
    <q-header v-if="Object.entries(inforcty).length > 0" class="header-menu">
      <div class="header-contact" style="background: white;width: 100%;">
        <!-- row logoname cty -->
        <div class="row">
          <div class="col-6">
            <ul class="logo" style="padding-left: 15px;">
              <li>
                <div class="image" style="padding: 5px;">
                  <!-- <img :src="baseUrl + '/api/v1/home/view' + informationcty.img.fileType.split('/').pop().toUpperCase() + '/' + informationcty.img.id" height="60px" width="70px" /> -->
                  <!-- <img :src="informationcty.img" height="60px" width="70px" /> -->
                  <img src="../assets/transport60x60.png"/>
                </div>
              </li>
              <li>
                <div class="namecty" style="padding:10px;">
                  <q-item-label style="color:black;">{{
                    informationcty.title
                  }}</q-item-label>
                  <q-item-label class="youname" style="color:#bc4535;">{{
                    informationcty.name
                  }}</q-item-label>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-6">
            <div class="row icon">
              <div class="col-12">
                <div class="social-bar">
                  <ul class="social-icons">
                    <li><i class="fab fa-facebook-square"></i></li>
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fab fa-instagram"></i></li>
                    <li><i class="fab fa-github"></i></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row menu-contact" style="color:black;">
              <div class="col-12">
                <ul class="contact">
                  <li>
                    <p>
                      <span style="padding-right: 10px;font-size: 20px;">
                        <q-icon color="primary" name="email"/></span
                      ><span>{{ informationcty.email }}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span style="padding-right: 10px;font-size: 20px;"
                        ><q-icon color="primary" name="phone"/></span
                      ><span>{{ informationcty.phone }}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- row search mobile -->
        <div class="row check-search">
          <div class="col-10">
            <div class="search-mobile">
              <!-- <q-input rounded outlined dense placeholder="services">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input> -->
              <q-toolbar>
                <q-input
                  rounded
                  outlined
                  dense
                  class="event-search text-center"
                  placeholder="Search"
                  color="white"
                  style="width: 100%"
                >
                  <template v-slot:append>
                    <q-btn flat="flat" dense="dense" round="round"
                      ><q-icon name="search" color="white"
                    /></q-btn>
                  </template>
                </q-input>
              </q-toolbar>
            </div>
          </div>
          <div class="col-2">
            <div class="check-menu">
              <a href="#" class="icon" @click="myFunction()">&#9776;</a>
            </div>
          </div>
        </div>
        <!-- row Menu-Bar -->
        <div class="topnav" id="myTopnav">
          <div class="row">
            <div class="col-9">
              <ul class="menubar">
                <li v-for="mn in menu" :key="mn.id">
                  <a v-if="mn.submenu.length < 1" :href="mn.to">{{ mn.name }}</a>
                  <div v-if="mn.submenu.length > 1" class="dropdown">
                    <button class="dropbtn">{{ mn.name }}</button>
                    <div class="dropdown-content">
                      <a v-for="sub in mn.submenu" :key="sub.id" href="#">{{
                        sub.name
                      }}</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-3">
              <div class="search-desktop">
                <q-toolbar>
                  <q-input
                    rounded
                    outlined
                    dense
                    class="event-search text-center"
                    placeholder="Search"
                    color="white"
                  >
                    <template v-slot:append>
                      <q-btn flat="flat" dense="dense" round="round"
                        ><q-icon name="search" color="white"
                      /></q-btn>
                    </template>
                  </q-input>
                </q-toolbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-header>

    <q-page-container class="container">
      <router-view />
    </q-page-container>

    <div class="footer">
      <div class="row">
        <div class="col-md-3 col-sm-12">
          <div class="footer-widget">
            <div class="logo">
              <a href="#"
                ><img src="../assets/transport.png" alt=""
              /></a>
            </div>
            <div class="text">
              <p>
                {{informationcty.description}}
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="footer-widget links-widget">
            <h2>Quick Links</h2>
            <ul class="footer-list">
              <li v-for="mn in menu" :key="mn.id">
                <a href="#">{{ mn.name }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="footer-widget">
            <h2>Map</h2>
            <div class="widget-content">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.078174542536!2d106.64214815062698!3d10.80532459226414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752945af1e4587%3A0xe6607a649f8ee737!2zODkgVHLhuqduIFbEg24gRMawLCBQaMaw4budbmcgMTMsIFTDom4gQsOsbmgsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1589722188405!5m2!1sen!2s"
                height="200px"
                frameborder="0"
                style="border:0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="footer-widget info-widget">
            <h2>Contact Info</h2>
            <ul class="info-list">
              <li>{{informationcty.diaChi}}</li>
              <li>{{informationcty.phone}}</li>
              <li>{{informationcty.email}}</li>
            </ul>

            <ul class="social-links">
              <li class="google">
                <a href="#"><span class="fab fa-google-plus-g"></span></a>
              </li>
              <li class="facebook">
                <a href="#"><span class="fab fa-facebook-f"></span></a>
              </li>
              <li class="instagram">
                <a href="#"><span class="fab fa-instagram"></span></a>
              </li>
              <li class="twitter">
                <a href="#"><span class="fab fa-twitter"></span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row clearfix">
            <div class="col-6">
              <div class="copyright">
                <span class="theme_color" style="color:black;"
                  >Ak Web Designer</span
                >
                © 2019 All Right Reserved
              </div>
            </div>
            <div class="col-6">
              <ul class="footer-nav">
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import {loadAllInformation}  from "src/service/Home/home";
export default {
  data() {
    return {
      informationcty: {
      },
      menu: [
        {
          id: "1",
          name: "Trang Chủ",
          to: "",
          submenu: []
        },
        {
          id: "2",
          name: "Giới Thiệu",
          to: "about",
          submenu: []
        },
        {
          id: "3",
          name: "Dịch Vụ",
          to: "",
          submenu: [
            { id: 1, name: "Vận Chuyển Nhà", icon: "", to: "/approval/allbox" },
            { id: 2, name: "Vận Chuyển Văn Phòng", icon: "", to: "" },
            { id: 3, name: "Vận Chuyển Phòng Trọ", icon: "", to: "" },
            { id: 4, name: "Vận Chuyển Kho", icon: "", to: "" }
          ]
        },
        {
          id: "4",
          name: "Tin Tức",
          to: "tintuc",
          submenu: []
        },
        {
          id: "5",
          name: "Liên Hệ",
          to: "lienhe",
          submenu: []
        },
      ],
      inforcty:[],
      baseUrl: 'https://5f3c8c4e6c11f80016d6f17b.mockapi.io'
    };
  },
  computed: {},
  methods: {
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  },
  created() {
    loadAllInformation().then(response => {
       this.inforcty = response.data;
       console.log("inforcty",this.inforcty)
       this.informationcty = this.inforcty[0];
        console.log("inforcty==>",this.informationcty)
    });
  }
};
</script>
<style>
.q-placeholder {
  color: white;
}
.lapfor {
  width: auto;
}
</style>

<style scoped>
/* CSS Document */
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
/* ----header co dinh--- */
.header-menu {
  position: fixed;
}
/* ----row logonamecty desktop--- */
.logo li {
  float: left;
}
.youname {
  text-align: center;
  color: #e0eff2;
  font: italic bold 20px Georgia, Serif;
}
.namecty {
  padding: 10px;
  font-size: 17px;
  font-family: "Times New Roman", Times, serif;
}
/* ----row linkicon desktop--- */
.social-icons {
  margin-top: 5px;
  color: #3498db;
  float: right;
  margin-bottom: 10px;
}
.social-icons li {
  display: inline-block;
  font-size: 18px;
  transition: all 1s;
  margin: 0px 8px;
}
.social-icons li:last-child {
  margin-right: 40px;
}
.social-icons li:hover {
  color: #888;
  cursor: pointer;
}
/* ----row Contact desktop--- */
.menu-contact {
  margin-bottom: -10px;
  margin-top: -20px;
}
.contact {
  float: right;
  margin-top: 10px;
  margin-right: 40px;
}
.contact li {
  float: left;
  padding: 0px 8px;
}
/* ----row menu nav desktop--- */
/* .q-field__native,
.q-field__input {
  color: white;
}
.event-search {
  color: white;
} */
/* Add a black background color to the top navigation */
.topnav {
  background-color: #bc4535;
  overflow: hidden;
  width: 100%;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.menubar {
  float: right;
}
.menubar li {
  float: left;
}
/* Hide the link that should open and close the topnav on small screens */
.check-menu .icon {
  display: none;
}
/* Dropdown container - needed to position the dropdown content */
.dropdown {
  float: left;
  overflow: hidden;
}
/* Style the dropdown button to fit inside the topnav */
.dropdown .dropbtn {
  font-size: 17px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}
/* Style the dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
/* Style the links inside the dropdown */
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
/* Add a dark background on topnav links and the dropdown button on hover */
.topnav a:hover,
.dropdown:hover .dropbtn {
  background-color: #555;
  color: white;
}
/* Add a grey background to dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}
/* Show the dropdown menu when the user moves the mouse over the dropdown button */
.dropdown:hover .dropdown-content {
  display: block;
}
/* search-desktop*/
.search-desktop {
  float: right;
  margin: 0px 10px;
}
/* search-mobile*/
.search-mobile {
  display: none;
}
/* footer */
.footer {
  width: 100%;
  padding: 40px 20px 0px;
  background-color: #f4f5f7;
}

.footer-widget .logo {
  position: relative;
  margin-bottom: 15px;
  width: 210px;
}
.footer-widget .logo img {
  max-width: 100%;
  height: auto;
}
.footer-widget .text p {
  position: relative;
  color: #8a8d91;
  font-size: 15px;
  line-height: 1.7em;
  margin-bottom: 20px;
}
.footer-widget h2 {
  position: relative;
  font-size: 22px;
  font-weight: 600;
  color: #161c42;
  line-height: 1.2em;
  margin-bottom: 30px;
  margin-top: 25px;
  text-transform: capitalize;
}
.footer-list li {
  position: relative;
  margin-bottom: 17px;
}
.footer-list li a {
  position: relative;
  color: #8a8d91;
  font-size: 15px;
  padding-left: 15px;
}
.footer-list li a:before {
  position: absolute;
  content: "\f105";
  left: 0px;
  top: 0px;
  color: #8a8d91;
  font-weight: 800;
  font-family: "Font Awesome 5 Free";
}
.info-widget .info-list li {
  position: relative;
  color: #8a8d91;
  font-size: 15px;
  line-height: 1.8em;
  margin-bottom: 12px;
}
.info-widget .social-links {
  position: relative;
  float: left;
  padding: 15px 0px;
}
.info-widget .social-links li {
  position: relative;
  margin-right: 8px;
  display: inline-block;
}
.info-widget .social-links li a {
  position: relative;
  color: #ffffff;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  display: inline-block;
}
.info-widget .social-links li.google a {
  background-color: #dd4b39;
}
.info-widget .social-links li.facebook a {
  background-color: #4a6fbe;
}
.info-widget .social-links li.instagram a {
  background-color: #ea4c89;
}
.info-widget .social-links li.twitter a {
  background-color: #55acee;
}
.footer-bottom {
  position: relative;
  padding: 20px 0px;
  border-top: 1px solid #e5e5e5;
  color: #212529;
}
.footer-bottom .footer-nav {
  position: relative;
  text-align: right;
}
.footer-bottom .footer-nav li {
  position: relative;
  padding-right: 10px;
  margin-right: 10px;
  line-height: 1.1em;
  display: inline-block;
  border-right: 1px solid #8a8d91;
}
.footer-bottom .footer-nav li:last-child {
  padding-right: 0px;
  margin-right: 0px;
  border-right: none;
}
.links-widget {
  padding-left: 40px;
}
/*************footer End*****************/

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {
  /* ----row logonamecty mobile--- */
  .namecty {
    margin-top: -17px;
  }
  .youname {
    font-size: 14px;
    text-align: justify;
  }
  /* ----row contact mobile--- */
  .contact {
    line-height: 0px;
  }
  .contact {
    float: right;
    margin-top: 32px;
    margin-right: 0;
    margin-bottom: 10px;
  }
  .contact li {
    float: left;
    padding: 0px 0px;
  }
  .contact li p {
    margin: 0 0 5px;
  }
  /* ----row linkicon mobile--- */
  .social-icons {
    margin-top: 20px;
    color: #3498db;
    float: right;
    margin-bottom: 10px;
  }
  /* ----row menu nav mobile--- */
  .menubar li {
    float: none;
  }
  .menubar {
    float: left;
    width: 100%;
  }
  .topnav a:not(child),
  .dropdown .dropbtn {
    display: none;
  }
  .check-menu a.icon {
    float: right;
    display: block;
  }
  .topnav {
    background-color: gray;
    overflow: hidden;
    float: none;
  }
  /* search-desktop*/
  .search-desktop {
    display: none;
  }
  /* search-mobile*/
  .search-mobile {
    display: block;
    padding: 5px;
  }
  .check-menu {
    padding: 10px;
    font-size: 27px;
  }
  .check-menu a {
    color: white;
  }
  .check-search {
    background-color: #bc4535;
  }
  /* footer */
  .links-widget {
    padding-left: 0px;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .topnav.responsive .dropdown {
    float: none;
  }
  .topnav.responsive .dropdown-content {
    position: relative;
  }
  .topnav.responsive .dropdown .dropbtn {
    display: block;
    width: 100%;
    text-align: left;
  }
}
</style>
