<template>
  <q-page class="flex flex-center" style="min-height: 0px;">
    <div class="q-pa-md" style="width:100%;padding:0px;">
      <q-carousel
        animated
        v-model="slide"
        swipeable
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        height="350px"
      >
        <q-carousel-slide
          :name="1"
          img-src="https://huunguyen.vn/wp-content/uploads/2019/06/banner-1.jpg"
        >
          <div class="absolute-top custom-caption">
            <div class="text-h2">First stop</div>
            <div class="text-subtitle1">Mountains</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          :name="2"
          img-src="https://huunguyen.vn/wp-content/uploads/2019/06/banner-2.jpg"
        >
          <div class="absolute-top custom-caption">
            <div class="text-h2">Second stop22</div>
            <div class="text-subtitle1">Famous City</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          :name="3"
          img-src="https://huunguyen.vn/wp-content/uploads/2019/06/banner-3.jpg"
        >
          <div class="absolute-top custom-caption">
            <div class="text-h2">Third stop</div>
            <div class="text-subtitle1">Famous Bridge</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          :name="4"
          img-src="https://huunguyen.vn/wp-content/uploads/2019/06/banner-4.jpg"
        >
          <div class="absolute-top custom-caption">
            <div class="text-h2">Third stop 2</div>
            <div class="text-subtitle1">Famous Bridge 2</div>
          </div>
        </q-carousel-slide>
        
      </q-carousel>
    </div>
    <div class="contener">
      <!-- Gioi Thieu Cong Ty -->
      <div class="vnt-servive-slide hidden-sm hidden-xs">
        <div class="wrapper">
          <div class="grid">
            <div class="col1">
              <div class="t1">14 năm</div>
              <div class="t2">Chuyên tâm phục vụ</div>
              <div class="t3">ĐỨNG ĐẦU LĨNH VỰC vận chuyển</div>
              <p></p>
            </div>
            <div class="col2">
              <div class="menu-slide-service hidden-sm hidden-xs">
                <div class="gridC">
                  <div class="col">
                    <div class="itemSer">
                      <div class="img">
                        <a class="pulse" href="#">
                          <img
                            src="https://chuyennha24h.net/wp-content/uploads/2019/11/i-2-h.png"
                            alt="Chuyển nhà trọn gói"
                        /></a>
                      </div>
                      <div class="txt">
                        <a href="#">Chuyển nhà</a>
                      </div>
                      <p></p>
                    </div>
                  </div>
                  <div class="col">
                    <div class="itemSer">
                      <div class="img">
                        <a class="pulse" href="#"
                          ><img
                            src="https://chuyennha24h.net/wp-content/uploads/2019/11/i-1-h.png"
                            alt="Chuyển văn phòng"
                        /></a>
                      </div>
                      <div class="txt">
                        <a href="#">Chuyển văn phòng</a>
                      </div>
                      <p></p>
                    </div>
                  </div>
                  <div class="col">
                    <div class="itemSer">
                      <div class="img">
                        <a class="pulse" href="#"
                          ><img
                            src="https://chuyennha24h.net/wp-content/uploads/2019/11/i-3-h.png"
                            alt="Chuyển nhà trọ"
                        /></a>
                      </div>
                      <div class="txt">
                        <a href="#">Chuyển nhà trọ</a>
                      </div>
                      <p></p>
                    </div>
                  </div>
                  <div class="col">
                    <div class="itemSer">
                      <div class="img">
                        <a class="pulse" href="#"
                          ><img
                            src="https://chuyennha24h.net/wp-content/uploads/2019/11/i-5-h.png"
                            alt="Taxi tải"
                        /></a>
                      </div>
                      <div class="txt">
                        <a href="#">Taxi tải</a>
                      </div>
                      <p></p>
                    </div>
                  </div>
                  <div class="col">
                    <div class="itemSer">
                      <div class="img">
                        <a class="pulse" href="#"
                          ><img
                            src="https://chuyennha24h.net/wp-content/uploads/2019/11/i-2-h.png"
                            alt="Hoàn trả mặt bằng"
                        /></a>
                      </div>
                      <div class="txt">
                        <a href="#">Hoàn trả mặt bằng</a>
                      </div>
                      <p></p>
                    </div>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- To Chat Cty -->
      <div class="title-bar">
        <h5><b>CÔNG TY VẬN CHUYỂN NHÀ VÀ VĂN PHÒNG</b></h5>
        <p>
          Công Ty Vận Chuyển Nhà Và Văn Phòng với các Dịch vụ chính bao gồm:
          Dịch vụ chuyển nhà, Chuyển văn phòng trọn gói, Chuyển hàng hóa.
        </p>
      </div>
      <div class="themanhbbas container">
        <div class="row row-mobile">
          <div class="col diemmanh-bbas col-md-3 col-sm-6 col-xs-12">
            <div class="col-inner text-center" style="padding:5px 5px 5px 5px;">
              <p class="topicon icon1">
                <span><i class="fas fa-hand-holding-usd"></i></span>
              </p>
              <p><span class="dacdiem">GIÁ CẢ</span></p>
              <p class="dacdiem-bbas">CẠNH TRANH</p>
              <p style="text-align: justify;padding: 5px 5px 5px 5px;">
                <span style="color:  #fff;"
                  >Nguyễn Minh luôn đưa ra một mức giá cạnh tranh nhất cho tất
                  cả dịch vụ của mình, đồng thời với dịch vụ đảm tốt đi
                  kèm.</span
                >
              </p>
            </div>
          </div>
          <div class="col diemmanh-bbas col-md-3 col-sm-6 col-xs-12">
            <div class="col-inner text-center" style="padding:5px 5px 5px 5px;">
              <p class="topicon icon2">
                <span><i class="fas fa-history"></i></span>
              </p>
              <p><span class="dacdiem">THỜI GIAN</span></p>
              <p class="dacdiem-bbas">ĐÚNG HẸN</p>
              <p style="text-align: justify;padding: 5px 5px 5px 5px;">
                <span style="color:  #fff;"
                  >Chúng tôi hiểu thời gian là yếu tố then chốt giúp giảm giá
                  vận chuyển, đội ngũ nhân viên luôn theo sát kế hoạch nhằm gia
                  hàng đúng thời gian
                </span>
              </p>
            </div>
          </div>
          <div class="col diemmanh-bbas col-md-3 col-sm-6 col-xs-12">
            <div class="col-inner text-center" style="padding:5px 5px 5px 5px;">
              <p class="topicon icon3">
                <span><i class="fas fa-user-tie"></i></span>
              </p>
              <p><span class="dacdiem">ĐỘI NGŨ</span></p>
              <p class="dacdiem-bbas">CHUYÊN NGHIỆP</p>
              <p style="text-align: justify;padding: 5px 5px 5px 5px;">
                <span style="color: #fff;"
                  >Với nhiều năm kinh nghiệm trong ngành logistics, đầy nhiệt
                  huyết luôn sẵn sàng hỗ trợ khách hàng.</span
                >
              </p>
            </div>
          </div>
          <div class="col diemmanh-bbas col-md-3 col-sm-6 col-xs-12">
            <div class="col-inner text-center" style="padding:5px 5px 5px 5px;">
              <p class="topicon icon4">
                <span><i class="fas fa-shield-alt"></i></span>
              </p>
              <p><span class="dacdiem">DỊCH VỤ</span></p>
              <p class="dacdiem-bbas">AN TOÀN</p>
              <p style="text-align: justify;padding: 5px 5px 5px 5px;">
                <span style="color: #fff;"
                  >Luôn đặt trách nhiệm an toàn hàng hóa lên hàng đâu đảm bảo
                  hàng đến tay người nhận, chúng tôi luôn đảm bảo 100% an toàn
                  hàng hóa.<br />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Dich Vu Chuyen Nghiep -->
      <div class="title-bar">
        <h5><b>DỊCH VỤ CHUYÊN NGHIỆP</b></h5>
      </div>
      <div class="dichvu" style="width:100%;margin-top: -15px;">
        <div class="row" style="padding:20px;">
          <div class="col-md-3 col-sm-6 col-xs-12" style="padding:20px;">
            <div class="img-inner" style="width: 100%;">
              <img
                src="https://chuyennha24h.net/wp-content/uploads/2019/10/dv1.jpg"
                alt=""
                width="100%"
              />
            </div>
            <h3 style="font-size: 1.25em;color:#5cb020;line-height: unset;">
              VẬN CHUYỂN NHÀ
            </h3>
            <p>
              Công ty nhận lưu trữ các loại giấy tờ, dữ liệu quan trọng với kho
              lưu trữ đạt tiêu chuẩn quốc tế. Đến với chúng tôi bạn có thể yên
              tâm về chất lượng và độ an toàn…
            </p>
            <p>
              <a class="readmore-item-services" href="#"
                >Đọc thêm <i class="fa fa-chevron-circle-right"></i
              ></a>
            </p>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12" style="padding:20px;">
            <div class="img-inner">
              <img
                src="https://chuyennha24h.net/wp-content/uploads/2019/10/dv2.jpg"
                alt=""
                width="100%"
              />
            </div>
            <h3 style="font-size: 1.25em;color:#5cb020;line-height: unset;">
              VẬN CHUYỂN VĂN PHÒNG
            </h3>
            <p>
              Công ty nhận lưu trữ các loại giấy tờ, dữ liệu quan trọng với kho
              lưu trữ đạt tiêu chuẩn quốc tế. Đến với chúng tôi bạn có thể yên
              tâm về chất lượng và độ an toàn…
            </p>
            <p>
              <a class="readmore-item-services" href="#"
                >Đọc thêm <i class="fa fa-chevron-circle-right"></i
              ></a>
            </p>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12" style="padding:20px;">
            <div class="img-inner">
              <img
                src="https://chuyennha24h.net/wp-content/uploads/2019/11/dv4.jpg"
                alt=""
                width="100%"
              />
            </div>
            <h3 style="font-size: 1.25em;color:#5cb020;line-height: unset;">
              VẬN CHUYỂN PHÒNG TRỌ
            </h3>
            <p>
              Công ty nhận lưu trữ các loại giấy tờ, dữ liệu quan trọng với kho
              lưu trữ đạt tiêu chuẩn quốc tế. Đến với chúng tôi bạn có thể yên
              tâm về chất lượng và độ an toàn…
            </p>
            <p>
              <a class="readmore-item-services" href="#"
                >Đọc thêm <i class="fa fa-chevron-circle-right"></i
              ></a>
            </p>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12" style="padding:20px;">
            <div class="img-inner" style="width: 100%;">
              <img
                src="https://chuyennha24h.net/wp-content/uploads/2019/10/dv3.jpg"
                alt=""
                width="100%"
              />
            </div>
            <h3 style="font-size: 1.25em;color:#5cb020;line-height: unset;">
              VẬN CHUYỂN KHO XƯỞNG
            </h3>
            <p>
              Công ty nhận lưu trữ các loại giấy tờ, dữ liệu quan trọng với kho
              lưu trữ đạt tiêu chuẩn quốc tế. Đến với chúng tôi bạn có thể yên
              tâm về chất lượng và độ an toàn…
            </p>
            <p>
              <a class="readmore-item-services" href="#"
                >Đọc thêm <i class="fa fa-chevron-circle-right"></i
              ></a>
            </p>
          </div>
        </div>
      </div>
      <!-- Tin Tuc Moi Nhat -->
      <div class="tintuc">
        <div class="row">
          <div class="col small-12 large-12">
            <div class="col-inner text-center">
              <div
                class="container section-title-container"
                style="margin-bottom:-5px;"
              >
                <h3 class="section-title section-title-center">
                  <b></b><span class="section-title-main">TIN MỚI NHẤT</span
                  ><b></b>
                </h3>
              </div>
              <!-- .section-title -->
              <p>Cập nhật tin tức mới nhất từ chúng tôi</p>
            </div>
          </div>
        </div>
        <!-- Create your own class for the containing div -->
        <div class="wrapper">
          <div class="carousel">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdfijAoiCIAzkce7wXTs624wu1oIKsJTclhQ&usqp=CAU"
                width="300px"
                height="200px"
              />
              <div class="text">
                <h5>Nội dung caption của slide thứ 2!</h5>
                <p>
                  <b>Noi dung title [...]</b>
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://envangtaxi.com.vn/ckfinder/userfiles/images/0036.jpg"
                width="300px"
                height="200px"
              />
              <div class="text">
                <h5>Nội dung caption của slide thứ 3!</h5>
                <p>
                  <b>Noi dung title [...]</b>
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://dichvutonghop.vn/wp-content/uploads/2019/06/chuyen-nha-tron-goi-da-nang.jpg"
                width="300px"
                height="200px"
              />
              <div class="text">
                <h5>Nội dung caption của slide thứ 4!</h5>
                <p>
                  <b>Noi dung title [...]</b>
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://vinamoves.com/wp-content/uploads/2018/08/kho-khan-chuyen-nha-3.png"
                width="300px"
                height="200px"
              />
              <div class="text">
                <h5>Nội dung caption của slide thứ 5!</h5>
                <p>
                  <b>Noi dung title [...]</b>
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFoRobInS573CZeTa0vdoAgb2_Mx84aEFRhQ&usqp=CAU"
                width="300px"
                height="200px"
              />
              <div class="text">
                <h5>Nội dung caption của slide thứ 6!</h5>
                <p>
                  <b>Noi dung title [...]</b>
                </p>
              </div>
            </div>
             <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFoRobInS573CZeTa0vdoAgb2_Mx84aEFRhQ&usqp=CAU"
                width="300px"
                height="200px"
              />
              <div class="text">
                <h5>Nội dung caption của slide thứ 6!</h5>
                <p>
                  <b>Noi dung title [...]</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Y Kien Khach Hang -->
      <div class="title-bar">
        <div
          class="container section-title-container"
          style="margin-bottom:-5px;"
        >
          <h3 class="section-title section-title-center">
            <b></b><span class="section-title-main">Ý KIẾN KHÁCH HÀNG</span
            ><b></b>
          </h3>
        </div>
        <!-- <h5><b>Ý KIẾN KHÁCH HÀNG</b></h5> -->
        <p style="margin:0px;">Khách hàng nói gì về dịch vụ của chúng tôi</p>
      </div>
      <div class="khachhang">
        <div class="q-pa-md">
          <q-carousel
            v-model="slide_kh"
            swipeable
            animated
            infinite
            :autoplay="autoplay"
            padding
            transition-prev="slide-right"
            transition-next="slide-left"
            height="auto"
            class=" text-black rounded-borders"
          >
            <q-carousel-slide name="style" class="column  flex-center">
              <q-avatar style="font-size:100px;">
                <img
                  src="data:image/jpeg;base64,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"
                />
              </q-avatar>
              <div class="q-mt-md text-center classp">
                <p>
                  Dịch vụ chuyên nghiệp, nhanh gọn. Khách hàng không phải đụng
                  vào bất cứ một việc gì.
                </p>
                <h4>Chị Đẹp đánh giá cao chất lượng dịch vụ.</h4>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column  flex-center">
              <q-avatar style="font-size:100px;">
                <img
                  src="data:image/jpeg;base64,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"
                />
              </q-avatar>
              <div class="q-mt-md text-center classp">
                <p>
                  Dịch vụ chuyên nghiệp, nhanh gọn. Khách hàng không phải đụng
                  vào bất cứ một việc gì.
                </p>
                <h4>Bé Đẹp đánh giá cao chất lượng dịch vụ.</h4>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column  flex-center">
              <q-avatar style="font-size:100px;">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRL3RlbWJoG5PfD1CKIqlAwRUS0g3pfmUi_nQ&usqp=CAU"
                />
              </q-avatar>
              <div class="q-mt-md text-center classp">
                <p>
                  Dịch vụ chuyên nghiệp, nhanh gọn. Khách hàng không phải đụng
                  vào bất cứ một việc gì.
                </p>
                <h4>gì đẹp đánh giá cao chất lượng dịch vụ.</h4>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column  flex-center">
              <q-avatar style="font-size:100px;">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3wozsxRkVmysBZX1DXzorx79x0Wd8wZdP8A&usqp=CAU"
                />
              </q-avatar>
              <div class="q-mt-md text-center classp">
                <p>
                  Dịch vụ chuyên nghiệp, nhanh gọn. Khách hàng không phải đụng
                  vào bất cứ một việc gì.
                </p>
                <h4>cô gái đẹp đánh giá cao chất lượng dịch vụ.</h4>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
      <!---scroll--->
      <div class="scroll">
        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
          <q-btn fab icon="keyboard_arrow_up" color="blue" />
        </q-page-scroller>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      slide: 1,
      autoplay: true,
      current: 3,
      tab: "mails",
      innerTab: "innerMails",
      splitterModel: 20,
      navPos: "bottom",
      slide_kh: "style"
    };
  },
  computed:{

  },
  methods: {
    slider(){
      // js slider
    $(document).ready(function() {
      $(".carousel").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 4
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerPadding: "40px",
              slidesToShow: 1
            }
          }
        ]
      });
    });
    // 
    }
  },
  created() {
    this.slider();
  }
};
</script>
<style scoped>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
}
.contener {
  width: 100%;
}
.vnt-servive-slide {
  /* position: absolute; */
  bottom: 0;
  left: -15px;
  right: -15px;
  z-index: 1;
  padding: 8px 0px;
}
.wrapper {
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}
.vnt-servive-slide .grid {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -15px;
}
.vnt-servive-slide .grid .col1 {
  width: 170px;
  padding: 0 15px;
  text-align: center;
}
.vnt-servive-slide .t1 {
  font-size: 26px;
  line-height: 37px;
  font-weight: bold;
  text-transform: uppercase;
  color: #5cb020;
}
.vnt-servive-slide .t2 {
  font-size: 12px;
  line-height: 20px;
  color: #555555;
  padding-bottom: 5px;
  margin-bottom: 5px;
  position: relative;
}
.vnt-servive-slide .t3 {
  font-size: 12px;
  line-height: 20px;
  font-weight: bold;
  text-transform: uppercase;
}
.vnt-servive-slide .grid .col2 {
  width: calc(100% - 170px);
  padding: 0 15px;
}
.menu-slide-service .gridC {
  display: flex;
  align-items: center;
  margin: 0 -10px;
}
.menu-slide-service .gridC .col {
  width: 100%;
  padding: 0 10px;
}
.itemSer .img a {
  width: 55px;
  height: 55px;
  /* background: #5cb020; */
  background: #bc4535;
  border-radius: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.itemSer .img a:hover {
  background: #5cb020;
}
.pulse:hover {
  animation: pulse 1s infinite;
}
@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 #caecc1ea;
  }
  70% {
    -webkit-box-shadow: 0 0 0 10px #caecc1ea;
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 #caecc1ea;
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 #caecc1ea;
    box-shadow: 0 0 0 0 #caecc1ea;
  }
  70% {
    -moz-box-shadow: 0 0 0 10px #caecc1ea;
    box-shadow: 0 0 0 10px #caecc1ea;
  }
  100% {
    -moz-box-shadow: 0 0 0 0 #caecc1ea;
    box-shadow: 0 0 0 0 #caecc1ea;
  }
}

.itemSer .img a img {
  width: 50%;
}
.itemSer .txt a {
  display: block;
  font-size: 12px;
  line-height: 20px;
  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
  color: black;
}
.itemSer .txt a:hover {
  color: #5cb020;
}
/* title-bar */
.section-title b {
  display: block;
  flex: 1;
  height: 2px;
  opacity: 1.1;
  background-color: #bc4535;
}
.section-title {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0px;
}
.title-bar {
  margin-top: 10px;
  text-align: center;
  color: #bc4535;
  font-family: "Times New Roman", Times, serif;
}
.title-bar p {
  text-align: center;
  color: black;
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
}
.title-bar h5{
   margin-bottom: 0px;
}
.tintuc {
  margin-bottom: 50px;
}

.tintuc h5 {
  color: #bc4535;
  font-family: "Times New Roman", Times, serif;
  margin-bottom: 10px;
}
.section-title-main {
  color: #bc4535;
  font-family: "Times New Roman", Times, serif;
  margin-bottom: 10px;
  font-size: 1.5rem;
  margin: 0px 10px;
  font-weight: bold;
}
/* contern */
.container {
  width: 100%;
  padding: 5px 70px;
}
.topicon span {
  height: 130px;
  width: 130px;
  border-radius: 50%;
  display: block;
  text-align: center;
  margin: 0 auto;
  background: #000;
  line-height: 120px;
  font-size: 50px;
  color: #fff;
}
.diemmanh-bbas .col-inner {
  background-color: grey;
  margin: 10px 10px;
  height: 350px;
  border-radius: 20px;
}
.diemmanh-bbas .topicon.icon1 span {
  background: #fc8b00;
}
.diemmanh-bbas .topicon.icon2 span {
  background: #c1e148;
}
.diemmanh-bbas .topicon.icon3 span {
  background: #00cd74;
}
.diemmanh-bbas .topicon.icon4 span {
  background: #55acee;
}
.dacdiem-bbas {
  color: greenyellow;
  font-size: 15pt;
  font-weight: 600;
  line-height: 1;
  margin-top: 0;
}
.text-center p {
  margin: 0 0 10px;
}
.dacdiem {
  color: white;
  font-size: 14pt;
}
.row-mobile {
  margin: 10px 100px;
}
.readmore-item-services:hover {
  color: red;
}
/* y kien khach hang */
.khachhang {
  background-color: burlywood;
  margin: 10px 70px;
}
.classp p {
  font-style: italic !important;
  font-size: 16px;
}
.classp h4 {
  font-style: italic !important;
  color: #5cb020;
  font-size: 20px;
}
/* slider tin tuc */
.wrapper {
  width: 100%;
  padding-top: 20px;
  text-align: center;
}
.carousel {
  width: 90%;
  margin: 0px auto;
}
.slick-slide {
  margin: 10px;
}
.slick-slide img {
  width: 100%;
  border: 2px solid #fff;
}
/* Color of the arrows */
/* Định dạng nội dung Caption */
@media screen and (max-width: 600px) {
  .vnt-servive-slide {
    display: none;
  }
  .row-mobile {
    margin: 10px 10px;
  }
  .container {
    width: 100%;
    padding: 5px 0px;
  }
  .diemmanh-bbas .col-inner {
    background-color: grey;
    margin: 10px 20px;
    height: auto;
    border-radius: 20px;
  }
  .section-title b {
    display: none;
  }
  .section-title-main {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .section-title {
    position: relative;
    display: block;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .khachhang {
    margin: 10px 25px;
  }
  
}
</style>
<style>
.slick-prev:before,
.slick-next:before {
  font-family: "slick";
  font-size: 40px;
  line-height: 1;
  color: red;
  opacity: 0.75;
}

.slick-prev:before {
  content: "‹";
}
[dir="rtl"] .slick-prev:before {
  content: "›";
}

[dir="rtl"] .slick-next {
  left: -10px;
  top: 70px;
  right: auto;
}
.slick-next:before {
  content: "›";
}
[dir="rtl"] .slick-next:before {
  content: "‹";
}
</style>
