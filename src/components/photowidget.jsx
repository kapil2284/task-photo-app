import { useState, useEffect } from "react";
import Item from "./item";
import '../styles/photowidget.css'
const PhotoWidget = () => {

    const [albumList, setAlbumList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
        .then(response => response.json())
        .then((data)=>{
            console.log(data);
            setAlbumList(data);
            setIsLoading(false);
        });
      },[]);


    return <div className="flex-container"> {isLoading ? (
        <p>Loading...</p>
      ) : (albumList && albumList.map(photo =>
        <Item key={photo.id} photo={photo}></Item>
      ))} </div>;
  };


  export default PhotoWidget;