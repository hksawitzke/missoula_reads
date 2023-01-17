
//This is for the progress circle 
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 100;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #07A89B ${progressValue * 3.6}deg,
      #4DE1D5 ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

//this is for spawning the book information checkboxes dynamically -- It isn't functioning yet as I want to make sure I have the rest of the code correct first

var bookCategory = ["200 Pages or fewer", "2022 Montana Book Award Nominee", "400 Pages or More", "About a Real Person", "Anthology or Collection", "Any ebook, any audiobook, or re-read an old favorite", "Art or Craft", "Author Shares Your Zodiac Sign", "Author Used a Pen Name", "Author's Last Name Starts with a Vowel", "Author's Photo on the Back Cover", "Blue Cover", "Book from a Series", "Book You Abandoned in the Past", "Business, Entrepreneurship or Marketing", "Civil Rights", "Classic You've Been Avoiding", "Community Read: The Cold Millions", "Country in the Title", "Current Event", "Food", "Genre-bending", "Job Title in the Title", "Leaves on the Cover", "Lots of Photos", "Made into a Movie/Show", "Magic Realism", "Mark Twain", "Mindfulness", "Published in 2023", "Question in this Title", "Read it For the Title", "Recently Challenged", "Recently-deceased Author", "Revenge", "Science Fiction", "Seasonal", "Set During a War", "Set in a Place You'd Like to Visit", "Sppoky", "Sports", "Steamy", "Takes Place in a Foreign Country", "Three Words in the Title", "Transportation", "Travel Guide", "Weather", "Western", "Written by a Josephine Miles Award Winner", "Young Adult Fiction"]


function checkboxToggle() {
    for (let i = 1; i <= bookCategory.length; i++) {
        let newCheckbox = document.createElement('input');
        newCheckbox.setAttribute('type', 'checkbox');
        newCheckbox.setAttribute('id', 'category' + i);

        let btnLabel = document.createElement('label');
        btnLabel.setAttribute('for', 'category' + i);
        console.log('btnLabel');

        btnLabel.innerHTML='<p>'+bookCategory[i-1]+'</p>';
        
        document.getElementById('checkboxes').appendChild(newCheckbox);
        document.getElementById('checkboxes').appendChild(btnLabel);
    }
};


//this is for the star rating 
let star1 = document.getElementById('star1');
let star2 = document.getElementById('star2');
let star3 = document.getElementById('star3');
let star4 = document.getElementById('star4');
let star5 = document.getElementById('star5'); 
let starCount = 0;

function starRating1(){
    
    if(starCount == 0) {
        star1.classList.add("starFill");
        star2.classList.remove("starFill");
        star3.classList.remove("starFill");
        star4.classList.remove("starFill");
        star5.classList.remove("starFill");
        starCount = 1;
    }

    else if(starCount > 0){
        star1.classList.remove("starFill");
        star2.classList.remove("starFill");
        star3.classList.remove("starFill");
        star4.classList.remove("starFill");
        star5.classList.remove("starFill");
        starCount = 0;
    }
   
};

function starRating2(){
    star1.classList.add("starFill");
    star2.classList.add("starFill");
    star3.classList.remove("starFill");
    star4.classList.remove("starFill");
    star5.classList.remove("starFill");
};

function starRating3(){
    star1.classList.add("starFill");
    star2.classList.add("starFill");
    star3.classList.add("starFill");
    star4.classList.remove("starFill");
    star5.classList.remove("starFill");
};

function starRating4(){
    star1.classList.add("starFill");
    star2.classList.add("starFill");
    star3.classList.add("starFill");
    star4.classList.add("starFill");
    star5.classList.remove("starFill");
};

function starRating5(){
    star1.classList.add("starFill");
    star2.classList.add("starFill");
    star3.classList.add("starFill");
    star4.classList.add("starFill");
    star5.classList.add("starFill");
};



