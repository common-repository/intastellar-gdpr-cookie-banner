window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".intastellarPluginHeader__smallHeader-item").forEach((menu) => {
        menu.addEventListener("click", function () {
            if (this.getAttribute("href") == "#logo") {
                document.querySelector(this.getAttribute("href")).classList.toggle("intastellarPluginContent__items--show");
                
            } else if (this.getAttribute("href") == "#text") {
                document.querySelector(this.getAttribute("href")).classList.toggle("intastellarPluginContent__items--show");
            } else if (this.getAttribute("href") == "#placement") {
                document.querySelector(this.getAttribute("href")).classList.toggle("intastellarPluginContent__items--show");
            } else if (this.getAttribute("href") == "#privacy") {
                document.querySelector(this.getAttribute("href")).classList.toggle("intastellarPluginContent__items--show");
            } else if (this.getAttribute("href") == "#language") {
                document.querySelector(this.getAttribute("href")).classList.toggle("intastellarPluginContent__items--show");
            } else if (this.getAttribute("href") == "#color") {
                document.querySelector(this.getAttribute("href")).classList.toggle("intastellarPluginContent__items--show");
            }
        })
    })

    function isURL(str) {
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    
        const tmp = document.createElement('a');
        tmp.href = str;
    
        if (tmp.host !== window.location.host || tmp.host == window.location.host) {
            if (pattern.test(str) && str.indexOf("policy") != -1 ||
                pattern.test(str) && str.indexOf("cookie") != -1 ||
                pattern.test(str) && str.indexOf("privat") != -1 ||
                pattern.test(str) && str.indexOf("privacy") != -1 ||
                pattern.test(str) && str.indexOf("datenschutz") != -1 ||
                pattern.test(str) && str.indexOf("handelsbetingelser") != -1) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    function isURL(str) {
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    
        const tmp = document.createElement('a');
        tmp.href = str;
    
        if (tmp.host !== window.location.host || tmp.host == window.location.host) {
            if (pattern.test(str) && str.indexOf("policy") != -1 ||
                pattern.test(str) && str.indexOf("cookie") != -1 ||
                pattern.test(str) && str.indexOf("privat") != -1 ||
                pattern.test(str) && str.indexOf("privacy") != -1 ||
                pattern.test(str) && str.indexOf("datenschutz") != -1 ||
                pattern.test(str) && str.indexOf("handelsbetingelser") != -1) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    
    if (document.querySelector("#intastellarPrivacyLink_id") != null){
        if (!isURL(document.querySelector("#intastellarPrivacyLink_id").value)) {
            document.querySelector("#intastellarPrivacyLink_id").style.borderColor = "red";
        }
        document.querySelector("#intastellarPrivacyLink_id").addEventListener("keyup", function (e) {
            if (!isURL(e.target.value)) {
                document.querySelector("#intastellarPrivacyLink_id").style.borderColor = "red";
            } else {
                document.querySelector("#intastellarPrivacyLink_id").style.borderColor = "";
            }
        })
    }

    document.querySelector("#intastellarCustomIcon_id").addEventListener("change", (e) => {
        document.querySelector(".intastellarCookieSettingsLogo").src = e.target.value;
    })


    let colorButton = document.getElementById("intastellarCookieBannerColor_id");
    let colorDiv = document.getElementById("intastellarCookieBannerColorValue");

    colorButton.oninput = function() {
        colorDiv.innerHTML = colorButton.value;
        colorDiv.style.color = colorButton.value;
    }

    colorDiv.addEventListener("input", function (e) {
        colorButton.value = e.target.innerText;
        colorDiv.style.color = e.target.innerText;
    })
});