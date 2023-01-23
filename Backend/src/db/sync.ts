import { Model } from "sequelize";

export const synchronizeDB = (models: typeof Model[]) => {
    models.forEach(model => {
        model.sync();
    });
}