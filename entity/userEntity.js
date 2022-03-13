import typeorm from "typeorm";

const EntitySchema = typeorm.EntitySchema;

const userEntity = new EntitySchema({
    name: "User",
    // tableName: "user",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        },
        email: {
            type: "varchar"
        },
        password: {
            type: "varchar"
        },
    }
})

export default userEntity;