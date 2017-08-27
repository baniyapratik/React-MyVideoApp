import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = props => {
  const videoItems = props.videos.map(function(video) {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });
  return (
    <ul className="col-sm-12 list-group">
      {videoItems}
    </ul>
  );
};
export default VideoList;
