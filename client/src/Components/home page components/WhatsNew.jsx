import React, { useState } from "react";

function WhatsNew() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setLoading(false);
    setError(true);
  };

  const gridNews = [
    {
      img: "https://library.sportingnews.com/2022-01/zimbabwe-squad-afcon-2022_yrzeqmb1vw471uc2sut0i9xda.jpg",
      title:
        "Top kits at AFCON 2022: Who has the best threads at the Africa Cup of Nations? ",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Acc?",
    },
    {
      img: "https://static.dw.com/image/60430325_401.jpg",
      title: "zimbabwe africa cup of nations Hot Sale - OFF 54%",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accu",
    },
    {
      img: "https://pbs.twimg.com/media/FJZxJymWYAMJT8b.jpg:large",
      title: "CAF on X: FULL-TIME! ⏰ #TeamZimbabwe 2-1 #TeamGuinea The",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Acc?",
    },
    {
      img: "https://media.squawka.com/images/en/2022/01/01150146/1240257_1240257_afcon-goalkeepers-featured.jpg",
      title: "2021 Africa Cup of Nations: The best goalkeepers | Afcon",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Acc?",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ZZgNOlGd_ifSxgjhklyuijdGONksJYrlyg&usqp=CAU",
      title:
        "Africa Cup of Nations 2022 date: Schedule, kick-off times, TV channel,",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Acc?",
    },
  ];
  return (
    <>
      <h1 className="news-header">Whats New?</h1>
      <div className="news-sec">
        <div className="news-big">
          <img
            src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2022/02/06/3306981-67619888-2560-1440.jpg"
            alt=""
          />
          <h4>
            Senegal 0-0 Egypt: Sadio Mane scores decisive penalty to give
            Senegal historic first Africa Cup of Nations win
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          </p>
        </div>

        {gridNews.map((news,index) => {
          return (
            <div key={index} className="small-news">
              <div className="img-container">
                <img
                  src={news.img}
                  alt=""
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  style={{ display: loading || error ? "none" : "block" }}
                />
              </div>

              <h4>{news.title}</h4>
              <p>{news.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WhatsNew;
