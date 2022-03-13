import typeorm from "typeorm";

const EntitySchema = typeorm.EntitySchema;

const boardEntity = new EntitySchema({
    name: "Board",
    // tableName: "board",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        title: {
            type: "varchar"
        },
        content: {
            type: "varchar"
        },
        author: {
            type: "varchar"
        },
        created_at: {
            type: "datetime"
        },
        updated_at: {
            type: "datetime"
        },
    },
})

export default boardEntity;