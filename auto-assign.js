var data = [
    {
        name: 'RADHIKA APTE',
        desc: 'Indian Theatre actress worked in Badlapur and Sacred Games.'
    },
    {
        name: 'SANDEEP SINGH',
        desc: 'Ex-captain of the Indian national hockey team.He received Arjuna Award in 2010.'
    },
    {
        name: 'ASHWIN SANGHI',
        desc: "Indian writer in the fiction - Thriller genre of best selling titles like The Rozobal line and it's seccessors."
    },
    {
        name: 'JITENDER KUMAR',
        desc: 'Indian actor famous for his roles in comedy sketches of ’The Viral Fever’.'
    },
    {
        name: 'PRAJAKTA KOHLI',
        desc: ' Indian YouTube personality who makes comedy videos popularly known by her YouTube name "MostlySane".'
    }
]

assign()

function assign() {
    let body = document.getElementsByClassName('body-container')
    for (let i = 0; i < body.length; i++) {
        let person = data[i];
        let content = 
        `
        <div class="head">
            <img class="logo" src="./assets/conclave_logo.png"/>
            <div class="heading">${person.name}</div>
        </div>
        <p>${person.desc}</p>
        `
        body[i].innerHTML += content;
    }
}