const { Product } = require('../models');

const resolvers = {
    Query: {
        products: async (parent, {offset, limit}) => {
            return Product.find().sort({"pictureID":+1});;
          },
        product: async (parent, { name }) => {
            return Product.findOne({ name });
          },
        productCategory: async (parent, {category}) => {
            return Product.find({category})
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