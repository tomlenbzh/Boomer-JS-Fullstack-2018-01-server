import Sequelize from 'sequelize';
import { randomBytes } from 'crypto';
import { cpus } from 'os';

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
      defaultValue: Sequelize.fn('NOW'),
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
    count: {
      type: Sequelize.INTEGER,
      allowNull: false,
      trim: true,
      defaultValue: 0,
    },
    level: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      trim: true,
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
  Table.belongsTo(models.difficulties, { targetKey: 'id', foreignKey: 'level' });
};

Table.getRooms = async (models) => {
  return Table.findAll({
    include: [{ model: models.difficulties, attributes: ['id', 'title', 'description', 'background', 'multiplier', 'loss', 'click_nbr'] }],
    attributes: ['id', 'start_time', 'background', 'hot_potatoe']
  });
};

Table.getRoomById = async (models, id) => {
  return Table.findById(id, {
    include: [{ model: models.difficulties, attributes: ['id', 'title', 'description', 'multiplier', 'loss', 'click_nbr'] }],
    attributes: ['id', 'start_time', 'background', 'count', 'hot_potatoe']
  });
};

Table.increaseCount = async ({ models, id }) => {
  return Table.getRoomById(models, id).then(room => {
    return Table.updateOne({ count: room.count + 1 }, { where: { id } }).then(room => {
      return Table.checkDestroy({ models, id });
    });
  });
};

Table.checkDestroy = async ({ models, id }) => {
  return Table.getRoomById(models, id).then(room => {
    if (room.count < room.difficulty.click_nbr) {
      return 'alive';
    } else {
      return Table.destroy({ where: { id } }).then(room => {
        return Table.create({ hot_potatoe: "potatoe.png", background: "back.png", level: (Math.floor(Math.random() * Math.floor(7) + 1)) }).then(room => {
          return 'destroy';
        });
      });
    }
  });
}

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