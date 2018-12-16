const bookTitles = ['tuesdays_with_morrie', 'angels_and_demons', 'shopaholic' , 'princess_diaries', 'da_vinci_code','the_fault_in_our_stars', 'love_rosie', 'looking_for_alaska', 'the_host', 'les_miserables'];

// console.log(bookTitles);

const bookInfo = [ {
    id: bookTitles[0],
    title: "Tuesday's with Morrie",
    language: "English",
    author: "Mitch Albom",
    pic: "images/twm.jpg" 
},
{
    id: bookTitles[1],
    title: "Angels and Demons",
    language: "English",
    author: "Dan Brown",
    pic: "images/ad.jpg" 
},
{
    id: bookTitles[2],
    title: "Shopaholic",
    language: "English",
    author: "Sophie Kinsella",
    pic: "images/shop.png" 
},
{
    id: bookTitles[3],
    title: "Princess Diaries",
    language: "English",
    author: "Meg Cabot",
    pic: "images/princess.jpg" 
},
{
    id: bookTitles[4],
    title: "Da Vinci Code",
    language: "English",
    author: "Dan Brown",
    pic: "images/tdc.png" 
},
{
    id: bookTitles[5],
    title: "The Fault in our Stars",
    language: "English",
    author: "John Green",
    pic: "images/tfios.png" 
},
{
    id: bookTitles[6],
    title: "Love, Rosie",
    language: "English",
    author: "Cecelia Ahern",
    pic: "images/love.png" 
},
{
    id: bookTitles[7],
    title: "Looking for Alaska",
    language: "English",
    author: "Johnny Green",
    pic: "images/alaska.jpg" 
},
{
    id: bookTitles[8],
    title: "The Host",
    language: "English",
    author: "Stephenie Meyer",
    pic: "images/host.jpg" 
},
{
    id: bookTitles[9],
    title: "Les Miserables",
    language: "French",
    author: "Victor Hugo",
    pic: "images/les.png"
}
];


function addBookInfo(){
    for(let i = 0; i < bookTitles.length; i++){
        let bookTitle = document.getElementsByTagName("h3")[i];
        bookTitle.innerHTML = bookInfo[i].title;
        let bookAuthor = document.getElementsByTagName("h4")[i];
        bookAuthor.innerHTML = bookInfo[i].author;
        let bookLanguage = document.getElementsByTagName("p")[i];
        bookLanguage.innerHTML = bookInfo[i].language;
        let bookPic = document.getElementsByClassName("book-pic")[i];
        bookPic.src = bookInfo[i].pic ; 
    }

}

addBookInfo();


/*
function addBookInfo(){
    for(let i = 0; i < bookTitles.length; i++){
        const bookIds = bookTitles[i];
        //const book = document.getElementById(bookIds);
        const bookDetails = bookInfo[bookIds];
        document.getElementsByClassName("title")[0].innerHTML= bookDetails.title;
        document.getElementsByClassName("author")[0].innerHTML= bookDetails.author;
        document.getElementsByClassName("language")[0].innerHTML = bookDetails.language;
        document.getElementsByClassName("book-image")[0].src = bookPics[bookIds];

    }
}
*/





/*
function generateBookId(){
    for(let i = 0 ; i < bookTitles.length ; i++){
        let myList = document.createElement('li');
        let bookList = document.createTextNode(bookTitles[i]);
        myList.append(bookList);  
        document.getElementById('book_names').appendChild(myList);
    }
}
generateBookId();

*/

