function findWinner(participants) {
    if (participants.length === 0) {
        return null; 
    }
    
    let maxScore = participants[0].score;
    let winnerName = participants[0].name;
    
    for (let i = 1; i < participants.length; i++) {
        if (participants[i].score > maxScore) {
            maxScore = participants[i].score;
            winnerName = participants[i].name;
        }
    }
    
    return winnerName;

}
console.log(findWinner(participants));