import Sequelize from 'sequelize';

const tableName = 'rooms';

const Table = global.sequelize.define(tableName,
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
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
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      trim: true,
    },
    level: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      trim: true,
    },
  },
);

Table.associate = (models) => {
  Table.belongsTo(models.difficulties, { targetKey: 'id', foreignKey: 'level' });
};

Table.getRooms = async (models) => {
  return Table.findAll({
    include: [{ model: models.difficulties, attributes: ['id', 'title', 'description', 'multiplier', 'loss', 'click_nbr'] }],
    attributes: ['id', 'start_time', 'background', 'hot_potatoe']
  });
};

Table.getRoomById = async (id) => {
  return Table.findById(id, {
    attributes: ['id', 'start_time', 'background', 'hot_potatoe'],
  });
};

Table.changeBackground = async ({ id, background }) => {
  return Table.updateOne({ background }, { where: { id } });
};

Table.changeHotPotatoe = async ({ id, hot_potatoe }) => {
  return Table.updateOne({ hot_potatoe }, { where: { id } });
};

Table.changeDifficulty = async ({ id, level }) => {
  return Table.updateOne({ level }, { where: { id } });
};

export default Table;