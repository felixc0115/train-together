const ProgramCard = () => {
  return (
    <div className="card w-80 bg-base-90 shadow-xl card-compact card-bordered ">
      <figure className="">
        <img src="https://img.youtube.com/vi/jj2AAH6jbHk/0.jpg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
