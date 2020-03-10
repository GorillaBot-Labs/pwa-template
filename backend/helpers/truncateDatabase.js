import {models} from '../../db';
import {isProduction} from "../constants";

const truncateDatabase = async () => {
    if (isProduction) {
        throw new Error("DANGER: Attempted to truncate production database.");
    }

    const truncatePromises = Object.values(models).map((model) => {
        model.destroy({ truncate: true });
    });

    return await Promise.all(truncatePromises);
};

export default truncateDatabase;