var data = [
    {
        url: "https://www.khoslaonline.com/wp-content/uploads/2023/06/ONE-PLUS-NORD-CE-2-LITE-5G-BLUE-TIDE-6GB128GB.png",
        name: "one plus",
        prise: 200000,
        item: 0
    },
    {
        url: "https://opsg-img-cdn-gl.heytapimg.com/epb/202307/25/EPF8lwLzx9TsWgjf.png",
        name: "oppo",
        prise: 50000,
        item: 0
    },
    {
        url: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1556089445.46711357!400x400!85.png",
        name: "Redmi Y3 - 32MP Super Selfie Camera",
        prise: 7999,
        item: 0
    },
    {
        url: "https://exstatic-in.vivo.com/Oz84QB3Wo0uns8j1/in/1713261480685/1d7088825285b6052a6220d99cd658f2.png_w860-h860.webp",
        name: "vivo T3X 5g",
        prise: 13799,
        item: 0
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCD8HZbnfDH6pK7Wz9_uWmxyltw7zVkst1TQ&s",
        name: "galaxy s24",
        prise:83479.39 ,
        item: 0
    },
];

function set() {
    var i = 1;
    for (const item of data) {
        var div = document.createElement("div");
        div.className = "item-main";
        div.innerHTML = `
        <div class="d">
            <div class="img-main">
                <div>${i}</div>
                <div class="img-box">
                    <img src="${item.url}" alt="">
                </div>
                
            </div>
            <div>${item.name}</div>
            </div>
            <div>${item.prise}</div>
            <div class="contete">
                <button onclick="update(${i}, '+');">+</button>
                <button>${item.item}</button>
                <button onclick="update(${i}, '-');">-</button>
            </div>`;
        document.getElementById("main").appendChild(div);
        i++;
    }

}

function update(ind, sub) {
    document.querySelector(".bile-name").classList.remove('des');
    document.querySelector(".cart").classList.remove('des');

    if (sub === "+"&& data[ind - 1].item !== 10) {
        data[ind - 1].item = data[ind - 1].item + 1;
    } else 
    if (sub === "-" && data[ind - 1].item !== 0) {
        data[ind - 1].item = data[ind - 1].item - 1;
    }
    document.getElementById("main").innerHTML = "";
    set();
    makelist()
}

set();
makelist()


function makelist() {
    var nowdata = [];
    for (const item of data) {
        if (item.item > 0) {
            nowdata.push(item)
        }
    }
    console.log(nowdata);
    setlist(nowdata)
}

function setlist(nowdata) {
    var totel_item = 0;
    var totel_prise = 0;

    for (const ind in nowdata) {
        nowdata[ind].totel =Number((nowdata[ind].item * nowdata[ind].prise).toFixed(2)) 
        totel_item += nowdata[ind].item;
        totel_prise += nowdata[ind].totel;
    }
    document.getElementById("cart").innerHTML = ""
    var i = 1;
    for (const item of nowdata) {
        var div = document.createElement("div");
        div.className = "item-main";
        div.innerHTML = `
        <div class="d2">

            <div class="img-main">
                <div>${i}</div>
                <div class="img-box">
                    <img src="${item.url}" alt="">
                </div>
            </div>
            <div>${item.name}</div>
            </div>
            <div>${item.prise}</div>
            <div class="contete">
                <button>${item.item}</button>
            </div>
            <div class="totelbox">${item.totel}</div>
            `;
        document.getElementById("cart").appendChild(div);
        i++;
    }
    var last = document.createElement("div");
    last.className = "totel";
    last.innerHTML = `<div class="t1"></div><div class="totelitem">totelitem=${totel_item}</div><div class="totelprise">totel=${totel_prise.toFixed(2)}</div>`
    document.getElementById("cart").appendChild(last);
    if (totel_item==0) {
        document.querySelector(".bile-name").classList.add('des');
        document.querySelector(".cart").classList.add('des'); 
    }
    console.log(totel_prise);
}