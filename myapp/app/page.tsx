
// make p elements and move them with absolute positioning. 

export default function HomePage() {
  return (
    <div className="landing">
      <div className='row ms-1'>
        <div className="col-md-auto" id="JP"><img src="assets/3G3A7641.jpg" width={450} height={680}></img></div>
        <div className="col-md-auto" id="Kait"><img src="assets/3G3A7830.jpg" width={450} height={680}></img></div>
        <div className="col-md-auto" id="Sky"><img src="assets/3G3A8069.jpg" width={450} height={680}></img></div>
        <div className="col-md-auto" id="Noah"><img src="assets/3G3A7883.jpg" width={450} height={680}></img></div>
      </div>
      <div id="blank"></div>
    </div >
  )
}