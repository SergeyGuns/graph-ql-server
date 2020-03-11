module.exports = `
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    posts: [UsersGroup!]!
  }
  type UsersGroup {
    id: ID!
    name: String!
    users: [User!]!
  }
  type Query {
    users: [User!]!
    user(id: ID!): User
    usersGroup(id: ID!): UsersGroup
    usersGroups: [UsersGroup!]!
  }
  type Mutation {
    createUser(firstName: String!,lastName: String!,email: String!)
  }
`;
