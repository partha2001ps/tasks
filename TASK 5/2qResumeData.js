// JSON resume data

let resumeData = {
    name: 'Parthasarathi',
    contactNumber: 8825477115,
    email: 'parthapn2017@gmail.com',
    personalDetalies: {
        DOB: '09.12.2001',
        age: 21,
        fatherName: 'Govindaraj',
        motherNmame:'Ananthi'
    },
    education: {
        sslc: {
            pssout: 2017,
            percentage: 92.2,
            school:'Government school kamalapuram',
        },
        HSC: {
            pssout: 2019,
            percentage: 80.16,
            school:'Green home school omalur',
        },
        college: {
            passout: 2023,
            ccgp: 8.54,
            collegeName:'AVS enginnering cooege'
        }
    },
    skiils: ['c', 'c++', 'java', 'HTML', 'CSS', 'Javascript'],
}

console.log(JSON.stringify(resumeData));


// output;

// [Running] node "d:\task\TASK 5\2qResumeData.js"
// {"name":"Parthasarathi","contactNumber":8825477115,"email":"parthapn2017@gmail.com",
// "personalDetalies": { "DOB": "09.12.2001", "age": 21, "fatherName": "Govindaraj", "motherNmame": "Ananthi" },
// "education": {
//     "sslc": { "pssout": 2017, "percentage": 92.2, "school": "Government school kamalapuram" },
//     "HSC": { "pssout": 2019, "percentage": 80.16, "school": "Green home school omalur" },},
//     "college": { "passout": 2023, "ccgp": 8.54, "collegeName": "AVS enginnering cooege" }
//  "skiils": ["c", "c++", "java", "HTML", "CSS", "Javascript"]}

// [Done] exited with code=0 in 1.009 seconds