var site = new Array(31)
site[0] = "https://yandex.com/search/?text=milf%20xxxstream&lr=115588"
site[1] = "https://yandex.com/search/?text=Porn%20xxx&lr=115588"
site[2] = "https://yandex.com/search/?text=porn%20fuck&lr=115588"
site[3] = "https://yandex.com/search/?text=porn%20hub&lr=115588"
site[4] = "https://yandex.com/search/?text=Tube%20xvideo&lr=115588"
site[5] = "https://yandex.com/search/?text=pornhb&lr=115588"
site[6] = "https://yandex.com/search/?text=xhamster&lr=115588"
site[7] = "https://yandex.com/search/?text=petarda&lr=115588"
siteNumber = Math.floor(Math.random()*7);
var ref= site[siteNumber];
delete window.document.referrer;
window.document.__defineGetter__('referrer', function () {
return ref;
});
