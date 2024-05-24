import "./SubscribeButton.styles.scss";

function SubscribeButton({ content }) {
  return (
    <button className="channel-info__subscriptions" type="button">
      {content}
    </button>
  );
}

export default SubscribeButton;
