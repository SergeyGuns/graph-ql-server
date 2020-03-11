module.exports = {
  User: {
    users: (parent, args, context, info) => parent.getUsers()
  },
  UsersGroup: {
    usersGroup: (parent, args, context, info) => parent.getUsersGroup()
  },
  Query: {
    users: (parent, args, { db }, info) => db.user.findAll(),
    user: (parent, { id }, { db }, info) => db.user.findByPk(id),
    userGroups: (parent, args, { db }, info) => db.userGroup.findAll(),
    userGroup: (parent, { id }, { db }, info) => db.userGroup.findByPk(id)
  },
  Mutation: {
    createUser: (parent, { firstName, lastName, email }, { db }, info) =>
      db.user.create({
        firstName: firstName,
        lastName: lastName,
        email: email
      }),
    updateUser: (parent, { firstName, lastName, id }, { db }, info) =>
      db.user.update(
        {
          firstName: firstName,
          lastName: lastName
        },
        {
          where: {
            id: id
          }
        }
      ),
    deleteUser: (parent, { id }, { db }, info) =>
      db.user.destroy({
        where: {
          id: id
        }
      })
  }
};
