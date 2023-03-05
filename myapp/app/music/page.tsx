export default async function MusicPage() {
  return (
    <div className="spotify-embeds m-auto" style={{backgroundImage: 'url("/assets/3G3A8112.jpg")'}}>
      <div className="container m-auto">
        <div className="container p-5 m-auto">
          <h2 className="text-center">Music</h2>
        </div>
        <div className="row">
          <div className="spotify-embed col-sm-6 display-block ms-auto me-auto"><iframe src="https://open.spotify.com/embed/track/3n5eoGIxszXahNClKUq7iS?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
          <div className="spotify-embed col-sm-6 display-block ms-auto me-auto"><iframe src="https://open.spotify.com/embed/track/6FHItEPj9qSNHeeXbS7HRN?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
        </div>
        <div className="row">
          <div className="spotify-embed display-block ms-auto me-auto"><iframe src="https://open.spotify.com/embed/album/5ngCr6BIo46VFXJKgmQOTA?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
        </div>
        <div className="row">
          <div className="spotify-embed display-block ms-auto me-auto"><iframe src="https://open.spotify.com/embed/album/5Qoc4qMfBfWSHBmRvtScJr?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
        </div>
      </div>
    </div>
  );
}