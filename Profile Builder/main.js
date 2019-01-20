// Selector

const profiileform = document.querySelector('.profileForm');
const profile = document.querySelector('.profile');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const professionInput = document.querySelector('#profession');

// Listner

profiileform.addEventListener('submit', 
function(evt){
    evt.preventDefault();
    const profileData = {
        name: nameInput.value,
        age: ageInput.value,
        profession: professionInput.value
    }
    const formattedText=formatText(profileData);
    saveDataToStorage(profileData);
    profile.innerHTML += formattedText;
    nameInput.value='';
    ageInput.value='';
    professionInput.value='';
});

function formatText({ name, age, profession}){
    const text =
    `
    <div class="profile__section">
        <h3>Name: ${name}</h3>
        <p>Age: ${age}</p>
        <p>Profession:  ${profession}</p>
    </div>

    `;
    return text;
}
function saveDataToStorage(profileData){
    let profiles;
    if(localStorage.getItem('profiles')){
       profiles=JSON.parse(localStorage.getItem('profiles'));
       profiles.push(profileData);
       localStorage.setItem('profiles',profiles);
    }else{
        profiles=[];
        profiles.push(profileData);
       localStorage.setItem('profiles',JSON.stringify(profiles));
    }
}