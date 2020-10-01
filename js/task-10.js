// Write code under this line
const getSortedUniqueSkills = (array) => array
.reduce((acc, item) => [...acc, ...item.skills], [])
.sort()
.filter((current, index, arr) => arr.indexOf(current) === index);



 console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
