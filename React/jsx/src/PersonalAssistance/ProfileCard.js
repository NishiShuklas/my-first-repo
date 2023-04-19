function ProfileCard({ title, handle, image, description }) {//Another way to use props
  return (

    <div className="card">
      <div className="card-image">
        <figure class="image is-1byl">
          <img src={image} alt="pda logo" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media-content">

          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">Handle is {handle}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>


    /* <img imgSrc={props.imgSrc} alt={props.imgSrc}></img>
        <h3>{props.text}</h3> */

  );
}

export default ProfileCard;
