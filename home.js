// list of books
let books = JSON.parse(localStorage.getItem("favorite")) || [
  {
    id: 0,
    title: "King Arthur and Her Knights",
    author: "K. M. Shea",
    image: "img/im1.jpg",
    desc: ` Long live the King? When Britt, a modern young woman, is pulled by a
    magical summons back through time she finds herself smack in the
    middle of the schemes of the surprisingly young and handsome wizard
    Merlin.`,
    favourite: false,
  },
  {
    id: 1,
    title: "City of Bones",
    author: "Cassandra Clare",
    image: "img/im2.jpg",
    desc: `When fifteen-year-old Clary Fray heads out to the Pandemonium Club in New York City, she hardly expects to witness a murder -- much less a murder committed by three teenagers covered with strange tattoos and brandishing bizarre weapons. Then the body disappears into thin air. It's hard to call the police when the murderers are invisible to everyone else and when there is nothing -- not even a smear of blood -- to show that a boy has died. Or was he a boy?`,
    favourite: false,
  },
  {
    id: 2,
    title: "The Hunger Games ",
    author: "Suzanne Collins",
    image: "img/im3.jpg",
    desc: `Sixteen-year-old Katniss Everdeen regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to death before-and survival, for her, is second nature. Still, if she is to win, she will have to start making choices that weigh survival against humanity and life against love.`,
    favourite: false,
  },
  {
    id: 3,
    title: "Seraphina",
    author: "Rachel Hartman",
    image: "img/im4.jpg",
    desc: `In the kingdom of Goredd, dragons and humans live and work side by side – while below the surface, tensions and hostility simmer. 

    The newest member of the royal court, a uniquely gifted musician named Seraphina, holds a deep secret of her own. One that she guards with all of her being.
    
    When a member of the royal family is brutally murdered, Seraphina is drawn into the investigation alongside the dangerously perceptive—and dashing—Prince Lucien. But as the two uncover a sinister plot to destroy the wavering peace of the kingdom, Seraphina’s struggle to protect her secret becomes increasingly difficult… while its discovery could mean her very life.`,
    favourite: false,
  },
  {
    id: 4,
    title: "A Clash of Kings",
    author: "George R. R. Martin",
    image: "img/im5.jpg",
    desc: `A comet the color of blood and flame cuts across the sky. And from the ancient citadel of Dragonstone to the forbidding shores of Winterfell, chaos reigns. Six factions struggle for control of a divided land and the Iron Throne of the Seven Kingdoms, preparing to stake their claims through tempest, turmoil, and war.`,
    favourite: false,
  },
  {
    id: 5,
    title: "Billy Summers",
    author: "Stephen King ",
    image: "img/im6.jpg",
    desc: `Billy Summers is a man in a room with a gun. He’s a killer for hire and the best in the business. But he’ll do the job only if the target is a truly bad guy. And now Billy wants out. But first there is one last hit. Billy is among the best snipers in the world, a decorated Iraq war vet, a Houdini when it comes to vanishing after the job is done. So what could possibly go wrong?`,
    favourite: false,
  },
  {
    id: 6,
    title: "Queen of Air and Darkness",
    author: "Cassandra Clare",
    image: "img/im7.jpg",
    desc: `What if damnation is the price of true love?

    Innocent blood has been spilled on the steps of the Council Hall, the sacred stronghold of the Shadowhunters. Their society now teeters on the brink of civil war. One fragment of the Blackthorn family flees to Los Angeles, seeking to discover the source of the disease that is destroying the race of warlocks. Meanwhile, Julian and Emma take desperate measures to put their forbidden love aside and undertake a perilous mission to Faerie to retrieve the Black Volume of the Dead. What they find there is a secret that may tear the Shadow World asunder and open a dark path into a future they could never have imagined. Caught in a race against time, Emma and Julian must save the world of the Shadowhunters before a deadly curse destroys them and everyone they love.`,
    favourite: false,
  },
];

//  Declare variables

let input = document.querySelector(".search");
let inpVal = input.value.toUpperCase();
let sec = document.getElementById("cards");
let hed = document.querySelector(".search-sec");
let sec2 = document.querySelector(".slider");
let favIcon = document.getElementById("fav-icon");
let favList = document.querySelector(".fav-list");

// functions

// search books section
let searchList = [];
input.addEventListener("input", (ev) => {
  console.log(inpVal);
});

// let searchBooks = () => {
//     books.forEach((i) => {
//         if (books[0].title.includes(inpVal) || books[inv].author.includes(inpVal)) {

//         }
//     });

//     for (let i = 0; i < books.length[0]; i++) {
//         books.filter(inpVal)
//     }
// }

// searchBooks()

sec.innerHTML = `<h1 class="sec-title">Trending Books</h1>`;
let renderBooks = () => {
  for (let i = 0; i < books.length; i++) {
    sec.innerHTML += ` 
            <div id="${i}" class="card1">
            <img src="${books[i].image}" alt="" class="img1"/>
            <button id="more${i}" onclick='showMore(${i})' class="more-bttn">Read More...</button>
          </div>`;
  }
};

renderBooks();

// favorite section
let fav = (i) => {
  let star = document.querySelector(`#star-${i}`);
  books[i].favourite = !books[i].favourite;
  localStorage.setItem("favorite", JSON.stringify(books));
  if (books[i].favourite) {
    star.classList.remove("bi-star");
    star.classList.add("bi-star-fill");
  } else {
    star.classList.remove("bi-star-fill");
    star.classList.add("bi-star");
  }
};
// favorite page
favIcon.addEventListener("click", () => {
  sec.style.display = "none";
  hed.style.display = "none";
   favList.innerHTML = `${books}`
  // `<img src="${books[i].image}" alt="" class="img"/>
  //  <h1>${books[i].title}</h1>
  //  <h3>by: ${books[i].author}</h3>`;
});

// description section

const showMore = (i) => {
  sec.style.display = "none";
  hed.style.display = "none";
  sec2.innerHTML = `
          <div id="slide${i}" class="fav-sec">
          <img src="${books[i].image}" alt="" class="img"/>
          <h1>${books[i].title}</h1>
          <h3>by: ${books[i].author}</h3>
          <p>${books[i].desc}</p>
          <i onclick='fav(${i})' id="star-${i}" class="bi ${
    !books[i].favourite ? "bi-star" : "bi-star-fill"
  }"></i>
        </div>`;
};
