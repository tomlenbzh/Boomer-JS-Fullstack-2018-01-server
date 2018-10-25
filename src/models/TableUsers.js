import Sequelize from 'sequelize';

import { crypto, validator } from '../base/utils';

const tableName = 'users';

const Table = global.sequelize.define(tableName,
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    pseudo: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      trim: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    defeat: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      trim: true,
    },
    score: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      trim: true,
    },
    rank:{
      type: Sequelize.INTEGER,
      defaultValue: 0,
      trim: true,
    },
  },
  {
    hooks: {
      beforeCreate: async (instance, options) => {
        return Table.beforeCreateUpdate(instance, options, true);
      },
      beforeUpdate: async (instance, options) => {
        return Table.beforeCreateUpdate(instance, options, false);
      },
    },    
  },
);

Table.beforeCreateUpdate = async (instance, options, isCreate) => {
  const { fields } = options;
  if (isCreate && fields.includes('pseudo')) {
    const exist = await Table.findOne({ where: { pseudo: instance.pseudo } });
    if (exist) {
      Table.throw(400, global.__('Pseudo is already in use'));
    }
  }
  if (isCreate || fields.includes('password')) {
    const { args, msg } = validator.get('password');
    if (!instance.password.match(args)) {
      Table.throw(400, msg);
    }
    instance.password = crypto.encryptPassword(instance.password);
  }
};

Table.associate = (models) => {
};

Table.getUserById = async (id) => {
  return Table.findById(id, {
    attributes: ['id', 'pseudo', 'password', 'defeat', 'score', 'rank'],
  });
};

Table.changePassword = async ({ id, password }) => {
  return Table.updateOne({ password }, { where: { id } });
};

Table.changePseudo = async ({ id, pseudo }) => {
  return Table.updateOne({ pseudo }, { where: { id } });
};

Table.changeDefeat = async ({ id, defeat }) => {
  return Table.updateOne({ defeat }, { where: { id } });
};

Table.changeScore = async ({ id, score }) => {
  return Table.updateOne({ score }, { where: { id } });
};

Table.changeRank = async ({ id, rank }) => {
  return Table.updateOne({ rank }, { where: { id } });
};

export default Table;