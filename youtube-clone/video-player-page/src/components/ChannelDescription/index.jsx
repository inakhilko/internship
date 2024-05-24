import "./ChannelDescription.styles.scss";
import SubscribeButton from "../SubscribeButton/index.jsx";

function ChannelDescription() {
  return (
    <section className="channel-info">
      <div className="channel-info__block">
        <img
          src="../../../public/channel-pic.jpg"
          alt="Channel picture"
          className="channel-info__image"
        />
        <div className="channel-info__description">
          <h2 className="channel-info__channel-name">Food &amp;&nbsp;Drink</h2>
          <span className="channel-info__publication-date">
            Published on&nbsp;14&nbsp;Jun 2019
          </span>
          <p className="channel-info__description-text">
            A&nbsp;successful marketing plan relies heavily on&nbsp;the
            pulling-power of&nbsp;advertising copy. Writing result-oriented
            ad&nbsp;copy is&nbsp;difficult, as&nbsp;it&nbsp;must appeal&nbsp;to,
            entice, and convince consumers to&nbsp;take action. There
            is&nbsp;no&nbsp;magic formula to&nbsp;write perfect ad&nbsp;copy;
            it&nbsp;is&nbsp;based on&nbsp;a&nbsp;number of&nbsp;factors,
            including ad&nbsp;placement, demographic, even the consumer&rsquo;s
            mood when they see your&nbsp;ad.
          </p>
          <button className="channel-info__description-more">Show more</button>
        </div>
      </div>
      <SubscribeButton content="Subscribe 2.3m" />
    </section>
  );
}

export default ChannelDescription;
