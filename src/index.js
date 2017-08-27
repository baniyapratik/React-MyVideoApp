import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from './style/style.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_kEY = 'AIzaSyBM7mCg1ZLfs19HlXyeTHYmIj2kttahZrY';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('react tutorials');
  }
  videoSearch(searchTerm) {
    YTSearch({ key: API_kEY, term: searchTerm }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); // this.setState({videos}); same as this.setState({videos:videos});
    });
  }
  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term)
    }, 300);
    return (
      <div>
        <SearchBar onSeachTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
