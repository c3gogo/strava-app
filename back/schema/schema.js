const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = graphql;

const Athlete = require('./../models/Athlete')

const AthleteType = new GraphQLObjectType({
  name: 'Athlete',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    city: { type: GraphQLString },
    sex: { type: GraphQLString },
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    athletes: {
      type: new GraphQLList(AthleteType),
      resolve: async (parent, args) => {
        let res = await Athlete.find()
        console.log(res)
        return res
      }
    },
    athlete: {
      type: AthleteType,
      args: {
        id: { type: GraphQLID }
      },
      resolve: async (parent, args) => {
        return await new Athlete().findById(args.id)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})