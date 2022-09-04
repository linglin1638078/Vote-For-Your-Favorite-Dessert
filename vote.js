
const vote = document.getElementsByClassName('desserts')[0];
vote.addEventListener('click', voteCount);



function voteCount(event) {
    //to know on which dessert the vote button is clicked 
    const dessert = event.target.parentElement;
    const totalVote = dessert.getElementsByClassName('totalVote')[0];
    //to obtain the current vote of the current dessert - only works upto 10 votes
    let totalCount = Number(totalVote.innerHTML.charAt(totalVote.innerHTML.length - 1));
    console.log(totalCount);
    //add 1 vote for each click
    totalCount += 1;
    totalVote.innerHTML = `# of votes: ${totalCount}`;
    
}

