const Item = ({ photo }) => {
    return (
      <div className="country-item">
        <img src={photo.url} alt={photo.title} />
        {photo.name}
      </div>
    );
  };


export default Item;