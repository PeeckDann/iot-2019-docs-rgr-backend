import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Address extends ExtendedModel {
  public country!: string;
  public city!: string;
  public street!: string;
  public buildingNumber!: string;
  public flatNumber!: string;
}

Address.init(
  {
    country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    street: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    buildingNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    flatNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    sequelize: db,
    modelName: 'address'
  }
);

export default Address;
