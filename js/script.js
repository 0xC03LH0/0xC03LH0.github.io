var navigationItems = [
    {
        name: "Home",
        href: "/home",
        icon: "fas fa-home",
    },
    {
        name: "About-me",
        href: "about-me.html",
        icon: "fa fa-user-secret"

    },
    {
        name: "Malwares",
        href: "malwares.html",
        icon: "fas fa-virus"
    },
    {
        name: "Reverse",
        href: "reverse.html",
        icon: "fa fa-cogs"

    },
    {
        name: "Windows C|C++",
        href: "windows.html",
        icon: "fa fa-windows"
    },
    {
        name: "Linux C|C++",
        href: "linux.html",
        icon: "fa fa-linux"
    },
    {
        name: "Kurama OS",
        href: "kurama.html",
        icon: "fa fa-paw"
    },
    {
        name: "RatEz",
        href: "ratez.html",
        icon: "fas fa-mouse"
    },
    {
        name: "CTF-Writeups",
        href: "writeup.html",
        icon: "fa fa-flag"
    },
]


function CreateItem(item) {
    var i = document.createElement("i");
    i.className = item.icon;

    var icon = document.createElement("span");
    icon.className = "icon";
    icon.appendChild(i);

    var title = document.createElement("span");
    title.className = "title";
    title.title = item.name;
    title.innerHTML = item.name;

    var a = document.createElement("a");
    a.href = item.href;
    a.appendChild(icon);
    a.appendChild(title);

    var li = document.createElement("li");
    if (item.onclick) { li.addEventListener("click", item.onclick) };
    li.appendChild(a);

    var navigation = document.querySelector(".navigationContainer .navigation ul");
    navigation.appendChild(li);
}


navigationItems.forEach(item => {
    CreateItem(item);
});

document.getElementsByClassName("toggle")[0].click();