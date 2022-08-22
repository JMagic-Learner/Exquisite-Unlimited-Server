const { Product } = require('../models');

const resolvers = {
    Query: {
        products: async () => {
            return Product.find();
          },
        product: async (parent, { name }) => {
            return Product.findOne({ name });
          },
        },
    Mutation: {
        buyProduct: async (parent, {id, quantity}, context) => {
            if(context) {
            return Product.findOneAndUpdate(
                { _id: id },
                {
                    $addToSet: {
                        quantity: { quantity: context.quantity },
                    },
                },
                {
                    new: true,       
                },
            );
            }
            throw new Error;
  
        }
    },
}


module.exports = resolvers;