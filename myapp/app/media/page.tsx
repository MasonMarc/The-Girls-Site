
export default async function MediaPage() {
    return (
        <div className="p-5">
            <div className="container">
                <h2 className="text-center">Media</h2>
            </div>
            <div className="container py-4">
                <div className="p-5 mb-4 rounded-3">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe width="1200" height="600" src="https://www.youtube.com/embed/fbgz-dnRs2Y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <div className="h-100 p-5 rounded-3">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe width="550" height="400" src="https://www.youtube.com/embed/X6aA7mAJ8-0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="h-100 p-5 rounded-3">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe width="550" height="400" src="https://www.youtube.com/embed/xoB-27aBHho" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}