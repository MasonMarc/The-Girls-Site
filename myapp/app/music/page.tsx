export default async function MusicPage() {
  return (
      <div className="spotify-embeds container m-auto">
        <h2 className="text-center">Music</h2>
        <p className="mb-4 p-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eligendi quod rem error, repudiandae, praesentium facilis consequatur voluptate dolor quam expedita magnam rerum eius esse impedit quibusdam laborum? Nesciunt, repellendus!</p>
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
  );
}