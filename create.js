const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("app", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
});

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ФИО: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Дата_рождения: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Название_ВУЗа: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Специальность: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Курс: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Размер_стипендии: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "Студенты",
    timestamps: false,
  }
);

(async () => {
  try {
    await User.sync({
      alter: true,
      force: false,
    });
    const user = await User.create({
      ФИО: "Савченко Василий Олегович",
      Курс: "1",
      Название_ВУЗа: "Синергия",
      Специальность: "Прикладная Информатика",
      Дата_рождения: "2006.09.22",
    });
    console.log("Новый студент введён в базу с ID:", user.id);
  } catch (error) {
    console.error(error);
  }
})();
