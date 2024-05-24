import "./VideoPlayerPage.styles.scss";
import Header from "../../components/Header/index.jsx";
import VideoMainSection from "../../components/VideoMainSection/index.jsx";
import ChannelDescription from "../../components/ChannelDescription/index.jsx";
import NextVideosSection from "../../components/NextVideosSection/index.jsx";
import Navigation from "../../components/Navigation/index.jsx";

function VideoPlayerPage() {
  return (
    <>
      <Header />
      <Navigation />
      <div className="content-container">
        <div className="content-container__block">
          <VideoMainSection />
          <ChannelDescription />
        </div>
        <NextVideosSection />
      </div>
    </>
  );
}

export default VideoPlayerPage;
