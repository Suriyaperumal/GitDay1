// 

let company =[
    "Trendnologies pvt lmt",
    2025,
    ["Bangalore","Chennai","Coimbatore"],
    {
        department:"QA",
        employees:[
            {name:"Perumal",role:"Software engineer",Skills:["Playwright","Selenium","Api Testing"]},
            {name:"Abinaya",role:"Software engineer1",Skills:["Playwright","Selenium","Api Testing"]},
            {name:"Gajendran",role:"Software engineer2",Skills:["Playwright","Selenium","Api Testing"]}

        ]
    },
    [
        {project:"Autoshop", Skills:"Ongoing"},
        {project:"Quickcart",Skills:"Completed"}
        
    ]
]
console.log(company[3].department)
console.log(company[4][0].Skills)