var projects=[
    {
        page:"takehomepodcast",
        title:"Take Home Pediatrics Podcast",
        image: "podcast.png",
        description: "I am currently working for a local pediatrician who has recently started a podcat. I have created the logo and composed the sountrack for Take Home Pediatrics: The Podcast. Now, I am working on designing the wesbsite. My aim is to make it captivating and educational, in order to draw users to listen to the podcast. Feel free to take a look at my work in progress!",
        sample: "podcastsample.png",
    },
    {
        page: "musicplayer",
        title:"Mobile Music Player Application",
        image: "music-player.png",
        description: "I recently created a mobile music application using HTML, CSS, and Javascript. This was one of my first projects involving HTML and CSS. I did this project for a class, however, I plan to continue working on it to continue adding more of my own style and creativity.",
        sample:"musicplayersample.png",
        link:"ipod-starter copy/albums.html"
    },
    {
        page:"northeastwebsite",
        title:"Northeast Pediatrics Website",
        image: "website.png",
        description: "Northeast Pediatrics is my local pediatrician office. In high schoool, I assisted in revamping their website. I worked along side a professional web developer to create a new, energetic design for the Northeast Pediatrics wesbite to increase engagement.",
        sample:"northeastsample.png",
        link:"https://northeastkids.webs.com"
    }
]

var contacts =[
    {
        link:"https://www.linkedin.com/in/rena-upadhyay-6b8b36173/",
        image:"https://i.ya-webdesign.com/images/linkedin-transparent-outline-2.png",

    },
    {
        link:"https://www.instagram.com/renaupadhyay/?hl=en",
        image:"https://freeiconshop.com/wp-content/uploads/edd/instagram-new-outline.png",

    },
    {
        link:"https://www.facebook.com/profile.php?id=100005326726445",
        image:"https://cdn4.iconfinder.com/data/icons/social-media-outline-3/60/Social-01-Facebook-Outline-512.png",

    },

]

function createProjects(projects,sectionSelector){
    let section= document.querySelector(sectionSelector);
    if(section){
        if (projects instanceof Array){
            for(let project of projects){
                let html = `
               <a href = "${project.page}.html"><img src="${project.image}" class="image" alt="Image art"></a>`;

                let container=document.createElement("div");
                container.className="project";
                container.innerHTML = html;
                section.append(container);
            }
        }
    }
}

function createProjectPage(projects,sectionSelector, number){
    let section= document.querySelector(sectionSelector);
    if(section){
        if (projects instanceof Array){
                let html = `
               <h1 class= "projectpagetitle"> ${projects[number-1].title} </h1>
               <p class= "projectpagedescription"> ${projects[number-1].description} </p>
                <a href= "${projects[number-1].link}"> <img class ="sample" src="${projects[number-1].sample}"></a>
                
                `;
               section.innerHTML = html;
            }
        }
    }
function createContacts(contacts,sectionSelector){
    let section= document.querySelector(sectionSelector);
    if(section){
        if (contacts instanceof Array){
            for(let contact of contacts){
                let html = `
               <a href="${contact.link}"> <img class="image" src="${contact.image}"></a>
                
                `;
                let container=document.createElement("div");
                container.className="contact";
                container.innerHTML = html;
                section.append(container);
              
            }
        }
    }
    
}


