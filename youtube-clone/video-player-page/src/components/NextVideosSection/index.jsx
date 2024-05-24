import "./NextVideosSection.styles.scss";
import videoListData from "../../constants/videoListData.js";
import VideoListItem from "../VideoListItem";
import Switch from "../Switch";

function NextVideosSection() {
  return (
    <section className="next-videos-section">
      <div className="next-videos-section__heading-block">
        <h2 className="next-videos-section__heading">Next</h2>
        <div>
          <Switch label="Autoplay" />
        </div>
      </div>
      <ul className="video-list">
        {videoListData.map((videoInfo) => {
          return <VideoListItem {...videoInfo} key={videoInfo.videoName} />;
        })}
      </ul>
    </section>
  );
}

export default NextVideosSection;
