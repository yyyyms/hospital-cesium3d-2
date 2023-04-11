!(function (t) {
  var e,
    n,
    o,
    i,
    c,
    a =
      '<svg><symbol id="icon-manyou" viewBox="0 0 1024 1024"><path d="M625.394 399.993c0-62.458-49.504-113.263-110.356-113.263-60.855 0-110.301 50.805-110.301 113.263s49.563 113.202 110.36 113.202l-0.059-0.004c60.852 0 110.356-50.739 110.356-113.198z m-110.356 58.921c-30.547 0-55.355-26.144-55.355-58.275 0-32.196 24.808-58.271 55.355-58.271 30.66 0 55.41 26.075 55.41 58.271s-24.75 58.275-55.41 58.275z"  ></path><path d="M686.19 198.17c-46.66-44.939-107.812-69.677-171.152-69.24-64.074 0-124.754 24.555-170.687 69.179-47.688 46.345-73.727 108.218-73.258 174.203 0 1.045 0.117 13.199 2.867 32.229 16.031 93.789 90.578 202.253 134.289 259.4 24.215 30.307 51.289 57.967 80.809 82.558l26.156 20.992 26.035-21.177c29.383-24.804 56.387-52.558 80.633-82.865 53.133-69.855 119.191-171.135 134.172-258.791 2.867-19.947 2.926-32.04 2.926-33.388 0.527-65.496-25.336-127.061-72.79-173.1z m8.836 205.265c-12.054 70.588-68.875 158.121-114.394 217.845-0.352 0.737-1.113 1.414-1.465 1.779-31.656 38.978-64.129 65.313-64.129 65.313s-32.418-25.968-64.133-64.945c-0.351-0.368-1.054-1.103-1.402-1.84-45.582-59.356-102.402-147.195-114.395-217.476-2.226-15.101-2.226-24.246-2.226-24.246-0.699-100.854 81.629-182.674 182.156-182.674 100.582 0 182.914 81.148 182.152 181.998 0 0 0 9.147-2.164 24.246z"  ></path><path d="M728.948 639.965l-58.423 30.56 161.637 55.345-320.426 130.464-319.699-130.959 160.065-53.934-59.817-31.476L49.667 719l462.157 202.376 459.538-202.495z"  ></path></symbol><symbol id="icon-tuichumanyou" viewBox="0 0 1024 1024"><path d="M705.6 124.928a8 8 0 0 0-11.584 7.168v64.192c0 5.504 2.88 10.624 7.488 13.632 22.4 14.08 43.2 30.72 62.208 49.792a355.904 355.904 0 0 1 104.192 251.968 355.392 355.392 0 0 1-104.192 252.032 353.088 353.088 0 0 1-113.216 76.416A352.64 352.64 0 0 1 512 868.096a352.64 352.64 0 0 1-138.496-27.968 353.088 353.088 0 0 1-113.216-76.416A355.904 355.904 0 0 1 156.16 511.68a355.392 355.392 0 0 1 166.4-301.76 16 16 0 0 0 7.488-13.632V131.968a8.064 8.064 0 0 0-11.584-7.168A432.64 432.64 0 0 0 80 506.24c-2.816 238.848 192.512 437.248 431.168 437.76a432.128 432.128 0 0 0 432.832-432.384 432.32 432.32 0 0 0-238.4-386.688zM480 560h64a8 8 0 0 0 8-8v-464A8 8 0 0 0 544 80h-64a8 8 0 0 0-8 8v464c0 4.416 3.584 8 8 8z"  ></path></symbol></svg>',
    d = (d = document.getElementsByTagName("script"))[
      d.length - 1
    ].getAttribute("data-injectcss"),
    l = function (t, e) {
      e.parentNode.insertBefore(t, e);
    };
  if (d && !t.__iconfont__svg__cssinject__) {
    t.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (t) {
      console && console.log(t);
    }
  }
  function s() {
    c || ((c = !0), o());
  }
  function r() {
    try {
      i.documentElement.doScroll("left");
    } catch (t) {
      return void setTimeout(r, 50);
    }
    s();
  }
  (e = function () {
    var t,
      e = document.createElement("div");
    (e.innerHTML = a),
      (a = null),
      (e = e.getElementsByTagName("svg")[0]) &&
        (e.setAttribute("aria-hidden", "true"),
        (e.style.position = "absolute"),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = "hidden"),
        (e = e),
        (t = document.body).firstChild ? l(e, t.firstChild) : t.appendChild(e));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(e, 0)
        : ((n = function () {
            document.removeEventListener("DOMContentLoaded", n, !1), e();
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((o = e),
        (i = t.document),
        (c = !1),
        r(),
        (i.onreadystatechange = function () {
          "complete" == i.readyState && ((i.onreadystatechange = null), s());
        }));
})(window);
