const resolvers = {
  User: {
    usersGroups: (parent, args, context, info) => parent.getUsersGroups()
  },
  UsersGroup: {
    users: (parent, args, context, info) => parent.getUsers()
  },
  Query: {
    users: (parent, args, { db }, info) => db.user.findAll(),
    user: (parent, { id }, { db }, info) => db.user.findByPk(id),
    usersGroups: (parent, args, { db }, info) => db.userGroup.findAll(),
    usersGroup: (parent, { id }, { db }, info) => db.userGroup.findByPk(id)
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

module.exports = resolvers;
