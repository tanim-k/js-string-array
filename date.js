const myFavDate = new Date('1971-12-15');
console.log(myFavDate);
// another date format:
const another = new Date(1971, 3, 25, 11, 50, 40, 80);
console.log(another);
// comparing two dates:
if (myFavDate.getTime()< another.getTime()) {
    console.log('favourite date is earlier');
}
else{
    console.log('another time is earlier')
}