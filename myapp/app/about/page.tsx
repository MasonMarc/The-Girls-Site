
export default async function AboutPage() {
  return (
    <div className="container">
      <main id="about" className="d-flex justify-content-center flex-wrap">
        <div className="mb-3 row">
          <div className="text-center col-md-3" id="aboutUs">
            <img className="d-block mx-auto" src="/assets/Vintage_16-02-2023_18h16m34s.png" alt="" width="200"></img>
            <h1 className="display-5">About Us</h1>
            <div className="col-sm-auto mx-auto">
              <p id="summary">THE GIRLS are a 4 piece band from Wilmington North Carolina, with
                their song “Schools for Fools” recently featured in the NETFLIX movie
                “Along For The Ride”. THE GIRLS have a huge stage presence of mixed
                emotions that range from angry and intimidating Rock N’ Roll to a
                happy power pop glam energy, easily getting the crowd moving and
                participating in these fun and catchy yet attitude ridden songs to sing
                along to and dance from start to finish.</p>
            </div>
          </div>
          <div className="col-md-4">
            <img src="/assets/3G3A8010.jpg" width={500}></img>
          </div>
          <div className="col-md-4 ms-2" id="feature">
            <div style={{color: 'white'}}>
              <p id="quote" className="fs-2">“The Girls are a shockingly young power trio from North Carolina; like GN’R were already on to the Chinese democracy shit when they were born. And tested great news, because somebody’s gotta carry the goddamn torch, and the Girls might be the band to do it."<br></br> -Classic Rock Magazine</p>
              
              <img src="assets/3G3A8112.jpg" width={500}></img>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}