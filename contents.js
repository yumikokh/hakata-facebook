function setWhatsup() {
  const whatsupArea = document.querySelector('[name="xhpc_message"]');
  if (!whatsupArea) return false;
  const whatsupName = whatsupArea.getAttribute('placeholder').split('―')[0];
  const whatsupText = ['今なんしようと？', 'どげんしたと？', 'とっとーと？'];
  whatsupArea.setAttribute('placeholder', `${whatsupName} ― ${whatsupText[Math.round(Math.random())]}`);
}

function setMore() {
  const moreArea = document.querySelector('._1k0o ._y-c');
  if (!moreArea) return;
  moreArea.textContent = 'もっと見るばってん';
}

function setReaction() {
  const reactBox = document.querySelectorAll('._3vuz');
  const reactionAry = ['よかね！', 'コメントするたい'];
  for (let i = 0; i < reactBox.length ; i++) {
    const cBox = reactBox[i];
    let j = 0;
    while (j < 2) {
      if (cBox.children[j]) {
        cBox.children[j].getElementsByClassName('_18vj')[0].textContent = reactionAry[j];
        if (j === 0) {
          cBox.children[j].addEventListener('mouseover', function() {
            setTimeout(setReactionMenu, 1000);
          });
        }
      }
      j++;
    }
  }
}

function setReactionMenu() {
  const reactMenu = document.querySelectorAll('[data-testid="UFIReactionsMenu"]');
  const reactionAry = ['よかね！', 'ばりよかね', 'うけるっちゃけど', 'すごか', 'かなしか', 'くらす'];
  for (let i = 0; i < reactMenu.length ; i++) {
    const cMenu = reactMenu[i];
    let j = 0;
    while(j < 5) {
      cMenu.children[j].getElementsByClassName('_4sm1')[0].textContent = reactionAry[j];
      j++;
    }
  }
}

setWhatsup()
setMore()

let prevHeight = document.body.clientHeight
setInterval(() => {
  const currentHeight = document.body.clientHeight
  if (currentHeight === prevHeight) return;
  setReaction()
  prevHeight = currentHeight;
}, 1000)
