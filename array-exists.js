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