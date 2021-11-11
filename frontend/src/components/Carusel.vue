<template>
  <div>
    <main role="main">
      <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://placekitten.com/1024/490"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://placedog.net/1024/480/s">
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide
          img-src="https://placedog.net/1024/480?random"
        ></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://placedog.net/1024/490"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
      <div class="container marketing">
        <div>
          <b-card-group columns>
            <b-card
              title="A mi querido michi..."
              img-src="https://placekitten.com/g/400/450"
              img-alt="Image"
              img-top
            >
              <b-card-text>
                Querido michi, que cruzas el puente arcoíris, sigue tu camino. Sé que ahora estás bien y eso de alguna manera, un día, me dará consuelo.
              </b-card-text>
            </b-card>

            <b-card header="Quote">
              <blockquote class="blockquote mb-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer class="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </b-card>

            <b-card
              img-src="https://placedog.net/500/350?random"
              img-alt="Image"
              img-top
            >
              <b-card-text>
                Para ti tal ves solo sea un perro, para mi, lo es todo: mi amigo,
                mi familia, mi hermano
              </b-card-text>
              <b-card-text class="small text-muted">Ritchie Mountz</b-card-text>
            </b-card>
            
            <b-card border-variant="warning" header-bg-variant="transparent" align="center">
              <blockquote class="card-blockquote">
                <span style="color:orange;">
                  Hasta que no hayas amado a un animal
                </span>
                Una parte de ti seguira dormida
                <footer>
                  <small>
                    <cite title="Source Title">Anatole France</cite></small>
                </footer>
              </blockquote>
            </b-card>

            <b-card>
              <b-card-title>Adoptalos</b-card-title>
              <b-card-text>
                Ellos no podran hablar, pero si acompañar tu silencio
              </b-card-text>
              <b-card-text class="small text-muted">Peluditoshn'</b-card-text
              >
            </b-card>

            <b-card
              img-src="https://placedog.net/350/450"
              img-alt="Image"
              img-fluid
            ></b-card>

            <b-card
              img-src="http://placekitten.com/g/500/400"
              img-alt="Image"
              img-fluid
            >
              <b-card-text>
                <span class="text-muted">
                  Los perros, nos miran como sus dioses, los caballos como sus iguales, <br>
                </span>
                pero unicamente los gatos nos miran como subditos
              </b-card-text>
              <template #footer>
                <small class="text-muted">A todos los que amamos los michis</small>
              </template>
            </b-card>
          </b-card-group>
        </div>

        <!-- START THE FEATURETTES -->

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              First featurette heading.
              <span class="text-muted">It’ll blow your mind.</span>
            </h2>
            <p class="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div class="col-md-5">
            <b-img
              class="
                bd-placeholder-img bd-placeholder-img-lg
                featurette-image
                img-fluid
                mx-auto
              "
              width="500"
              height="500"
              src="https://loremflickr.com/500/500/hamster,small"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 500x500"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
            </b-img>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">
              Oh yeah, it’s that good.
              <span class="text-muted">See for yourself.</span>
            </h2>
            <p class="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <b-img
              class="
                bd-placeholder-img bd-placeholder-img-lg
                featurette-image
                img-fluid
                mx-auto
              "
              width="500"
              height="500"
              src="https://loremflickr.com/500/500/hamster,big"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 500x500"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
            </b-img>
          </div>
        </div>

        <hr class="featurette-divider" />

        <!-- /END THE FEATURETTES -->
      </div>
      <!-- /.container -->
      <footer class="container">
        <p class="float-right"><a href="#">Back to top</a></p>
        <p>
          &copy; 2017-2020 Company, Inc. &middot;
          <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
        </p>
      </footer>
    </main>
  </div>
</template>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}

/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 45rem;
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 45rem;
}

/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}

/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.05rem;
}

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
::-webkit-scrollbar {
    display: none;
}
</style>