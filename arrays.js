// The contacts list below is already populated.

var contacts = [
    { name: 'Jake Overall', email: 'jake.overall@boisecodeworks.com', title: 'founder' },
    { name: 'Matt Overall', email: 'matt.overall@boisecodeworks.com', title: 'founder' },
    { name: 'Mark Ohnsman', email: 'mark@boisecodeworks.com', title: 'instructor' },
    { name: 'Darryl Kilzer', email: 'darryl@boisecodeworks.com', title: 'instructor' },
    { name: 'Tom Day', email: 'tom@boisecodeworks.com', title: 'instructor' },
];


// 1. Print how many contacts are in the list.
//    Expected: 5
console.log(contacts.length)

// 2. Create a new list named instructors that contains only the contacts whose title is 'instructor'.
//    Do not modify the original contacts list.
//    Expected: 3 contacts (Mark, Darryl, Tom)
var instructors = contacts.filter(contact => contact.title === 'instructor')
console.log(instructors.map(contact => contact.name.split(" ")[0]))



// 3. Using instructors, create a list named instructorEmails that contains only their email addresses.
//    Expected: mark@boisecodeworks.com, darryl@boisecodeworks.com, tom@boisecodeworks.com

var instructorsEmails = instructors.map(contact => contact.email)
console.log(instructorsEmails)
