(()=>{"use strict";var t=[];function n(e,o){if(!o){for(var i=void 0;(i=n(e,!0))==t[t.length-1];);return t.push(i),i}return Math.floor(Math.random()*e)}const e=function(t){var n=this;t.split(": ").forEach((function(t,e){switch(e){case 0:n.symbol=t.trim();break;case 1:n.meaning=t.trim()}}))},o=function(){function t(){this.list=[]}return t.prototype.addWord=function(t){this.list.push(t)},t.prototype.getList=function(){return JSON.parse(JSON.stringify(this.list))},t.prototype.getItem=function(t){return this.list[t]},t}();const i=function(){function t(t){this._input=t}return t.prototype.interpret=function(){var t=new o;return this._input.split("\n").forEach((function(n){t.addWord(new e(n))})),t},t}();document.getElementById("textFileReader").onchange=function(t){var n=t.target.files[0],e=document.getElementById("output"),o=new FileReader;o.onload=function(t){var n,o;e.innerHTML=t.target.result,n=t.target.result,o=new i(n).interpret(),globalThis.model=o,u(document.getElementById("test")),r.click()},o.onerror=function(t){e.innerHTML="Cannot read the file"},o.readAsText(n)},globalThis.isShownOutput=!1;var r=document.getElementById("btnNext");function u(t){t.style.display="initial"}function l(t){t.style.display="none"}globalThis.aFunc=function(){console.log(t)},document.getElementById("btnStart").onclick=function(){document.getElementById("textFileReader").click()},document.getElementById("btnAnswer").onclick=function(){u(document.getElementById("answer"))},document.getElementById("btnNext").onclick=function(){var t,e=globalThis.model,o=n(e.getList().length,!1),i=e.getItem(o);t=i.meaning,document.getElementById("answer").innerHTML=t,function(t){document.getElementById("question").innerHTML=t}(i.symbol),l(document.getElementById("answer")),u(document.getElementById("btnAnswer"))},document.getElementById("toggle").onclick=function(){var t=document.getElementById("output");globalThis.isShownOutput?l(t):u(t),globalThis.isShownOutput=!globalThis.isShownOutput}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSxXQWhDaENnQixFQUFZakIsU0FBU0MsZUFBZSxhQUN4QyxFQUVBRCxTQUFTQyxlQUFlLFVBQVU4QixRQUFRLFdBQ3RDLElBQUl4QixFQUFTUCxTQUFTQyxlQUFlLFVBQ2xDYyxXQUFXUSxjQUNWSSxFQUFZcEIsR0FHWlUsRUFBWVYsR0FFaEJRLFdBQVdRLGVBQWdCUixXQUFXUSxhQUMxQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXl0b29scy8uL3NyYy91dGlsL1JhbmRvbUFycmF5QWNjZXNzb3IudHMiLCJ3ZWJwYWNrOi8vbXl0b29scy8uL3NyYy9Xb3JkLnRzIiwid2VicGFjazovL215dG9vbHMvLi9zcmMvV29yZExpc3QudHMiLCJ3ZWJwYWNrOi8vbXl0b29scy8uL3NyYy9TdHJpbmdUb1dvcmRMaXN0SW50ZXJwcmV0ZXIudHMiLCJ3ZWJwYWNrOi8vbXl0b29scy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZW5lcmF0ZWRJbmRleDpudW1iZXJbXSA9IFtdO1xyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBSYW5kb21BcnJheUFjY2Vzc29yKG1heFVwcGVyQm91bmQ6bnVtYmVyLHVzZVNhbWVJbmRleDpib29sZWFuKTpudW1iZXJcclxue1xyXG4gICAgaWYoIXVzZVNhbWVJbmRleCl7XHJcbiAgICAgICAgbGV0IGluZGV4Om51bWJlcjtcclxuICAgICAgICB3aGlsZSAoKGluZGV4ID0gUmFuZG9tQXJyYXlBY2Nlc3NvcihtYXhVcHBlckJvdW5kLHRydWUpKVxyXG4gICAgICAgICAgICA9PWdlbmVyYXRlZEluZGV4W2dlbmVyYXRlZEluZGV4Lmxlbmd0aC0xXSl7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdlbmVyYXRlZEluZGV4LnB1c2goaW5kZXgpXHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSptYXhVcHBlckJvdW5kKTtcclxufVxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBSZXNldCgpe1xyXG4gICAgZ2VuZXJhdGVkSW5kZXgubGVuZ3RoPTA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHZW5lcmF0ZWRJbmRleEFycmF5KCl7XHJcbiAgICBjb25zb2xlLmxvZyhnZW5lcmF0ZWRJbmRleCk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXb3Jke1xyXG4gICAgc3ltYm9sOnN0cmluZztcclxuICAgIG1lYW5pbmc6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGxpbmU6c3RyaW5nKXtcclxuICAgICAgICBsaW5lLnNwbGl0KFwiOiBcIikuZm9yRWFjaCgodixpKT0+e1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbCA9IHYudHJpbSgpICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lYW5pbmcgPSB2LnRyaW0oKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgV29yZCBmcm9tIFwiLi9Xb3JkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JkTGlzdHtcclxuICAgIGxpc3Q6V29yZFtdXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFdvcmQod29yZDpXb3JkKXtcclxuICAgICAgICB0aGlzLmxpc3QucHVzaCh3b3JkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaXN0KCk6V29yZFtde1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLmxpc3QpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtKGluZGV4Om51bWJlcik6V29yZHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saXN0W2luZGV4XTtcclxuICAgIH1cclxufSIsImltcG9ydCBXb3JkIGZyb20gXCIuL1dvcmRcIjtcclxuaW1wb3J0IFdvcmRMaXN0IGZyb20gXCIuL1dvcmRMaXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdUb1dvcmRMaXN0SW50ZXJwcmV0ZXJ7XHJcbiAgICBfaW5wdXQ6c3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5wdXQ6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xyXG4gICAgfVxyXG4gICAgaW50ZXJwcmV0KCk6V29yZExpc3R7XHJcbiAgICAgICAgbGV0IHdvcmRMaXN0ID0gbmV3IFdvcmRMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5faW5wdXQuc3BsaXQoXCJcXG5cIikuZm9yRWFjaChsaW5lPT57XHJcbiAgICAgICAgICAgIHdvcmRMaXN0LmFkZFdvcmQobmV3IFdvcmQobGluZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB3b3JkTGlzdDtcclxuICAgIH1cclxufSIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtSYW5kb21BcnJheUFjY2Vzc29yLCBnZXRHZW5lcmF0ZWRJbmRleEFycmF5fSBmcm9tIFwiLi91dGlsL1JhbmRvbUFycmF5QWNjZXNzb3JcIjtcclxuaW1wb3J0IFN0cmluZ1RvV29yZExpc3RJbnRlcnByZXRlciBmcm9tIFwiLi9TdHJpbmdUb1dvcmRMaXN0SW50ZXJwcmV0ZXJcIjtcclxuaW1wb3J0IFdvcmRMaXN0IGZyb20gXCIuL1dvcmRMaXN0XCI7XHJcbmltcG9ydCBXb3JkIGZyb20gXCIuL1dvcmRcIjtcclxuXHJcblxyXG5mdW5jdGlvbiByZWFkaW5nVGV4dChldmVudDogRXZlbnQpIHtcclxuICAgIGNvbnN0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBsZXQgZmlsZSA9IGlucHV0LmZpbGVzWzBdO1xyXG5cclxuICAgIGNvbnN0IG91dHB1dDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IGZpbGVSZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIG91dHB1dC5pbm5lckhUTUwgPSBlLnRhcmdldC5yZXN1bHQgYXMgc3RyaW5nXHJcbiAgICAgICAgY2FwdHVyZVRlc3RNb2RlbChlLnRhcmdldC5yZXN1bHQgYXMgc3RyaW5nKTtcclxuICAgICAgICBiZWdpblRoZVRlc3QoKTtcclxuICAgIH07XHJcbiAgICBmaWxlUmVhZGVyLm9uZXJyb3IgPSAoZXJyOiBQcm9ncmVzc0V2ZW50KSA9PiB7IG91dHB1dC5pbm5lckhUTUwgPSBcIkNhbm5vdCByZWFkIHRoZSBmaWxlXCIgfTtcclxuICAgIGZpbGVSZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxufVxyXG5cclxuY29uc3QgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRGaWxlUmVhZGVyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmlucHV0Lm9uY2hhbmdlID0gcmVhZGluZ1RleHQ7XHJcbmdsb2JhbFRoaXMuaXNTaG93bk91dHB1dCA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gY2FwdHVyZVRlc3RNb2RlbCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGludGVycHJldGVyOlN0cmluZ1RvV29yZExpc3RJbnRlcnByZXRlciA9IG5ldyBTdHJpbmdUb1dvcmRMaXN0SW50ZXJwcmV0ZXIodGV4dCk7XHJcbiAgICBjb25zdCB3b3JkTGlzdDpXb3JkTGlzdCA9IGludGVycHJldGVyLmludGVycHJldCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2cod29yZExpc3QuZ2V0TGlzdCgpKTtcclxuICAgIGdsb2JhbFRoaXMubW9kZWwgPSB3b3JkTGlzdDtcclxuICAgIFxyXG59XHJcblxyXG5jb25zdCBidG5OZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5OZXh0XCIpO1xyXG5cclxuZnVuY3Rpb24gYmVnaW5UaGVUZXN0KCl7XHJcbiAgICBzaG93RWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3RcIikpXHJcbiAgICBidG5OZXh0LmNsaWNrKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXAoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuU3RhcnRcIikub25jbGljaz0oKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dEZpbGVSZWFkZXJcIikuY2xpY2soKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuQW5zd2VyXCIpLm9uY2xpY2s9KCk9PntcclxuICAgICAgICBzaG93QW5zd2VyQm94KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5OZXh0XCIpLm9uY2xpY2s9KCk9PntcclxuICAgICAgICBsZXQgd29yZExpc3Q6V29yZExpc3QgPSBnbG9iYWxUaGlzLm1vZGVsIGFzIFdvcmRMaXN0O1xyXG4gICAgICAgIGxldCBpbmRleCA9IFJhbmRvbUFycmF5QWNjZXNzb3Iod29yZExpc3QuZ2V0TGlzdCgpLmxlbmd0aCxmYWxzZSk7XHJcbiAgICAgICAgbGV0IHdvcmQ6V29yZCA9d29yZExpc3QuZ2V0SXRlbShpbmRleCk7XHJcblxyXG4gICAgICAgIHNldEFuc3dlcih3b3JkLm1lYW5pbmcpXHJcbiAgICAgICAgc2V0UXVlc3Rpb24od29yZC5zeW1ib2wpXHJcbiAgICAgICAgaGlkZUFuc3dlckJveCgpO1xyXG4gICAgICAgIHNob3dFbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuQW5zd2VyXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZVwiKS5vbmNsaWNrPSgpPT57XHJcbiAgICAgICAgbGV0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpO1xyXG4gICAgICAgIGlmKGdsb2JhbFRoaXMuaXNTaG93bk91dHB1dCl7XHJcbiAgICAgICAgICAgIGhpZGVFbGVtZW50KG91dHB1dClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0VsZW1lbnQob3V0cHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2xvYmFsVGhpcy5pc1Nob3duT3V0cHV0PSAhZ2xvYmFsVGhpcy5pc1Nob3duT3V0cHV0O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93RWxlbWVudChlbGU6SFRNTEVsZW1lbnQpe1xyXG4gICAgZWxlLnN0eWxlLmRpc3BsYXk9XCJpbml0aWFsXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dFbGVtZW50QXNQcmUoZWxlOkhUTUxFbGVtZW50KXtcclxuICAgIGVsZS5zdHlsZS5kaXNwbGF5PVwicHJlXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVFbGVtZW50KGVsZTpIVE1MRWxlbWVudCl7XHJcbiAgICBlbGUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Fuc3dlckJveCgpe1xyXG4gICAgc2hvd0VsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnN3ZXJcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlQW5zd2VyQm94KCl7XHJcbiAgICBoaWRlRWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuc3dlclwiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFF1ZXN0aW9uKHZhbHVlOnN0cmluZyl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9uXCIpLmlubmVySFRNTCA9IHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRBbnN3ZXIodmFsdWU6c3RyaW5nKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5zd2VyXCIpLmlubmVySFRNTCA9IHZhbHVlO1xyXG59XHJcbmdsb2JhbFRoaXMuYUZ1bmMgPSBnZXRHZW5lcmF0ZWRJbmRleEFycmF5O1xyXG5wcmVwKCk7Il0sIm5hbWVzIjpbImdlbmVyYXRlZEluZGV4IiwiUmFuZG9tQXJyYXlBY2Nlc3NvciIsIm1heFVwcGVyQm91bmQiLCJ1c2VTYW1lSW5kZXgiLCJpbmRleCIsImxlbmd0aCIsInB1c2giLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsaW5lIiwic3BsaXQiLCJmb3JFYWNoIiwidiIsImkiLCJzeW1ib2wiLCJ0cmltIiwibWVhbmluZyIsInRoaXMiLCJsaXN0IiwiYWRkV29yZCIsIndvcmQiLCJnZXRMaXN0IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZ2V0SXRlbSIsImlucHV0IiwiX2lucHV0IiwiaW50ZXJwcmV0Iiwid29yZExpc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib25jaGFuZ2UiLCJldmVudCIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsIm91dHB1dCIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsInRleHQiLCJpbm5lckhUTUwiLCJyZXN1bHQiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJzaG93RWxlbWVudCIsImJ0bk5leHQiLCJjbGljayIsIm9uZXJyb3IiLCJlcnIiLCJyZWFkQXNUZXh0IiwiaXNTaG93bk91dHB1dCIsImVsZSIsInN0eWxlIiwiZGlzcGxheSIsImhpZGVFbGVtZW50IiwiYUZ1bmMiLCJjb25zb2xlIiwibG9nIiwib25jbGljayIsInZhbHVlIiwic2V0UXVlc3Rpb24iXSwic291cmNlUm9vdCI6IiJ9