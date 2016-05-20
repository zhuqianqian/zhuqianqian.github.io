function setupPage() {
    loadSkills();
    loadLinks();
}
function loadSkills() {
    skillSet = ["C/C++", "Java", "Android", "Android Studio",
        "Win32 Programming", "Performance Tuning", "SQL",
        "ABAP", "Customer Support"];
    ul = document.getElementById("skills");
    for (i = 0; i < skillSet.length; i++) {
        var item = document.createElement("li");
        item.appendChild(document.createTextNode(skillSet[i]));
        ul.appendChild(item);
    }
}

function loadLinks() {
    links = ["https://ca.linkedin.com/in/qianqian-zhu-9b42873a",
        "https://github.com/zhuqianqian",
        "https://plus.google.com/+QianqianZhu299"
    ];
    altTexts = ["LinkedIn", "GitHub", "Google Plus"];
    imgLinks = ["https://static.licdn.com/scds/common/u/img/webpromo/btn_in_20x15.png",
        "",
        ""
    ]
}