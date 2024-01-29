/**
 * jquery.youtube-background v1.0.14 | Nikola Stamatovic <@stamat> | MIT
 */

! function() {
    "use strict";

    function t(t, e) {
        return t.classList ? t.classList.contains(e) : new RegExp("\\b" + e + "\\b").test(t.className)
    }

    function e(e, s) {
        if (e.classList) {
            const t = s.split(" ");
            for (var i = 0; i < t.length; i++) {
                const s = t[i];
                e.classList.add(s)
            }
        } else t(e, className) || (e.className += " " + className)
    }

    function s(t, e) {
        t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("\\b" + e + "\\b", "g"), "")
    }

    function i() {
        let t = !1;
        var e;
        return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
    }

    function a(t, e) {
        return t = Math.ceil(t), e = Math.floor(e), Math.floor(Math.random() * (e - t + 1)) + t
    }

    function o(t) {
        const e = t.split(/\s?:\s?/i),
            s = 16 / 9;
        if (e.length < 2) return s;
        const i = parseInt(e[0], 10),
            a = parseInt(e[1], 10);
        return isNaN(i) || isNaN(a) ? s : i / a
    }

    function n(t, e, s, i) {
        let a = {};
        if (t)
            for (let s in e) t.hasOwnProperty(s) || (a[s] = e[s]);
        else a = e;
        if (!s) return a;
        for (let t in a) {
            let e;
            if (i instanceof Array)
                for (var o = 0; o < i.length; o++) {
                    const a = s.getAttribute(i[o] + t);
                    if (a) {
                        e = a;
                        break
                    }
                } else e = s.getAttribute(i + t);
            null != e && (e = "false" !== e && e, e = /^\d+$/.test(e) ? parseInt(e, 10) : e, e = /^\d+\.\d+$/.test(e) ? parseFloat(e) : e, a[t] = e)
        }
        return a
    }
    const r = document.createElement("script");
    r.src = "https://www.youtube.com/player_api";
    const l = document.getElementsByTagName("script")[0];

    function p(t, e, s, a) {
        this.is_mobile = i(), this.element = t, this.ytid = s, this.uid = a, this.player = null, this.buttons = {}, this.state = {}, this.state.play = !1, this.state.mute = !1, this.params = {};
        const r = {
            pause: !1,
            "play-button": !1,
            "mute-button": !1,
            autoplay: !0,
            muted: !0,
            loop: !0,
            mobile: !1,
            "load-background": !0,
            resolution: "16:9",
            onStatusChange: function() {},
            "inline-styles": !0,
            "fit-box": !1,
            offset: 200,
            "start-at": 0,
            "end-at": 0,
            poster: null
        };
        this.__init__ = function() {
            this.ytid && (this.params = n(e, r, this.element, ["data-ytbg-", "data-vbg-"]), this.params.pause && (this.params["play-button"] = this.params.pause), this.params.resolution_mod = o(this.params.resolution), this.state.playing = this.params.autoplay, this.state.muted = this.params.muted, this.buildHTML(), this.injectPlayer(), this.params["play-button"] && this.generateActionButton({
                name: "play",
                className: "play-toggle",
                innerHtml: '<i class="fa"></i>',
                initialState: !1,
                stateClassName: "paused",
                condition_parameter: "autoplay",
                stateChildClassNames: ["fa-pause-circle", "fa-play-circle"],
                actions: ["play", "pause"]
            }), this.params["mute-button"] && this.generateActionButton({
                name: "mute",
                className: "mute-toggle",
                innerHtml: '<i class="fa"></i>',
                initialState: !0,
                stateClassName: "muted",
                condition_parameter: "muted",
                stateChildClassNames: ["fa-volume-up", "fa-volume-mute"],
                actions: ["unmute", "mute"]
            }))
        }, this.__init__()
    }

    function m(t, e, s, a) {
        this.is_mobile = i(), this.element = t, this.vid = s, this.uid = a, this.player = null, this.buttons = {}, this.state = {}, this.state.play = !1, this.state.mute = !1, this.params = {};
        const r = {
            autoplay: !0,
            muted: !0,
            loop: !0,
            mobile: !1,
            resolution: "16:9",
            "inline-styles": !0,
            "fit-box": !1,
            offset: 200,
            "start-at": 0,
            poster: null
        };
        this.__init__ = function() {
            this.vid && (this.params = n(e, r, this.element, ["data-ytbg-", "data-vbg-"]), this.params.pause && (this.params["play-button"] = this.params.pause), this.params.resolution_mod = o(this.params.resolution), this.state.playing = this.params.autoplay, this.state.muted = this.params.muted, this.buildHTML(), this.injectPlayer())
        }, this.__init__()
    }

    function h(t, e, s, a) {
        this.is_mobile = i(), this.element = t, this.link = s.link, this.ext = s.id, this.uid = a, this.player = null, this.buttons = {}, this.state = {}, this.state.play = !1, this.state.mute = !1, this.params = {};
        const r = {
                ogv: "video/ogg",
                ogm: "video/ogg",
                ogg: "video/ogg",
                avi: "video/avi",
                mp4: "video/mp4",
                webm: "video/webm"
            },
            l = {
                pause: !1,
                "play-button": !1,
                "mute-button": !1,
                autoplay: !0,
                muted: !0,
                loop: !0,
                mobile: !1,
                resolution: "16:9",
                "inline-styles": !0,
                "fit-box": !1,
                offset: 200,
                poster: null
            };
        this.__init__ = function() {
            this.link && this.ext && (this.mime = r[this.ext.toLowerCase()], this.params = n(e, l, this.element, ["data-ytbg-", "data-vbg-"]), this.params.pause && (this.params["play-button"] = this.params.pause), this.params.resolution_mod = o(this.params.resolution), this.state.playing = this.params.autoplay, this.state.muted = this.params.muted, this.buildHTML(), this.injectPlayer(), this.params["play-button"] && this.generateActionButton({
                name: "play",
                className: "play-toggle",
                innerHtml: '<i class="fa"></i>',
                initialState: !1,
                stateClassName: "paused",
                condition_parameter: "autoplay",
                stateChildClassNames: ["fa-pause-circle", "fa-play-circle"],
                actions: ["play", "pause"]
            }), this.params["mute-button"] && this.generateActionButton({
                name: "mute",
                className: "mute-toggle",
                innerHtml: '<i class="fa"></i>',
                initialState: !0,
                stateClassName: "muted",
                condition_parameter: "muted",
                stateChildClassNames: ["fa-volume-up", "fa-volume-mute"],
                actions: ["unmute", "mute"]
            }))
        }, this.__init__()
    }

    function u(t, e) {
        this.elements = t, "string" == typeof t && (this.elements = document.querySelectorAll(t)), this.index = {}, this.re = {}, this.re.YOUTUBE = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i, this.re.VIMEO = /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i, this.re.VIDEO = /\/[^\/]+\.(mp4|ogg|ogv|ogm|webm|avi)\s?$/i, this.__init__ = function() {
            for (let t = 0; t < this.elements.length; t++) {
                const s = this.elements[t],
                    i = s.getAttribute("data-youtube") || s.getAttribute("data-vbg"),
                    a = this.getVidID(i);
                if (!a) continue;
                const o = this.generateUID(a.id);
                if (o) switch (a.type) {
                    case "YOUTUBE":
                        const t = new p(s, e, a.id, o);
                        this.index[o] = t;
                        break;
                    case "VIMEO":
                        const i = new m(s, e, a.id, o);
                        this.index[o] = i;
                        break;
                    case "VIDEO":
                        const n = new h(s, e, a, o);
                        this.index[o] = n
                }
            }
            this.initYTPlayers()
        }, this.__init__()
    }
    var d;
    l.parentNode.insertBefore(r, l), p.prototype.initYTPlayer = function() {
        const t = this;
        window.hasOwnProperty("YT") && (this.player = new YT.Player(this.uid, {
            events: {
                onReady: function(e) {
                    t.onVideoPlayerReady(e)
                },
                onStateChange: function(e) {
                    t.onVideoStateChange(e)
                },
                onError: function(t) {}
            }
        }))
    }, p.prototype.seekTo = function(t) {
        t > 0 && this.player.seekTo(t, !0)
    }, p.prototype.onVideoPlayerReady = function(t) {
        this.params.autoplay && (this.seekTo(this.params["start-at"]), this.player.playVideo())
    }, p.prototype.onVideoStateChange = function(t) {
        0 === t.data && this.params.loop && (this.seekTo(this.params["start-at"]), this.player.playVideo()), -1 === t.data && this.params.autoplay && (this.seekTo(this.params["start-at"]), this.player.playVideo(), this.element.dispatchEvent(new CustomEvent("video-background-play", {
            bubbles: !0,
            detail: this
        }))), 1 === t.data && (this.iframe.style.opacity = 1), this.params.onStatusChange(t)
    }, p.prototype.injectPlayer = function() {
        this.iframe = document.createElement("iframe"), this.iframe.setAttribute("frameborder", 0), this.iframe.setAttribute("allow", "autoplay; mute");
        let t = `https://www.youtube.com/embed/${this.ytid}?&enablejsapi=1&disablekb=1&controls=0&rel=0&iv_load_policy=3&cc_load_policy=0&playsinline=1&showinfo=0&modestbranding=1&fs=0`;
        if (this.params.muted && (t += "&mute=1"), this.params.autoplay && (t += "&autoplay=1"), this.params.loop && (t += "&loop=1"), this.params["end-at"] > 0 && (t += `&end=${this.params["end-at"]}`), this.iframe.src = t, this.uid && (this.iframe.id = this.uid), this.params["inline-styles"] && (this.iframe.style.top = "50%", this.iframe.style.left = "50%", this.iframe.style.transform = "translateX(-50%) translateY(-50%)", this.iframe.style.position = "absolute", this.iframe.style.opacity = 0), this.element.appendChild(this.iframe), this.params["fit-box"]) this.iframe.style.width = "100%", this.iframe.style.height = "100%";
        else {
            const t = this;

            function e() {
                const e = t.iframe.parentNode.offsetHeight + t.params.offset,
                    s = t.iframe.parentNode.offsetWidth + t.params.offset,
                    i = t.params.resolution_mod;
                i > s / e ? (t.iframe.style.width = e * i + "px", t.iframe.style.height = e + "px") : (t.iframe.style.width = s + "px", t.iframe.style.height = s / i + "px")
            }
            if (window.hasOwnProperty("ResizeObserver")) {
                new ResizeObserver((() => {
                    window.requestAnimationFrame(e)
                })).observe(this.element)
            } else window.addEventListener("resize", (() => {
                window.requestAnimationFrame(e)
            }));
            e()
        }
    }, p.prototype.buildHTML = function() {
        const t = this.element.parentNode;
        e(this.element, "youtube-background video-background");
        const s = {
            height: "100%",
            width: "100%",
            "z-index": "0",
            position: "absolute",
            overflow: "hidden",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        };
        if (this.params["mute-button"] || (s["pointer-events"] = "none"), (this.params["load-background"] || this.params.poster) && (this.params["load-background"] && (s["background-image"] = "url(https://img.youtube.com/vi/" + this.ytid + "/maxresdefault.jpg)"), this.params.poster && (s["background-image"] = this.params.poster), s["background-size"] = "cover", s["background-repeat"] = "no-repeat", s["background-position"] = "center"), this.params["inline-styles"]) {
            for (let t in s) this.element.style[t] = s[t];
            ["absolute", "fixed", "relative", "sticky"].indexOf(t.style.position) || (t.style.position = "relative")
        }
        if (this.is_mobile && !this.params.mobile) return this.element;
        if (this.params["play-button"] || this.params["mute-button"]) {
            const e = document.createElement("div");
            e.className = "video-background-controls", e.style.position = "absolute", e.style.top = "10px", e.style.right = "10px", e.style["z-index"] = 2, this.controls_element = e, t.appendChild(e)
        }
        return this.element
    }, p.prototype.play = function() {
        if (this.buttons.hasOwnProperty("play")) {
            const t = this.buttons.play;
            s(t.element, t.button_properties.stateClassName), e(t.element.firstChild, t.button_properties.stateChildClassNames[0]), s(t.element.firstChild, t.button_properties.stateChildClassNames[1])
        }
        this.player && (this.params["start-at"] && this.player.getCurrentTime() < this.params["start-at"] && this.seekTo(this.params["start-at"]), this.player.playVideo(), this.element.dispatchEvent(new CustomEvent("video-background-play", {
            bubbles: !0,
            detail: this
        })))
    }, p.prototype.pause = function() {
        if (this.buttons.hasOwnProperty("play")) {
            const t = this.buttons.play;
            e(t.element, t.button_properties.stateClassName), s(t.element.firstChild, t.button_properties.stateChildClassNames[0]), e(t.element.firstChild, t.button_properties.stateChildClassNames[1])
        }
        this.player && (this.player.pauseVideo(), this.element.dispatchEvent(new CustomEvent("video-background-pause", {
            bubbles: !0,
            detail: this
        })))
    }, p.prototype.unmute = function() {
        if (this.buttons.hasOwnProperty("mute")) {
            const t = this.buttons.mute;
            s(t.element, t.button_properties.stateClassName), e(t.element.firstChild, t.button_properties.stateChildClassNames[0]), s(t.element.firstChild, t.button_properties.stateChildClassNames[1])
        }
        this.player && (this.player.unMute(), this.element.dispatchEvent(new CustomEvent("video-background-unmute", {
            bubbles: !0,
            detail: this
        })))
    }, p.prototype.mute = function() {
        if (this.buttons.hasOwnProperty("mute")) {
            const t = this.buttons.mute;
            e(t.element, t.button_properties.stateClassName), s(t.element.firstChild, t.button_properties.stateChildClassNames[0]), e(t.element.firstChild, t.button_properties.stateChildClassNames[1])
        }
        this.player && (this.player.mute(), this.element.dispatchEvent(new CustomEvent("video-background-mute", {
            bubbles: !0,
            detail: this
        })))
    }, p.prototype.generateActionButton = function(i) {
        const a = document.createElement("button");
        a.className = i.className, a.innerHTML = i.innerHtml, e(a.firstChild, i.stateChildClassNames[0]), this.params[i.condition_parameter] === i.initialState && (e(a, i.stateClassName), s(a.firstChild, i.stateChildClassNames[0]), e(a.firstChild, i.stateChildClassNames[1]));
        const o = this;
        a.addEventListener("click", (function(e) {
            t(this, i.stateClassName) ? (o.state[i.name] = !1, o[i.actions[0]]()) : (o.state[i.name] = !0, o[i.actions[1]]())
        })), this.buttons[i.name] = {
            element: a,
            button_properties: i
        }, this.controls_element.appendChild(a)
    }, m.prototype.injectPlayer = function() {
        this.iframe = document.createElement("iframe"), this.iframe.setAttribute("frameborder", 0), this.iframe.setAttribute("allow", ["autoplay; mute"]);
        let t = "https://player.vimeo.com/video/" + this.vid + "?background=1&controls=0";
        if (this.params.muted && (t += "&muted=1"), this.params.autoplay && (t += "&autoplay=1"), this.params.loop && (t += "&loop=1&autopause=0"), this.params["start-at"] && (t += "#t=" + this.params["start-at"] + "s"), this.iframe.src = t, this.uid && (this.iframe.id = this.uid), (this.params["load-background"] || this.params.poster) && (this.params.poster && (wrapper_styles["background-image"] = this.params.poster), wrapper_styles["background-size"] = "cover", wrapper_styles["background-repeat"] = "no-repeat", wrapper_styles["background-position"] = "center"), this.params["inline-styles"] && (this.iframe.style.top = "50%", this.iframe.style.left = "50%", this.iframe.style.transform = "translateX(-50%) translateY(-50%)", this.iframe.style.position = "absolute", this.iframe.style.opacity = 1), this.element.appendChild(this.iframe), this.params["fit-box"]) this.iframe.style.width = "100%", this.iframe.style.height = "100%";
        else {
            const t = this,
                e = function() {
                    const e = t.iframe.parentNode.offsetHeight + t.params.offset,
                        s = t.iframe.parentNode.offsetWidth + t.params.offset,
                        i = t.params.resolution_mod;
                    i > s / e ? (t.iframe.style.width = e * i + "px", t.iframe.style.height = e + "px") : (t.iframe.style.width = s + "px", t.iframe.style.height = s / i + "px")
                };
            if (window.hasOwnProperty("ResizeObserver")) {
                new ResizeObserver((() => {
                    window.requestAnimationFrame(e)
                })).observe(this.element)
            } else window.addEventListener("resize", (() => {
                window.requestAnimationFrame(e)
            }));
            e()
        }
    }, m.prototype.buildHTML = function() {
        const t = this.element.parentNode;
        e(this.element, "youtube-background");
        const s = {
            height: "100%",
            width: "100%",
            "z-index": "0",
            position: "absolute",
            overflow: "hidden",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        };
        if ((this.params["load-background"] || this.params.poster) && (this.params.poster && (s["background-image"] = this.params.poster), s["background-size"] = "cover", s["background-repeat"] = "no-repeat", s["background-position"] = "center"), this.params["mute-button"] || (s["pointer-events"] = "none"), this.params["load-background"] && (s["background-size"] = "cover", s["background-repeat"] = "no-repeat", s["background-position"] = "center"), this.params["inline-styles"]) {
            for (let t in s) this.element.style[t] = s[t];
            ["absolute", "fixed", "relative", "sticky"].indexOf(t.style.position) || (t.style.position = "relative")
        }
        return this.element
    }, h.prototype.seekTo = function(t) {
        this.player.hasOwnProperty("fastSeek") ? this.player.fastSeek(t) : this.player.currentTime = t
    }, h.prototype.injectPlayer = function() {
        this.player = document.createElement("video"), this.player.muted = this.params.muted, this.player.autoplay = this.params.autoplay, this.player.loop = this.params.loop, this.player.playsinline = !0, this.player.setAttribute("id", this.uid), this.params["inline-styles"] && (this.player.style.top = "50%", this.player.style.left = "50%", this.player.style.transform = "translateX(-50%) translateY(-50%)", this.player.style.position = "absolute", this.player.style.opacity = 0, this.player.addEventListener("canplay", (t => {
            t.target.style.opacity = 1
        })));
        const t = this,
            e = document.createElement("source");
        if (e.setAttribute("src", this.link), e.setAttribute("type", this.mime), this.player.appendChild(e), this.element.appendChild(this.player), this.params["fit-box"]) this.player.style.width = "100%", this.player.style.height = "100%";
        else {
            function e() {
                const e = t.player.parentNode.offsetHeight + t.params.offset,
                    s = t.player.parentNode.offsetWidth + t.params.offset,
                    i = t.params.resolution_mod;
                i > s / e ? (t.player.style.width = e * i + "px", t.player.style.height = e + "px") : (t.player.style.width = s + "px", t.player.style.height = s / i + "px")
            }
            if (window.hasOwnProperty("ResizeObserver")) {
                new ResizeObserver((() => {
                    window.requestAnimationFrame(e)
                })).observe(this.element)
            } else window.addEventListener("resize", (() => {
                window.requestAnimationFrame(e)
            }));
            e()
        }
    }, h.prototype.buildHTML = function() {
        const t = this.element.parentNode;
        e(this.element, "video-background");
        const s = {
            height: "100%",
            width: "100%",
            "z-index": "0",
            position: "absolute",
            overflow: "hidden",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        };
        if (this.params["mute-button"] || (s["pointer-events"] = "none"), (this.params["load-background"] || this.params.poster) && (this.params.poster && (s["background-image"] = `url('${this.params.poster}')`), s["background-size"] = "cover", s["background-repeat"] = "no-repeat", s["background-position"] = "center"), this.params["inline-styles"]) {
            for (let t in s) this.element.style[t] = s[t];
            ["absolute", "fixed", "relative", "sticky"].indexOf(t.style.position) || (t.style.position = "relative")
        }
        if (this.is_mobile && !this.params.mobile) return this.element;
        if (this.params["play-button"] || this.params["mute-button"]) {
            const e = document.createElement("div");
            e.className = "video-background-controls", e.style.position = "absolute", e.style.top = "10px", e.style.right = "10px", e.style["z-index"] = 2, this.controls_element = e, t.appendChild(e)
        }
        return this.element
    }, h.prototype.play = function() {
        if (this.buttons.hasOwnProperty("play")) {
            const t = this.buttons.play;
            s(t.element, t.button_properties.stateClassName), e(t.element.firstChild, t.button_properties.stateChildClassNames[0]), s(t.element.firstChild, t.button_properties.stateChildClassNames[1])
        }
        this.player && (this.player.play(), this.element.dispatchEvent(new CustomEvent("video-background-play", {
            bubbles: !0,
            detail: this
        })))
    }, h.prototype.pause = function() {
        if (this.buttons.hasOwnProperty("play")) {
            const t = this.buttons.play;
            e(t.element, t.button_properties.stateClassName), s(t.element.firstChild, t.button_properties.stateChildClassNames[0]), e(t.element.firstChild, t.button_properties.stateChildClassNames[1])
        }
        this.player && (this.player.pause(), this.element.dispatchEvent(new CustomEvent("video-background-pause", {
            bubbles: !0,
            detail: this
        })))
    }, h.prototype.unmute = function() {
        if (this.buttons.hasOwnProperty("mute")) {
            const t = this.buttons.mute;
            s(t.element, t.button_properties.stateClassName), e(t.element.firstChild, t.button_properties.stateChildClassNames[0]), s(t.element.firstChild, t.button_properties.stateChildClassNames[1])
        }
        this.player && (this.player.muted = !1, this.element.dispatchEvent(new CustomEvent("video-background-unmute", {
            bubbles: !0,
            detail: this
        })))
    }, h.prototype.mute = function() {
        if (this.buttons.hasOwnProperty("mute")) {
            const t = this.buttons.mute;
            e(t.element, t.button_properties.stateClassName), s(t.element.firstChild, t.button_properties.stateChildClassNames[0]), e(t.element.firstChild, t.button_properties.stateChildClassNames[1])
        }
        this.player && (this.player.muted = !0, this.element.dispatchEvent(new CustomEvent("video-background-mute", {
            bubbles: !0,
            detail: this
        })))
    }, h.prototype.generateActionButton = function(i) {
        const a = document.createElement("button");
        a.className = i.className, a.innerHTML = i.innerHtml, e(a.firstChild, i.stateChildClassNames[0]), this.params[i.condition_parameter] === i.initialState && (e(a, i.stateClassName), s(a.firstChild, i.stateChildClassNames[0]), e(a.firstChild, i.stateChildClassNames[1]));
        const o = this;
        a.addEventListener("click", (function(e) {
            t(this, i.stateClassName) ? (o.state[i.name] = !1, o[i.actions[0]]()) : (o.state[i.name] = !0, o[i.actions[1]]())
        })), this.buttons[i.name] = {
            element: a,
            button_properties: i
        }, this.controls_element.appendChild(a)
    }, u.prototype.getVidID = function(t) {
        if (null != t)
            for (let e in this.re) {
                const s = t.match(this.re[e]);
                if (s && s.length) return this.re[e].lastIndex = 0, {
                    id: s[1],
                    type: e,
                    regex_pts: s,
                    link: t
                }
            }
        return null
    }, u.prototype.generateUID = function(t) {
        let e = t + "-" + a(0, 9999);
        for (; this.index.hasOwnProperty(e);) e = t + "-" + a(0, 9999);
        return e
    }, u.prototype.pauseVideos = function() {
        for (let t in this.index) this.index[t].pause()
    }, u.prototype.playVideos = function() {
        for (let t in this.index) this.index[t].play()
    }, u.prototype.initYTPlayers = function(t) {
        const e = this;
        window.onYouTubeIframeAPIReady = function() {
            for (let t in e.index) e.index[t] instanceof p && e.index[t].initYTPlayer();
            t && setTimeout(t, 100)
        }, window.hasOwnProperty("YT") && window.YT.loaded && window.onYouTubeIframeAPIReady()
    }, "function" == typeof jQuery && ((d = jQuery).fn.youtube_background = function(t) {
        const e = d(this);
        return new u(this, t), e
    }), window.VideoBackgrounds = u
}();