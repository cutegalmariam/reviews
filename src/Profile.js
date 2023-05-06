const Profile = ({ id, name, job, image, text, showNextProfile,showPrevProfile,surpriseProfile}) => {

  return(
    <div className="profile">
      <img className="photo-class" src={image} alt="not found" />
      <h2 className="name-class">{name}</h2>
      <h2 className="job">{job}</h2>
      <div className="parag"><p>{text}</p></div>
      
      <div className="btns">
      <button className="prev-btn" onClick={() => showPrevProfile()}>&lt;</button>
      <button className="next-btn" onClick={() => showNextProfile()}>&gt;</button>
      </div>
      <button className="surprise-btn" onClick={() => surpriseProfile()}>Surprise Me</button>
    </div>
  );
};

export default Profile;