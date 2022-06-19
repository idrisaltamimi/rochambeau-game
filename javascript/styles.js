import { data } from "./data.js"

export function styles(player, id) {
   const image = `images/icon-${id}.svg`
   player.style.background = `url(https://idrisaltamimi.github.io/rochambeau-game/${image}) no-repeat center/${data[id].size}, linear-gradient(#fff, #fff) padding-box,linear-gradient(to top, ${data[id].background}) border-box`

   const boxShadow = x => {
      if (x.matches) {
         player.style.boxShadow = `inset 0 12px 0 0 rgba(0, 0, 0, .15), 0 13px 0 0 ${data[id].bottomBorder}, 0 16px 2px 0 rgba(0, 0, 0, .2)`
      } else {
         player.style.boxShadow = `inset 0 5px 1px 0 rgba(0, 0, 0, .15), 0 6px 0 0 ${data[id].bottomBorder}, 0 8px 2px 0 rgba(0, 0, 0, .2)`
      }
   }

   boxShadow(screenWidth())
   screenWidth().addListener(boxShadow)
}

export function screenWidth() {
   return window.matchMedia("(min-width: 650px)")
}