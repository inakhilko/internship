import "./VideoListItem.styles.scss";
function VideoListItem({ src, time, videoName, generalInfo, authorName }) {
  return (
    <li className="video-list__item">
      <a href="#" className="video-list__link">
        <div className="video-list__image-block">
          <img src={src} alt="Video cover" className="video-list__image" />
          <span className="video-time">{time}</span>
        </div>
        <h4 className="video-list__item-name">{videoName}</h4>
      </a>
      <div className="video-list__additional-info">
        <span className="video-list__general-info">{generalInfo}</span>
        <span className="video-list__author">{authorName}</span>
      </div>
    </li>
  );
}

export default VideoListItem;
