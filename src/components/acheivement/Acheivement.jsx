import React from "react";
import "./Acheivement.css"; // Assuming there's a CSS file for styling
import cert1 from "../../components/images/certificate/solidbyscaler.png"; // Example image import

const Acheivement = () => {
  const achievements = [
    {
      title: "Certificate of Participation Solid Principles",
      description: "Completed the Solid Principles course on Scaler.",
      date: "6th June 2024",
      image: cert1, // Replace with the actual image path
    },
  ];

  const openImageInPopup = (image) => {
    window.open(image, "_blank", "width=800,height=600");
  };

  return (
    <section className="acheivement-section">
      <h2>Achievements & Certificates</h2>
      <hr />
      <ul className="acheivement-list">
        {achievements.map((item, index) => (
          <li key={index} className="acheivement-item">
            <div className="acheivement-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="acheivement-date">{item.date}</span>
            </div>
            <img
              src={item.image}
              alt={item.title}
              className="acheivement-image"
              onClick={() => openImageInPopup(item.image)} // Open image in popup
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Acheivement;
