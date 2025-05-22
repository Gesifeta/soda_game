export const collections = [
  {
    name: "coca",
    image: "assets/coca.jpg",
    prize: (Math.random() * 500).toFixed(),
  },
  {
    name: "sprite",
    image: "assets/sprite.jpg",
    prize: (Math.random() * 500).toFixed(),
  },
  {
    name: "mango",
    image: "assets/mango.jpg",
    prize: (Math.random() * 500).toFixed(),
  },
  {
    name: "apple",
    image: "assets/apple.jpg",
    prize: (Math.random() * 500).toFixed(),
  },
  {
    name: "orange",
    image: "assets/orange.jpg",
    prize: (Math.random() * 500).toFixed(),
  },
  {
    name: "malt",
    image: "assets/malt.jpg",
    prize: (Math.random() * 500).toFixed(),
  },
  {
    name: "soda",
    image: "assets/soda.jpg",
    prize: (Math.random() * 500).toFixed(),
  },
  {
    name: "schweppes",
    image: "assets/schweppes.jpg",
    prize: (Math.random() * 500).toFixed(),
  },
  {
    name: "thumbsup",
    image: "assets/thumbsup.jpg",
    prize: (Math.random() * 500).toFixed(),
  },
  {
    name: "lemenade",
    image: "assets/lemenade.jpg",
    prize: (Math.random() * 500).toFixed(),
  },
];
document.addEventListener("DOMContentLoaded",()=>{
    const collectionSoda = document.querySelector(".container-collections")
    collections.map((collection,index)=>{
        let coll = document.createElement("div")
        collectionSoda?.append(coll)

        let im = document.createElement("img")
        im.src = collection.image
        collectionSoda?.append(im)
    })
    

})

