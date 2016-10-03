var course = {
    name: 'JavaScript Applications',
    awesome: true,
    teachers: ['Assaf', 'Shane'],
    students: [
        {
            name: 'Steve',
            computer: {
                OS: 'Linux',
                type: 'laptop'
            }
        },
        {
            name: 'Katy',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        },
        {
            name: 'Chuck',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        }

    ],
    preReqs : {
        skills : ['html', 'css', 'git'],
        equipment: {
            laptop: true,
            OSOptions: ['linux', 'osx']
        }
    }
};

console.log(course.name); //Name of the course ('JavaScript Applications')
console.log(course.teachers[1]); //Name of the second teacher ('Shane')
console.log(course.students[0].name); //Name of the first student ('Steve')
console.log(course.students[1].computer.type); //Katy's computer type ('macbook')
console.log(course.preReqs.equipment); //The preReq equipment object
console.log(course.preReqs.equipment.OSOptions[1]); //The second OSOption from equipment prereqs ('osx')
console.log(course.preReqs.equipment.OSOptions.join(' or ')); //string listing the OSOptions separated by 'or' ('linux or osx')
console.log(course.students.slice(1,3)); //An array of all the students that are using OSX.
