import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <iframe
    className="left-0 top-0 h-full w-full"
    width="853"
    height="1080"
    src={`https://www.youtube.com/embed/${embedId}`}
    // frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
  />
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
