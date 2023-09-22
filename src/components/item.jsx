const Item = ({ photo }) => {
    return (
      <button className="country-item">
        <img src={photo.url} alt={photo.title} />
        {photo.name}
      </button>
    );
  };


export default Item;