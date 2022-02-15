function megaFriend(friends) {
// error handling
    if(Array.isArray(friends) == false){
        return 'please provide an array of strings'
    }
// looping in friensa array     
    let mega = friends[0];
    for(const friend of friends) {
        if(friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
// function calling
friends = ['kutub', 'shamol', 'motinnnnn', 'jafur'];
const myBigBuddy = megaFriend(friends);
const myBigBuddyError = megaFriend(12434);
console.log(myBigBuddy);
console.log(myBigBuddyError);

// to check a name in an array 
if(friends.indexOf('jafur') != -1) {
    console.log('jafur exists');
}
// to check a name by using includes
if(friends.includes('shamol')){
    console.log('shamol is included');
}
if(friends.includes('shamol')== true){
    console.log('shamol is there.its true')
}
// if the name dose not exist
if(friends.includes('bimol') == false){
    console.log('bimol is not there.its false')
}
// using else 
if(friends.includes('passahamol')== true){
    console.log('shamol is there.but');
}
else{
    console.log("the name isn't there");
}
// using concat property
const first = [1,2,3,4,5];
const second = [10,20,30,40,50];
const tal = 'total'
const combined = first.concat(second).concat(tal)
console.log(combined);
