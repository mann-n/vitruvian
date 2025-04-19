// Answer

document.querySelectorAll('.answer_item-question').forEach((el) => {
    el.addEventListener('click', () => {
        let content = el.nextElementSibling;

        if(content.style.maxHeight) {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
})

document.getElementById("burger").addEventListener('click', function(){
    document.querySelector(".header_inner").classList.toggle("open")
  })