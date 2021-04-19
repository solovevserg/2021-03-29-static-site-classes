function helloWorld() {
    console.log('Hellow, world!', new Date());
}

function filterPhilosophers(query) {
    query = query.toLowerCase()
    const philosophersTbody = document.getElementById('philosophers-list');

    for (const philosopherTr of philosophersTbody.children) {
        const name = philosopherTr.querySelector('td:nth-child(2)').innerText.toLowerCase();
        const isSatisfied = name.includes(query);
        philosopherTr.classList.toggle('hidden', !isSatisfied);
    }
}

function main() {
    const search = document.querySelector('#search');

    search.addEventListener('input', event => {
        const query = event.target.value;
        filterPhilosophers(query);
    });
}

main();