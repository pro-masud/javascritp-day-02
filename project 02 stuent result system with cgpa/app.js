 //    Student Information here now
    let name = prompt("Student Name:");
    let roll = prompt("Roll");

    let bangla      = parseFloat(prompt("Bangla"));
    let english     = parseFloat(prompt("English"));
    let math        = parseFloat(prompt("Math"));
    let science     = parseFloat(prompt("Science"));
    let sscience    = parseFloat(prompt("Social Science"));
    let relagion    = parseFloat(prompt("Relagion"));

    // Total Subject number here now
    let total       = bangla + english + math + science + sscience + relagion;

    // Student Total CGPA
    let cgpa = total / 6;

    console.log(`
        Student Name        : ${ name }
        Roll                : ${ roll }
        
        Bangla              : ${ bangla }
        English             : ${ english }
        Math                : ${ math }
        Science             : ${ science }
        Social Science      : ${ sscience }
        Relagion            : ${ relagion }
        ----------------------------------------
        Total Number        : ${ total }
        Total CGPA          : ${ cgpa.toFixed(2) }
    `);

