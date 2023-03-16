kisi1 = {
    school_no: 201902052,
    name: 'Muhammed Sayar',
    school: 'Amasya Üniversitesi',
    adress: {
        sehir: 'İstanbul',
        ilce: 'Sarıyer'
    },
    hobbies: ['Bilgisayar', 'Donanım', 'İşletim Sistemleri', 'Teknoloji']
}

kisi2 = {
    school_no: 9999999999,
    name: 'Merve Çolak',
    school: 'Amasya Üniversitesi',
    adress: {
        sehir: 'İstanbul',
        ilce: 'Beşiktaş'
    },
    hobbies: ['Gitar', 'Resim', 'Gezme', 'yazı yazma']
}

liste = [kisi1,kisi2]
listeUzunluk = liste.length;


function showUser() {

    for(i = 0; i < listeUzunluk; i++)
        {
            document.querySelector('.user-no').innerHTML += `
              Number: ${liste[i].school_no}
            `
    
            document.querySelector('.user-name').innerHTML += `
            <span>  Name : ${liste[i].name}</span> 
            `
    
            document.querySelector('.user-school').innerHTML += `
                <span>  School : ${liste[i].school}</span> 
            `
    
            document.querySelector('.user-address').innerHTML += `
            <span>  City: ${liste[i].adress.sehir}</span>
            <span>  Town: ${liste[i].adress.ilce}</span>
            `
    
            let hobbies = document.querySelector('.user-hobies')
    
            for (index in liste[i].hobbies) {
                hobbies.innerHTML += `<div> ${liste[i].hobbies[index]}</div>
                `
        }
        document.getElementById("btn").disabled = true;
        break;
        }
}

const addBtn = document.querySelector('#add-btn')
const showBtn = document.querySelector('#show-btn')

skill_list = []

function addSkills() {
    let skillelement = document.getElementById('text_skill_add').value

    skill_list.push(skillelement)
    document.getElementById('text_skill_add').value = ''

    console.log(...skill_list)
}

function showSkills() {
    let add_skill_list = document.querySelector('.skillss')

    for(j in skill_list) {
        add_skill_list.innerHTML += `
        <div>${skill_list[j]}</div>
    `
    //j++
    //document.getElementById("show-btn").disabled = true;
    }
    
}


// function showUser() {

//     document.querySelector('.user-no').innerHTML += `
//         No: ${kisi1.school_no}
//     `

//     document.querySelector('.user-name').innerHTML += `
//         <span>isim : ${kisi1.name}</span> 
//     `

//     document.querySelector('.user-school').innerHTML += `
//         <span>Okul : ${kisi1.school}</span> 
//     `

//     document.querySelector('.user-address').innerHTML += `
//         <span>Sehir: ${kisi1.adress.sehir}</span>
//         <span>İlçe: ${kisi1.adress.ilce}</span>
//     `

//     let hobbies = document.querySelector('.user-hobies')

//     for (index in kisi1.hobbies) {
//          hobbies.innerHTML += `<div> ${kisi1.hobbies[index]}</div>
//         `
//     }
//     document.getElementById("btn").disabled = true;
// }