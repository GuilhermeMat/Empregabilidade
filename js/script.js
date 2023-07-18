const scriptURL = 'https://script.google.com/macros/s/AKfycbxgUCZe2qJ7xgLYqGxGsHU9rRlDDQm29KfBeLqiqXvtrnoBrtYig1z4Uc8cd6nO7ugEvA/exec'
    const form = document.forms['submit-to-google-sheet']
    const sucess = document.getElementById('sucess');
    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(form => {
        sucess.innerHTML="Dados Salvos com Sucesso!";
    setTimeout(function()
    {
        sucess.innerHTML="";
    },5000)
    form.reset();
    })
    .catch(error => console.error('Erro!', error.message))
})