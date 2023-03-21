import PropTypes from "prop-types";
import classes from "./YoutubeEmbed.module.css";

const YoutubeEmbed = ({ embedId }) => (
  <div className={classes["video-responsive"]}>
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
