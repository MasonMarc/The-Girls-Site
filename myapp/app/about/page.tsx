
export default async function AboutPage() {
  return (
    <div>
      <main id="about">
        <div className="container">
          <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"></img>
            <h1 className="display-5 fw-bold">About Us</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit odit architecto eos voluptas soluta ex cum dolore sequi quibusdam enim, earum ratione, temporibus molestiae aperiam aut eum pariatur magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusamus et nemo recusandae! Debitis, culpa sunt doloribus reprehenderit atque perferendis dolore, error in iusto, eius repudiandae commodi asperiores nam repellendus. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            </div>
            <div>
              <h3 className="fs-2">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            </div>
            <div>
              <h3 className="fs-2">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            </div>
            <div>
              <h3 className="fs-2">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}