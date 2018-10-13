import Sequelize from 'sequelize';

const tableName = 'users';

const Table = global.sequelize.define(tableName,
  {
    id: {
      allowNull: false,
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
);

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