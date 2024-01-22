const User = require("./user");
const chatHistory = require("./chatHistory")


// table relationships then use sequelize 
User.hasMany(chatHistory,{
    foreignKey: 'user_id',
    onDelete: "CASCADE",

});


chatHistory.belongsTo(User,  {
    foreignKey: 'user_id',
    onDelete: "CASCADE",

});



    module.exports = { User, chatHistory};