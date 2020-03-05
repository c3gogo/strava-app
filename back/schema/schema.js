const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList, GraphQLFloat } = graphql;

const Athlete = require('./../models/Athlete')
const Activity = require('./../models/Activity')

const AthleteType = new GraphQLObjectType({
  name: 'Athlete',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    city: { type: GraphQLString },
    sex: { type: GraphQLString },
    activities: {
      type: new GraphQLList(ActivityType),
      resolve: async (parent, args) => {
        return await Activity.find({athleteId: parent.id})
      }
    }
  })
})

const ActivityType = new GraphQLObjectType({
  name: 'Activity',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    distance: { type: GraphQLFloat },
    averageSpeed: { type: GraphQLFloat },
    date: { type: GraphQLString },
    athleteId: { type: GraphQLString }

  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {

    activity: {
      type: ActivityType,
      args: {
        id: { type: GraphQLID }
      },
      resolve: async (parent, args) => {
        return await new Activity().findById(args.id)
      }
    },

    activities: {
      type: new GraphQLList(ActivityType),
      resolve: async (parent, args) => {
        let res = await Activity.find()
        console.log(res)
        return res
      }
    },

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