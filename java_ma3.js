var colour = "blue"

if (colour == "orange") {
    console.log("The colour is orange");
} else { 
    console.log("The colour is NOT orange");
}


var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

for (var month of months) {
    switch (month) {
        case "January":
            console.log(month + " has 31 days");
            break;

        case "February":
            console.log(month + " has 28 days");
            break;

        case "March":
            console.log(month + " has 31 days");
            break;

        case "April":
            console.log(month + " has 30 days");
            break;

        case "May":
            console.log(month + " has 31 days");
            break;

        case "June":
            console.log(month + " has 30 days");
            break;

        case "July":
            console.log(month + ' has 31 days');
            break;

        case "August":
            console.log(month + ' has 31 days');
            break;

        case "September":
            console.log(month + ' has 30 days');
            break;

        case "October":
            console.log(month + ' has 31 days');
            break;

        case "November":
            console.log(month + ' has 30 days');
            break;

        case "December":
            console.log(month + ' has 31 days');
            break;

        default:
            console.log("not a month");
    }
}

var peeps = [
 {
     name: "Knut",
     age: 30,
     hobby: "Motorsykler"
 },
 {
     name: "Nøkken",
     age: 1229,
     hobby: "Musikk og svømming"
 },
 {
     name: "Robin",
     age: 27,
     hobby: "Gaming"
 }   
];


for (var i = 0; i < peeps.length; i++) {
    console.log(peeps[i].name + " liker " + peeps[i].hobby)
} 

for (var i = 0; i < 10; i++) {
    console.log(i);
}

try {
    console.log(woops);
}

catch(error) {
    console.error(error);
}

