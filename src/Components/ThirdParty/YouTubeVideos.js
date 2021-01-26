import React from 'react';
import ReactPlayer from "react-player";

const YouTubeVideos = () => {
    return (
        <div>
            

            <div className="video2">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=-phCXSkRFMU"
                    controls={true}
                    volume={0.1}
                    height="100%"
                    width="100%"
                />
            </div>
        </div>
    );
}

export default YouTubeVideos;
