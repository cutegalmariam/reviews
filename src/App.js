import { useState } from "react";
import Profile from "./Profile";

function App() {
  const [profiles, setProfiles] = useState(
    [
      {
        id: 1,
        name: "Susan Smith",
        job: "web developer",
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: "Anna Johnson",
        job: "web designer",
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      },
      {
        id: 3,
        name: "Peter Jones",
        job: "intern",
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "Bill Anderson",
        job: "the boss",
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
    ],
  );
  const [currentProfile, setCurrentProfile] = useState(
    {
      id: 1,
      name: "Susan Smith",
      job: "web developer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    }
  );
 
  function showNextProfile() {
    const currentId = currentProfile.id;
    let nextId = (currentId + 1) % 4;
    if (nextId === 0) { 
      nextId = 4; 
    }
    switchTo(nextId);
  }

  function showPrevProfile() {
    const currentId = currentProfile.id;
    let nextId;
    if (currentId === 1) {
      nextId = 4; 
    } else {
      nextId = currentId - 1;
    }
    switchTo(nextId);
  }

  function switchTo(nextId) {
    const nextProfile = profiles.filter((p) => p.id === nextId)[0];
    setCurrentProfile(nextProfile);
  }

  function showRandomProfile() {
    const nextId = Math.floor(Math.random() * 4) + 1;
    switchTo(nextId);
  }



  return(
    <main>
      <div className="header">
        <h1>Our Reviews</h1>
        <div id="horizontal-line"></div>
      </div>
      <div className="profile-container">
        <Profile
          key = {currentProfile.id}
          {...currentProfile}
          showNextProfile = {showNextProfile}
          showPrevProfile = {showPrevProfile}
          surpriseProfile = {showRandomProfile}
          />
      </div>
    </main>
  )
}

export default App;
