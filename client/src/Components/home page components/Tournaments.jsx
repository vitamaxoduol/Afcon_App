import React from "react";

function Tournaments() {
  const tournaments = [
    {
      img: "https://www.aroged.com/wp-content/uploads/2023/04/Champions-League-202223-find-out-where-to-watch-the-games.jpeg",
      title: "UEFA Champions Leauge",
    },
    {
      img: "https://pbs.twimg.com/profile_images/1592558088053297154/FFUJX4z8_400x400.jpg",
      title: "Emirates FA cup",
    },
    {
      img: "https://pbs.twimg.com/profile_images/1417053169788542977/6uLZ5iz7_400x400.jpg",
      title: "UEFA Europa Confrence Leauge",
    },
    {
      img: "data:image/png;base64,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",
      title: "FIFA world cup",
    },
    {
      img: "https://images2.minutemediacdn.com/image/upload/c_crop,w_5568,h_3132,x_0,y_273/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01g4x2af0fmfvev2pzm3.jpg",
      title: "UEFA Nations Leauge",
    },
    {
      img: "https://sportal365images.com/process/smp-images-production/ringier.africa/02102023/fb5ca515-6ada-44ef-a09f-bdb2e219a27e.jpg?operations=fit(480:)",
      title: "AFCON 2027",
    },
  ];

  return (
    <div className="tournaments-container">
      <h1 className="sec-header">All TOURNAMENTS</h1>
      <div className="tournament-slider fxs">
        {tournaments.map((data,index) => {
          return (
            <div key={index} className="tournament-card">
              <img src={data.img} alt="" />
              <p>{data.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tournaments;
