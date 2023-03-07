import YoutubeEmbed from "../components/YoutubeEmbed";

const ProgramDetailsPage = () => {
  return (
    <div className="min-h-screen bg-base-100 my-7">
      <h1>hip mobility</h1>
      <p>
        Uploaded by: felix | category: mobility | duration: 15 mins | 20 people
        training
      </p>
      <YoutubeEmbed embedId="rokGy0huYEA" />
      <h2>Exercises:</h2>
      <ul>
        <li>figure 4 stretch 3x 30 seconds (1:23)</li>
      </ul>
    </div>
  );
};

export default ProgramDetailsPage;
