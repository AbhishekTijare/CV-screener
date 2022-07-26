console.log("this is");

const data =[
    {
        name : 'Abhishek Tijare',
        age : '21',
        city : 'Akola',
        language : 'JavaScript',
        framework : 'React',
        image : 'https://randomuser.me/api/portraits/men/70.jpg'
    },
    {
        name : 'Sahil Kadu',
        age : '21',
        city : 'Akola',
        language : 'JavaScript',
        framework : 'React',
        image : 'https://randomuser.me/api/portraits/men/79.jpg'
    },
    {
        name : 'Saurabh jadhav',
        age : '21',
        city : 'Akola',
        language : 'JavaScript',
        framework : 'React',
        image : 'https://randomuser.me/api/portraits/men/72.jpg'
    },
    {
        name : 'Abhinandan Khandare',
        age : '21',
        city : 'Akola',
        language : 'JavaScript',
        framework : 'React',
        image : 'https://randomuser.me/api/portraits/men/73.jpg'
    },
    {
        name : 'Yash Deshmukh',
        age : '21',
        city : 'Akola',
        language : 'JavaScript',
        framework : 'React',
        image : 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name : 'Vaibhav Thorat',
        age : '21',
        city : 'Akola',
        language : 'JavaScript',
        framework : 'React',
        image : 'https://randomuser.me/api/portraits/men/80.jpg'
    }
]


function cvIterator(profiles){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value : profiles[nextIndex++], done: false} :
            {done : true }
        }
    }

}
const candidate = cvIterator(data);

const next= document.getElementById('next');
next.addEventListener('click', nextCV);


nextCV();
function nextCV(){
    const newCandidate = candidate.next().value;

    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    if (newCandidate != undefined){
    image.innerHTML =`<img src="${newCandidate.image}">`


    profile.innerHTML =  `<ul class="list-group">
                            <li class="list-group-item">Name : ${newCandidate.name}</li>
                            <li class="list-group-item"> ${newCandidate.age} years old</li>
                            <li class="list-group-item">Lives in ${newCandidate.city}</li>
                            <li class="list-group-item">Works on ${newCandidate.language}</li>
                            <li class="list-group-item">uses ${newCandidate.framework} framework</li>           
                            </ul>`
    }else{
        alert("End of Candidate applications");
        window.location.reload();
    }
}