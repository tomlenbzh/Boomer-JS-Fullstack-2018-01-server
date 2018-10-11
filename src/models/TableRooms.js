import Sequelize from 'sequelize';

const tableName = 'rooms';

const Table = global.sequelize.define(tableName,
  {
    id: {
      allowNull: false,
      unique: true,
      type: Sequelize.INTEGER,
    },
    start_time: {
      type: Sequelize.DATE,
      allowNull: false,
      trim: true,
    },
    background: {
      type: Sequelize.STRING,
      allowNull: false,
      trim: true,
    },
    hot_potatoe: {
      type: Sequelize.STRING,
      allowNull: false,
      trim: true,
    },
    difficulty: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      trim: true,
    },
  },
);

Table.associate = (models) => {
  Table.belongsTo(models.difficulty, { foreignKey: 'difficulty' });
};

Table.getRoomById = async (id) => {
  return Table.findById(id, {
    attributes: ['id', 'start_time', 'background', 'hot_potatoe', 'difficulty'],
  });
};

Table.changeBackground = async ({ id, background }) => {
  return Table.updateOne({ background }, { where: { id } });
};

Table.changeHotPotatoe = async ({ id, hot_potatoe }) => {
  return Table.updateOne({ hot_potatoe }, { where: { id } });
};

Table.changeDifficulty = async ({ id, difficulty }) => {
  return Table.updateOne({ difficulty }, { where: { id } });
};

export default Table;