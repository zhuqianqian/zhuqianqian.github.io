function setupPage() {
    loadSkills();
    loadEducation();
    loadLinks();
}
function loadSkills() {
    skillSet = ["C/C++", "Java", "Android", "Android Studio",
        "Win32 Programming", "Performance Tuning", "SQL",
        "ABAP", "SAP", "Customer Support"];
    ul = document.getElementById("skills");
    for (i = 0; i < skillSet.length; i++) {
        var item = document.createElement("li");
        item.appendChild(document.createTextNode(skillSet[i]));
        ul.appendChild(item);
    }
}

function loadEducation() {
    courseSet = ["Programming", "Linear Algebra", "Data Structure",
        "Algorithm Design and Analysis", "Operating Systems",
        "Database", "Computer Network", "Cryptology"];
    ul = document.getElementById("courses");
    for (i = 0; i < courseSet.length; i++) {
        var item = document.createElement("li");
        item.appendChild(document.createTextNode(courseSet[i]));
        ul.appendChild(item);
    }
}

function loadWorks() {

}

function loadProjects() {

}

function loadLinks() {
    links = ["https://ca.linkedin.com/in/qianqian-zhu-9b42873a",
        "https://github.com/zhuqianqian",
        "https://plus.google.com/+QianqianZhu299"
    ];
    altTexts = ["LinkedIn", "GitHub", "Google Plus"];
    imgLinks = ["https://static.licdn.com/scds/common/u/images/logos/linkedin/logo_in_nav_44x36.png",
        "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png",
        "https://developers.google.com/+/images/branding/g+138.png"
    ]
    widths = [44, 44, 42];
    heights = [36, 44, 42];
    ul = document.getElementById("links");
    for (i = 0; i < links.length; i++) {
        var item = document.createElement("li");
        var href = document.createElement("a");
        href.href = links[i];
        var img = document.createElement("img");
        img.width = widths[i];
        img.height = heights[i];
        img.src = imgLinks[i];
        img.alt = altTexts[i];
        href.appendChild(img);
        item.appendChild(href);
        ul.appendChild(item);
    }
}