import displayNewProfile from "./App"
const Profile = ({ id,img, personName, job, text, displayNewProfile}) => {

  return(
    <article className="contentProfile">
      <footer>
        <h3 className="personName">{personName}</h3>
        <h5 className="personJob">{job}</h5>
        <p className="text">{text}</p>
        <button className="nextButton" onClick={() => displayNewProfile()}>
          next</button>
        <button className="surpriseButton">Surprise Me</button>
  
      </footer>
    </article>
  );};
  export default Profile;