$(document).ready(function() {
  const html = `
    <div class="header__bottom">
      <div class="container">
        <div class="header__bottom--area">
          <div class="header__logo">
            <div class="logo">
              <a href="index.html" class="custom-logo-link">
                <img src="https://picsum.photos/200/50" alt="company logo" />
              </a>
            </div>
          </div>

          <div class="header__menus">
            <div class="menu-main-menu-container">
              <ul class="main-menu">
                <li class="">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="montesori.html">About/Montesori</a>
                </li>
                <li>
                  <a href="spanish.html">Language</a>
                </li>
                <li>
                  <a href="sleep.html">Sleep Training</a>
                </li>
                <li>
                  <a href="gallery.html">Gallery</a>
                </li>
              <!--  <li>
                  <a href="service.html">Service</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
</li> -->
                <li>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdabM77pjO-wVs8AxZwveJst7DEGtV5gSXd2Zm88yne2CbA6A/viewform?usp=sf_link"target="_blank"target="_blank">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="header__btn">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdabM77pjO-wVs8AxZwveJst7DEGtV5gSXd2Zm88yne2CbA6A/viewform?usp=sf_link" class="lab-btn">
Contact Us
            </a>
          </div>

          <div class="header__bar">
            <div class="header__bar--area">
              <div class="header__bar--nav">
                <i class="fa fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  $("#header-template").html(html);

  const html2 = `
  <div class="col-10 mx-auto mt-4">
    <div class="row wrap row-wrap">
      <div class="card col-12 col-md-4 pt-3" style="background-color:#ffff00">
        <a href="spanish.html">
          <img src="https://picsum.photos/500/500" class="card-img-top" alt="Kids Learning Spanish">
          <div class="card-body">
            <h5 class="card-title">Learn Spanish</h5>
            <p class="card-text">The easiest time for a child to learn a second language is while they are in the early
              develpmental stages of their life. We take full advantage of this by having a spanish teacher come in to
              our
              daycare.</p>
          </div>
        </a>
      </div>
      <div class="card col-12 col-md-4 pt-3" style="background-color:#54ccf8;">
        <a href="">
          <img src="https://picsum.photos/500/500" class="card-img-top" alt="School">
          <div class="card-body">
            <h5 class="card-title">Montesori Learning Style</h5>
            <p class="card-text">Discover the Montessori learning style and unlock your child's full potential with
              hands-on activities and personalized learning experiences.</p>
          </div>
        </a>
      </div>
      <div class="card col-12 col-md-4 pt-3 " style="background-color:#ccff99">
        <a href="sleep.html">
          <img src="https://picsum.photos/500/500" class="card-img-top" alt="Infant Sleeping">
          <div class="card-body">
            <h5 class="card-title">Sleep Training</h5>
            <p class="card-text">You don't have to worry about your kid forming habits that will keep you up at night
              when you drop'em off with us. We make sure to use tried and tested sleep training techniques so that your
              child will learn to be independent at bed time</p>
          </div>
        </a>
      </div>
    </div>
  </div>

  <footer class="site-footer mt-2">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6 class="readable">About</h6>
          <p class="text-justify readable">
            Daycare Company is a daycare service that provides a safe and nurturing environment for children. We offer a
            variety of programs to meet the needs of children of all ages. Our goal is to provide a fun and educational
            experience for children while also giving parents peace of mind knowing that their child is in good hands.
          </p>
        </div>
        <div class="col-xs-12 col-md-6">
          <h6 class="readable">Quick Links</h6>
          <ul class="footer-links">
            <li class="readable"><a href="index.html">Home</a></li>
            <li class="readable"><a href="montesori.html">About/Montesori</a></li>
            <li class="readable"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdabM77pjO-wVs8AxZwveJst7DEGtV5gSXd2Zm88yne2CbA6A/viewform?usp=sf_link"target="_blank">Contact</a></li>
          </ul>
        </div>
      </div>
      <hr>
    </div>
    <div class="container">
      <div class="row py-1">
        <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Trademark &#8482; 2024 All Rights Reserved by <br /> Daycare Company.
            <br /> Designed and Developed by <br />
            <a href="https://wakywayne-blog.vercel.app/">Waynes World of Business and Security</a>.
          </p>
        </div>
      </div>
    </div>
  </footer>
  `;
  $("#footer-template").html(html2);
});
