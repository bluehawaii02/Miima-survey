const dropdown = document.querySelector(".bx-menu");
const dropdownContent = document.querySelector(".head-mid-nd");
const dropdownLost = document.querySelector(".head-mid-st");
//const reviewStars = document.querySelectorAll(".review");
const reviewMsg = document.querySelector(".review-arear");
const nameReview = document.querySelector(".name-review");
const reviewBtn = document.querySelector("#aboutRevBtn");

if(dropdown && dropdownContent && dropdownLost){
  dropdown.addEventListener("click", () => {
    if(dropdownContent.style.display === "none" || dropdownContent.style.display === ""){
      dropdownContent.style.display = "flex";
    }else{
      dropdownContent.style.display = "none";
    }

    dropdownContent.style.flexDirection = "column";
  });
}else{
  console.log("var not found");
};


if(dropdown && dropdownContent){
  dropdown.addEventListener("click", () => {
  if(dropdownContent.style.display == "none"){
    dropdownContent.style.display = "flex";
  }else{
    dropdownContent.style.display = "none";
  };
})}else{
  console.log("third var not found")
};

/*if(reviewStars){
  let rating = 0;

  function rate(rating) {
    reviewStars.forEach((star, i) => {
      if(i < rating)star.classList.add("active");
      else star.classList.remove("active");
    });
  };
}

reviewStars.forEach(reviewStar => {
  reviewStar.addEventListener("click", (e) =>{
    const index = Number(star.dataset.index);
    const newRatting = index + 1;

    rating = (rating === newRatting)? 0 : newRatting;
    rate(rating);
    console.log('rating =', rating);
  });
})*/

/* reviewStars.forEach((star, index) => {
  star.addEventListener("click", () => {
    /*reviewStars.forEach(s => s.classList.remove("active"));*/
/* 
    for(let i = 0; i <= index; i++){
      reviewStars[i].classList.add("bxs-star");
    };
  });
})
*/
if(reviewMsg){
  const saved = localStorage.getItem("savedReview");

  if(saved){
    reviewMsg.value = saved;
  }

  reviewMsg.addEventListener("input", () => {
    localStorage.setItem("savedReview", reviewMsg.value);
  });
} 

if(nameReview){
  const saved = localStorage.getItem("savedName");

  if(saved){
    nameReview.value = saved;
  }

  nameReview.addEventListener("input", () =>{
    localStorage.setItem("savedName", nameReview.value);
  });
}
/*reviewBtn.addEventListener("click", () => {
  if(reviewMsg.value = "";
  nameReview.value = "";
})*/

const GoToQuote = document.querySelectorAll(".serv-bodyBtn");

if(GoToQuote){
  GoToQuote.forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = "getQuote.html";
    })
  })
}
