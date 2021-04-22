function link(parent, args, context) {
    return context.prisma.vote.findUnique({ where: { id: parent.id } }).link()
  }
  
  function user(parent, args, context) {
    return context.prisma.vote.findUnique({ where: { id: parent.id } }).user()
  }

  function newVoteSubscribe(parent, args, context, info) {
    return context.pubsub.asyncIterator("NEW_VOTE")
  }
  
  const newVote = {
    subscribe: newVoteSubscribe,
    resolve: payload => {
      return payload
    },
  }
  
  module.exports = {
    link,
    user,
    newVote
  }