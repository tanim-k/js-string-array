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