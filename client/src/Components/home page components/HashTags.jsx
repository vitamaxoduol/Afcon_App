import React from "react";

function HashTags() {
  const tags = [
    {
      img: "https://d3pelj80y5v5k4.cloudfront.net/c0a80b08-2408-48ea-bbb9-6a2900e7781b?w=350&h=&q=85&nu=1&webp=1",
      body: "",
      author: {
        userName: "SeattleFWC26 ⚽️ @FWC26Seattle",
        profile:
          "https://d3pelj80y5v5k4.cloudfront.net/542afcd4-701…54-ba42-caa387411f8e?w=100&h=100&q=85&nu=1&webp=1",
      },
    },
    {
      img: "https://d3pelj80y5v5k4.cloudfront.net/27ce6403-5bb9-45da-95ed-4107da7ecac7?w=350&h=&q=85&nu=1&webp=1",
      body: "There's nothing like a Miami sunset. 🌅 #WeAreMiami #WeAre26 #FIFAWorldCup #MiamiStyle #305Life #MiamiBeach",
      author: {
        userName: "FWC26Miami",

        profile:
          "https://d3pelj80y5v5k4.cloudfront.net/542afcd4-701…54-ba42-caa387411f8e?w=100&h=100&q=85&nu=1&webp=1",
      },
    },
    {
      img: "https://d3pelj80y5v5k4.cloudfront.net/cdff8721-6be5-4039-96f1-95c57504c2af?w=350&h=&q=85&nu=1&webp=1",
      body: "2026 has officially kicked off at Philly’s Match Play Venue! ⚽️ FIFA World Cup officials came for a site visit yesterday to make sure we were looking our best and, suffice to say, they liked what they saw. Let’s go 202…",
      author: {
        userName: "",
        profile:
          "	https://d3pelj80y5v5k4.cloudfront.net/542afcd4-701…54-ba42-caa387411f8e?w=100&h=100&q=85&nu=1&webp=1",
      },
    },
    {
      img: "https://d3pelj80y5v5k4.cloudfront.net/68268020-eaae-47e3-a0b2-6dfc48b310c3?w=350&h=&q=85&nu=1&webp=1",
      body: "We make pitches that flip the script ⚽ #FIFAWorldCup #WeAre26 #WeAreLosAngeles #LosAngeles26 #Somos26 #SomosLosÁngeles",
      author: {
        userName: "FWC26 Los Angeles",
        profile:
          "	https://d3pelj80y5v5k4.cloudfront.net/542afcd4-701…54-ba42-caa387411f8e?w=100&h=100&q=85&nu=1&webp=1",
      },
    },
    {
      img: "https://d3pelj80y5v5k4.cloudfront.net/07e9b89c-1dca-4df6-9385-f116ada77807?w=350&h=&q=85&nu=1&webp=1",
      body: "FIFA officials travelled to @metlifestadium yesterday to continue @fifaworldcup 2026 planning ⚽NYNJ packed the house with our governmental partners - and it’s safe to say, we are united in",
      author: {
        userName: "NY/NJ World Cup 2026 Host City",
        profile:
          "	https://d3pelj80y5v5k4.cloudfront.net/542afcd4-701…54-ba42-caa387411f8e?w=100&h=100&q=85&nu=1&webp=1",
      },
    },
    {
      img: "https://d3pelj80y5v5k4.cloudfront.net/38e15423-553f-4aa2-b82a-de9b2332c07f?w=350&h=&q=85&nu=1&webp=1",
      body: "FIFA officials travelled to @metlifestadium yesterday to continue @fifaworldcup 2026 planning ⚽NYNJ packed the house with our governmental partners - and it’s safe to say, we are united in",
      author: {
        userName: "NY/NJ World Cup 2026 Host City",
        profile:
          "	https://d3pelj80y5v5k4.cloudfront.net/542afcd4-701…54-ba42-caa387411f8e?w=100&h=100&q=85&nu=1&webp=1",
      },
    },
    {
      img: "https://d3pelj80y5v5k4.cloudfront.net/d102297a-6d52-4c02-b4bc-4bceaa4a483b?w=350&h=&q=85&nu=1&webp=1",
      body: "FIFA officials travelled to @metlifestadium yesterday to continue @fifaworldcup 2026 planning ⚽NYNJ packed the house with our governmental partners - and it’s safe to say, we are united in",
      author: {
        userName: "NY/NJ World Cup 2026 Host City",
        profile:
          "	https://d3pelj80y5v5k4.cloudfront.net/542afcd4-701…54-ba42-caa387411f8e?w=100&h=100&q=85&nu=1&webp=1",
      },
    },
  ];
  return (
    <div className="hash-tags">
      <h1 className="sec-header ">#AFCON27</h1>
      <div className="hash-tag-cards fxc">
        {tags.map((data,index) => {
          return (
            <div key={index} className="hash-card">
              <img src={data.img} alt="" />
              <p>{data.body}</p>
              <div>
                <div className="profile">
                  <img src={data.author.profile} alt="" />
                  <small>{data.author.userName}</small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HashTags;
