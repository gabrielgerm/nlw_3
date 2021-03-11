const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {

    //inserir dados na tabela
     await saveOrphanage(db, {
        lat: "-23.7061269",
        lng: "-46.5648841",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "98989897898",
        images: [
            "https://images.unsplash.com/photo-1602571833724-984f81111ce1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", 

            "https://images.unsplash.com/photo-1573924436756-128cf1f6387a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 18h até 8h",
        open_on_weekends: "0"
    })        
     
    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)
    /*
    //remove dado da tabela

    console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
    */
})
