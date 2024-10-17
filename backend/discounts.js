
function getDicountFromCompination(tickets){
    let option1 = 'ORE2 Comprehensive Theory Course';
    let option2 = 'ORE2: Five-Day Comprehensive Online Course + One In-Person Day';
    let option3 = '3-Day ORE2 Manikin Mastery';
    
    let hasBothOptions = (tickets.some(ticket => ticket.optionName.trim() == option1) || tickets.some(ticket => ticket.optionName.trim() == option2)) &&
                     tickets.some(ticket => ticket.optionName.trim() == option3);

    if (hasBothOptions) {
        console.log('Both option names exist in the tickets array');
        return 1;
    } else {
        console.log('One or both option names are missing');
        console.log(tickets.some(ticket => ticket.optionName.trim() == option1))
        console.log(tickets.some(ticket => ticket.optionName.trim() == option2))
        console.log(tickets.some(ticket => ticket.optionName.trim() == option3))
        return 0;
    }
    
}


module.exports = {
    getDicountFromCompination
}