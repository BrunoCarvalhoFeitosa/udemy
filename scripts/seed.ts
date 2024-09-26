const { PrismaClient } = require("@prisma/client")

const database = new PrismaClient()

async function main() {
    try {
        await database.category.createMany({
            data: [
                { name: "Tecnologia da Informação" },
                { name: "Engenharia" },
                { name: "Contabilidade" },
                { name: "Marketing" },
                { name: "Idioma" },
                { name: "Fotografia" },
                { name: "Música" },
            ]
        })

        console.log("Success while seed the database categories.")
    } catch (error) {
        console.error("Error while seed the database categories", error)
    } finally {
        await database.$disconnect()
    }
}

main()