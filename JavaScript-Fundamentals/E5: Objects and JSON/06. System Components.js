function systemComponents(arr) {
    let systemComponents = new Map();
    for (let line of arr) {
        let [system, component, subcomponent] = line.split(/\s*\|\s*/g);
        if (!systemComponents.has(system))
            systemComponents.set(system, new Map);
        if (!systemComponents.get(system).has(component))
            systemComponents.get(system).set(component, new Set);
        systemComponents.get(system).get(component).add(subcomponent);
    }
    let systemsSorted = [...systemComponents.keys()].sort(function (a, b) {
        let componentsA = [...systemComponents.get(a).keys()];
        let componentsB = [...systemComponents.get(b).keys()];
        if (componentsA.length !== componentsB.length)
            return componentsB.length - componentsA.length;
        return a.localeCompare(b);
    });
    for (let system of systemsSorted) {
        console.log(system);
        let componentsSorted = [...systemComponents.get(system).keys()].sort(function (a, b) {
            let subcomponentsA = [...systemComponents.get(system).get(a)];
            let subcomponentsB = [...systemComponents.get(system).get(b)];
            return subcomponentsB.length - subcomponentsA.length;
        });
        for (let component of componentsSorted) {
            console.log(`|||${component}`);
            for (let subcomponent of systemComponents.get(system).get(component))
                console.log(`||||||${subcomponent}`);
        }
    }
}

systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);