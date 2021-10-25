// list of books
let books = [
  {
    id: 0,
    title: "King Arthur and Her Knights",
    author: "K. M. Shea",
    image: "img/im1.jpg",
    desc: ` Long live the King? When Britt, a modern young woman, is pulled by a
    magical summons back through time she finds herself smack in the
    middle of the schemes of the surprisingly young and handsome wizard
    Merlin.`,
  },
  {
    id: 1,
    title: "City of Bones",
    author: "Cassandra Clare",
    image: "img/im2.jpg",
    desc: `When fifteen-year-old Clary Fray heads out to the Pandemonium Club in New York City, she hardly expects to witness a murder -- much less a murder committed by three teenagers covered with strange tattoos and brandishing bizarre weapons. Then the body disappears into thin air. It's hard to call the police when the murderers are invisible to everyone else and when there is nothing -- not even a smear of blood -- to show that a boy has died. Or was he a boy?`,
  },
  {
    id: 2,
    title: "The Hunger Games ",
    author: "Suzanne Collins",
    image: "img/im3.jpg",
    desc: `Sixteen-year-old Katniss Everdeen regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to death before-and survival, for her, is second nature. Still, if she is to win, she will have to start making choices that weigh survival against humanity and life against love.`,
  },
  {
    id: 3,
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    image: "img/im4.jpg",
    desc: `Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King’s Landing.`,
  },
  {
    id: 4,
    title: "A Clash of Kings",
    author: "George R. R. Martin",
    image: "img/im5.jpg",
    desc: `A comet the color of blood and flame cuts across the sky. And from the ancient citadel of Dragonstone to the forbidding shores of Winterfell, chaos reigns. Six factions struggle for control of a divided land and the Iron Throne of the Seven Kingdoms, preparing to stake their claims through tempest, turmoil, and war.`,
  },
  {
    id: 5,
    title: "Billy Summers",
    author: "Stephen King ",
    image: "img/im6.jpg",
    desc: `Billy Summers is a man in a room with a gun. He’s a killer for hire and the best in the business. But he’ll do the job only if the target is a truly bad guy. And now Billy wants out. But first there is one last hit. Billy is among the best snipers in the world, a decorated Iraq war vet, a Houdini when it comes to vanishing after the job is done. So what could possibly go wrong?`,
  },
  {
    id: 6,
    title: "City of Bones",
    author: "Cassandra Clare",
    image: "img/im2.jpg",
    desc: `When fifteen-year-old Clary Fray heads out to the Pandemonium Club in New York City, she hardly expects to witness a murder -- much less a murder committed by three teenagers covered with strange tattoos and brandishing bizarre weapons. Then the body disappears into thin air. It's hard to call the police when the murderers are invisible to everyone else and when there is nothing -- not even a smear of blood -- to show that a boy has died. Or was he a boy?`,
  },
];

//  Declare variables

let inp = document.querySelector(".search");
let inpVal = inp.value.toUpperCase();
let sec = document.getElementById("cards");
let hed = document.querySelector("header");

// functions

// let searchBooks = () => {
//     books.forEach(element => {
//         if (books[element].title.includes(inpVal) || books[inv].author.includes(inpVal)) {

//         }
//     });

//     // for (let i = 0; i < books.length[0]; i++) {
//     //     books.filter(inpVal)
//     // }
// }
// searchBooks()

let renderBooks = () => {
  for (let i = 0; i < books.length; i++) {
    sec.innerHTML += `
            <div id="slide${i}" class="card1">
            <img src="${books[i].image}" alt="" class="img1"/>
            <i class="bi "bi-star" change"></i>
            <button id="more${i}" class="more-bttn">Read More...</button>
          </div>`;
  }
  
  let cards = document.querySelectorAll(".card1");
  cards.forEach((card) =>
    card.addEventListener("click", (ev) => {
      const targ = ev.target;
      console.log(targ);
        if ((targ.classList[0] += "more-bttn")) {
          sec.style.display = "none";
          hed.style.display = "none";
        }
    })
  );
};
{
  /* <i class="bi bi-arrow-left-circle-fill prev"></i>
          <i class="bi bi-arrow-right-circle-fill next"></i> */
}

renderBooks();

// description

// favorite
// let fav = document.querySelector(".change");
// fav.addEventListener("click", (e) => {
//     if (fav.contains("bi-star")) {
//         fav.classList.remove("bi-star");

//     }

// });
