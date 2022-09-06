const { gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
    _id: ID
    pictureID: Int
    category: String
    name: String
    description: String
    price: Int
    serial: [String]
    quantity: Int
    size: String
  }

  type Query {
    products(offset: Int, limit: Int): [Product]
    product(name: String!): Product
    productCategory(category: String!): [Product]
  }

  type Mutation {
  buyProduct(name: String!, description: String!, price: Int!, serial: String!, quantity: Int!): Product
  }
  `;

  module.exports = typeDefs;