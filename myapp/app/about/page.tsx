
export default async function AboutPage() {
  return (
    <div >
      <main id="about">
        <div className="container mb-3 row">
          <div className="col-md-4">
            <img src="/assets/3G3A8010.jpg" width={500}></img>
          </div>
          <div className="px-2 py-2 text-center col-md-4">
            <img className="d-block mx-auto mb-4" src="/assets/Vintage_16-02-2023_18h16m34s.png" alt="" width="200"></img>
            <h1 className="display-5">About Us</h1>
            <div className="col-lg-6 mx-auto">
              <p className="" id="summary">THE GIRLS are a 4 piece band from Wilmington North Carolina, with
                their song “Schools for Fools” recently featured in the NETFLIX movie
                “Along For The Ride”. THE GIRLS have a huge stage presence of mixed
                emotions that range from angry and intimidating Rock N’ Roll to a
                happy power pop glam energy, easily getting the crowd moving and
                participating in these fun and catchy yet attitude ridden songs to sing
                along to and dance from start to finish.</p>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-start">
            <div>
              <h3 className="fs-2">Featured title</h3>
              <p id="feature">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quo quod dolore, in, laborum soluta ducimus exercitationem dolores dolor ea asperiores delectus labore doloribus quidem quae. Molestias quos iusto aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consectetur assumenda magni quas. Possimus molestiae iste quibusdam, ipsam eaque sunt expedita quia ex nostrum voluptatem asperiores quidem! Tempora, adipisci laboriosam.</p>
              <img src="assets/3G3A8112.jpg" width={500}></img>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}