import Sequelize from 'sequelize';

const tableName = 'Difficulty';

const Table = global.sequelize.define(tableName,
  {
    id: {
      allowNull: false,
      primaryKey: true,
      unique: true,
      type: Sequelize.INTEGER,
    },
    multiplier: {
      type: Sequelize.INTEGER,
      allowNull: false,
      trim: true,
    },
    loss: {
      type: Sequelize.INTEGER,
      allowNull: false,
      trim: true,
    },
    click_nbr: {
      type: Sequelize.INTEGER,
      allowNull: false,
      trim: true,
    },
    hard: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
    },
    deletedAt: {
      type: Sequelize.DATE,
    },      
  },
);

Table.associate = (models) => {
};

Table.getDifficultyById = async (id) => {
  return Table.findById(id, {
    attributes: ['id', 'multiplier', 'loss', 'click_nbr'],
  });
};
  
Table.changeMultiplier = async ({ id, multiplier }) => {
  return Table.updateOne({ multiplier }, { where: { id } });
};

Table.changeLoss = async ({ id, loss }) => {
  return Table.updateOne({ loss }, { where: { id } });
};

Table.changeHard = async ({ id, hard }) => {
  return Table.updateOne({ hard }, { where: { id } });
};

export default Table;