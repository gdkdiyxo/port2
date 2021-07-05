AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Founder and CEO of TechMastering",
    cardImage: "assets/images/experience-page/techmastering.jpg",
    place: "",
    time: "(November, 2018 - present)",
    desp: "<p>I formed TechMastering on 10 November, 2018</p> <p>TechMastering deals with Robotics, Application and Website Development</p> <p>In 2021 TechMastering seted a world record for being the World's Most Elite Application and Website Development Firm</p>",
  },
  {
    title: "Editor-In-Chief of The Interpret Media Network",
    cardImage: "assets/images/experience-page/interpret.png",
    place: "",
    time: "(April, 2021)",
    desp: "<p>The Interpret Media Network brings the Latest News & Top Breaking headlines on Politics and Current Affairs.</p><p>Up-to-date news coverage, aggregated from sources all over the world by the interpret.</p><p>Find latest news coverage of breaking news events, trending topics, and compelling articles.</p>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

