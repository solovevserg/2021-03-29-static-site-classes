function helloWorld() {
    console.log('Hellow, world!', new Date());
}



function filterPhilosophers(query) {
    const philosophersTbody = document.getElementById('philosophers-list');

    const options = {
        keys: [
            "innerText",
        ]
    };

    const fuse = new Fuse([...philosophersTbody.children], options);

    const satisfiedPhilosophers = fuse.search(query);
    console.log(satisfiedPhilosophers);
    for (const philosopherTr of philosophersTbody.children) {
            const isSatisfied = satisfiedPhilosophers.map(({item}) => item).includes(philosopherTr);
            philosopherTr.classList.toggle('hidden', !isSatisfied);
    }

    // for (const philosopherTr of philosophersTbody.children) {
    //     const name = philosopherTr.querySelector('td:nth-child(2)').innerText;
    //     const isSatisfied = name.includes(query);
    //     philosopherTr.classList.toggle('hidden', !isSatisfied);
    // }
}

function main() {
    const search = document.querySelector('#search');

    search.addEventListener('input', event => {
        const query = event.target.value;
        filterPhilosophers(query);
    })

    console.log(Fuse);

}

main();